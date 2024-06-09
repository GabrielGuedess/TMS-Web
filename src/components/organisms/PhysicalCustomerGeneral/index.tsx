'use client';

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
  useGetAllNaturalPersonComboQuery,
  useUpdatePhysicalCustomerMutation,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { physicalCustomerGeneralSchema } from './schema';
import {
  type PhysicalCustomerGeneralProps,
  type PhysicalCustomerGeneralInputProps,
  type PhysicalCustomerGeneralOutputProps,
} from './types';

const PhysicalCustomerGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  PhysicalCustomerGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearchNaturalPerson, setIsLoadingSearchNaturalPerson] =
    useState(false);

  const [searchNaturalPerson, setSearchNaturalPerson] = useState('');

  const [updatePhysicalCustomer] = useUpdatePhysicalCustomerMutation();

  const { data: dataNaturalPersons, refetch: refetchNaturalPersons } =
    useGetAllNaturalPersonComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PhysicalCustomerGeneralInputProps>({
    resolver: zodResolver(physicalCustomerGeneralSchema),
    defaultValues: {
      branch: data?.getPhysicalCustomer?.branch ?? '',
      naturalPerson: {
        id: data?.getPhysicalCustomer?.natural_person_id,
        description: data?.getPhysicalCustomer?.NaturalPerson.cpf,
      },
    },
  });

  const handleSearchNaturalPerson = async () => {
    setIsLoadingSearchNaturalPerson(true);

    try {
      await refetchNaturalPersons({
        where: {
          OR: [
            {
              cpf: {
                mode: QueryMode.Insensitive,
                contains: searchNaturalPerson,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Pessoas Física!');
    } finally {
      setIsLoadingSearchNaturalPerson(false);
    }
  };

  const handleCreate = async (newData: PhysicalCustomerGeneralOutputProps) => {
    setIsLoading(true);

    try {
      await updatePhysicalCustomer({
        variables: {
          updatePhysicalCustomerId: data?.getPhysicalCustomer?.id ?? '',
          ownDriverUpdate: {
            branch: newData.branch,
            natural_person_id: newData.naturalPerson.id,
          },
        },
      });

      toast.success('Cliente Físico atualizado com sucesso!');
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar Cliente Físico!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar Cliente Físico!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchNaturalPerson !== '') {
        handleSearchNaturalPerson();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchNaturalPerson]);

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
                label="Ramo"
                value={value}
                aria-label="Brach"
                placeholder="Ramo"
                onChange={onChange}
                isInvalid={!!errors.branch?.message}
                errorMessage={errors.branch?.message}
                required
                isFullWidth
              />
            )}
            name="branch"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataNaturalPersons?.getAllNaturalPerson?.map(item => ({
                  id: item.id,
                  description: `${item.cpf}`,
                }))}
                value={value}
                label="Cliente Físico"
                search={searchNaturalPerson}
                setValue={item => onChange(item)}
                setSearch={setSearchNaturalPerson}
                isInvalid={!!errors.naturalPerson?.id}
                isLoading={isLoadingSearchNaturalPerson}
                placeholder="Selecione a Cliente Físico"
                emptyMessage="Cliente Físico não encontrado"
                className="bg-transparent dark:bg-transparent"
                errorMessage={errors.naturalPerson?.id?.message}
                placeholderCommand="Pesquise a Cliente Físico..."
              />
            )}
            control={control}
            name="naturalPerson"
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const update = values as PhysicalCustomerGeneralOutputProps;

              handleCreate(update);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update PhysicalCustomer"
          >
            Atualizar Cliente Físico
          </Button>
        </div>
      </form>
    </div>
  );
};

export const PhysicalCustomerGeneral = forwardRef(PhysicalCustomerGeneralRef);
