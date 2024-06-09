'use client';

import { useRouter } from 'next/navigation';

import { useForm, Controller } from 'react-hook-form';
import {
  useState,
  useEffect,
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import {
  QueryMode,
  useGetAllLegalPersonComboQuery,
  useCreateCarrierCompanyMutation,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { createCarrierSchema } from './schema';
import {
  type CreateCarrierProps,
  type CreateCarrierInputProps,
  type CreateCarrierOutputProps,
} from './types';

const CreateCarrierRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateCarrierProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearchLegalPerson, setIsLoadingSearchLegalPerson] =
    useState(false);

  const [searchLegalPerson, setSearchLegalPerson] = useState('');

  const router = useRouter();

  const [createCarrier] = useCreateCarrierCompanyMutation();

  const { data: dataLegalPersons, refetch: refetchLegalPersons } =
    useGetAllLegalPersonComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCarrierInputProps>({
    resolver: zodResolver(createCarrierSchema),
    defaultValues: {
      rntrc: '',
      legalPerson: {
        id: '',
        description: '',
      },
    },
  });

  const handleSearchLegalPerson = async () => {
    setIsLoadingSearchLegalPerson(true);

    try {
      await refetchLegalPersons({
        where: {
          OR: [
            {
              cnpj: {
                contains: searchLegalPerson,
                mode: QueryMode.Insensitive,
              },
            },
            {
              fantasy_name: {
                contains: searchLegalPerson,
                mode: QueryMode.Insensitive,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Pessoas Jurídicas!');
    } finally {
      setIsLoadingSearchLegalPerson(false);
    }
  };

  const handleCreate = async (data: CreateCarrierOutputProps) => {
    setIsLoading(true);

    try {
      const carrier = await createCarrier({
        variables: {
          carrier: {
            rntrc: data.rntrc,
            legalPersonId: data.legalPerson.id,
          },
        },
      });

      toast.success('Transportadora criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/carrier-companies/${carrier.data?.createCarrierCompany.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Transportadora!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Transportadora!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchLegalPerson !== '') {
        handleSearchLegalPerson();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchLegalPerson]);

  return (
    <div
      className={twMerge(
        'flex flex-col gap-6 md:grid md:grid-cols-12',
        className,
      )}
      {...props}
      ref={ref}
    >
      <form
        aria-label="Form"
        className="col-span-12 flex flex-col justify-between gap-6 rounded-2xl border border-zumthor-100 bg-white-lilac-50 p-6 shadow-default transition-all dark:border-shark-950 dark:bg-smoke-950"
      >
        <div className="grid grid-cols-auto-fill gap-x-4 gap-y-10">
          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                label="RNTRC"
                aria-label="RNTRC"
                placeholder="RNTRC"
                onChange={onChange}
                isInvalid={!!errors.rntrc?.message}
                errorMessage={errors.rntrc?.message}
                required
                isFullWidth
              />
            )}
            name="rntrc"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataLegalPersons?.getAllLegalPerson?.map(item => ({
                  id: item.id,
                  description: `${item.cnpj} - ${item.fantasy_name}`,
                }))}
                value={value}
                label="Pessoa Jurídica"
                search={searchLegalPerson}
                setSearch={setSearchLegalPerson}
                setValue={item => onChange(item)}
                isInvalid={!!errors.legalPerson?.id}
                isLoading={isLoadingSearchLegalPerson}
                placeholder="Selecione a Pessoa Jurídica"
                emptyMessage="Pessoa Jurídica não encontrado"
                errorMessage={errors.legalPerson?.id?.message}
                className="bg-transparent dark:bg-transparent"
                placeholderCommand="Pesquise a Pessoa Jurídica..."
              />
            )}
            control={control}
            name="legalPerson"
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateCarrierOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            aria-label="Update Carrier"
            className="min-w-[12.404rem]"
          >
            Criar Transportadora
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateCarrier = forwardRef(CreateCarrierRef);
