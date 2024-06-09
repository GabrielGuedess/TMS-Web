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
  useCreateSenderMutation,
  useGetAllLegalPersonComboQuery,
  useGetAllNaturalPersonComboQuery,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { createSenderSchema } from './schema';
import {
  type CreateSenderProps,
  type CreateSenderInputProps,
  type CreateSenderOutputProps,
} from './types';

const CreateSenderRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateSenderProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchNaturalPerson, setIsLoadingSearchNaturalPerson] =
    useState(false);
  const [isLoadingSearchLegalPerson, setIsLoadingSearchLegalPerson] =
    useState(false);

  const [searchLegalPerson, setSearchLegalPerson] = useState('');
  const [searchNaturalPerson, setSearchNaturalPerson] = useState('');

  const router = useRouter();

  const [createSender] = useCreateSenderMutation();

  const { data: dataNaturalPersons, refetch: refetchNaturalPersons } =
    useGetAllNaturalPersonComboQuery();
  const { data: dataLegalPersons, refetch: refetchLegalPersons } =
    useGetAllLegalPersonComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSenderInputProps>({
    resolver: zodResolver(createSenderSchema),
    defaultValues: {
      legalPerson: {
        id: '',
        description: '',
      },
      naturalPerson: {
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
            {
              name: {
                mode: QueryMode.Insensitive,
                contains: searchNaturalPerson,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Pessoa Física!');
    } finally {
      setIsLoadingSearchNaturalPerson(false);
    }
  };

  const handleCreate = async (data: CreateSenderOutputProps) => {
    setIsLoading(true);

    try {
      const Sender = await createSender({
        variables: {
          sender: {
            legal_person_id: data.legalPerson.id,
            natural_person_id: data.naturalPerson.id,
          },
        },
      });

      toast.success('Remetente criado com sucesso!');

      router.refresh();

      router.push(`/dashboard/senders/${Sender.data?.createSender.id}/general`);
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Remetente!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Remetente!');
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
              <ComboBox
                values={dataNaturalPersons?.getAllNaturalPerson?.map(item => ({
                  id: item.id,
                  description: `${item.cpf} - ${item.name}`,
                }))}
                value={value}
                label="Pessoa Física"
                search={searchNaturalPerson}
                setValue={item => onChange(item)}
                setSearch={setSearchNaturalPerson}
                isInvalid={!!errors.naturalPerson?.id}
                placeholder="Selecione a Pessoa Física"
                isLoading={isLoadingSearchNaturalPerson}
                emptyMessage="Pessoa Física não encontrado"
                className="bg-transparent dark:bg-transparent"
                errorMessage={errors.naturalPerson?.id?.message}
                placeholderCommand="Pesquise a Pessoa Física..."
              />
            )}
            control={control}
            name="naturalPerson"
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
              const data = values as CreateSenderOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            aria-label="Update Sender"
            className="min-w-[12.404rem]"
          >
            Criar Remetente
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateSender = forwardRef(CreateSenderRef);
