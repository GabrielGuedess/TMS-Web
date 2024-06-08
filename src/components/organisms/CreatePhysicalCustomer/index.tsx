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
  useGetAllNaturalPersonComboQuery,
  useCreatePhysicalCustomerMutation,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { createPhysicalCustomerSchema } from './schema';
import {
  type CreatePhysicalCustomerProps,
  type CreatePhysicalCustomerInputProps,
  type CreatePhysicalCustomerOutputProps,
} from './types';

const CreatePhysicalCustomerRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreatePhysicalCustomerProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearchNaturalPerson, setIsLoadingSearchNaturalPerson] =
    useState(false);

  const [searchNaturalPerson, setSearchNaturalPerson] = useState('');

  const router = useRouter();

  const [createPhysicalCustomer] = useCreatePhysicalCustomerMutation();

  const { data: dataNaturalPersons, refetch: refetchNaturalPersons } =
    useGetAllNaturalPersonComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePhysicalCustomerInputProps>({
    resolver: zodResolver(createPhysicalCustomerSchema),
    defaultValues: {
      branch: '',
      naturalPerson: {
        id: '',
        description: '',
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

  const handleCreate = async (data: CreatePhysicalCustomerOutputProps) => {
    setIsLoading(true);

    try {
      const PhysicalCustomer = await createPhysicalCustomer({
        variables: {
          data: {
            branch: data.branch,
            natural_person_id: data.naturalPerson.id,
          },
        },
      });

      toast.success('Cliente Físico criado com sucesso!');

      router.push(
        `/dashboard/physical-customers/${PhysicalCustomer.data?.createPhysicalCustomer.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Cliente Físico!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Cliente Físico!');
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
              const data = values as CreatePhysicalCustomerOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update PhysicalCustomer"
          >
            Criar Cliente Físico
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreatePhysicalCustomer = forwardRef(CreatePhysicalCustomerRef);
