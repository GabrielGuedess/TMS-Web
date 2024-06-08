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
  useCreateLegalClientMutation,
  useGetAllLegalPersonComboQuery,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { createLegalClientSchema } from './schema';
import {
  type CreateLegalClientProps,
  type CreateLegalClientInputProps,
  type CreateLegalClientOutputProps,
} from './types';

const CreateLegalClientRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateLegalClientProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearchLegalPerson, setIsLoadingSearchLegalPerson] =
    useState(false);

  const [searchLegalPerson, setSearchLegalPerson] = useState('');

  const router = useRouter();

  const [createLegalClient] = useCreateLegalClientMutation();

  const { data: dataLegalPersons, refetch: refetchLegalPersons } =
    useGetAllLegalPersonComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLegalClientInputProps>({
    resolver: zodResolver(createLegalClientSchema),
    defaultValues: {
      branch: '',
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
                mode: QueryMode.Insensitive,
                contains: searchLegalPerson,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Pessoas Jurídico!');
    } finally {
      setIsLoadingSearchLegalPerson(false);
    }
  };

  const handleCreate = async (data: CreateLegalClientOutputProps) => {
    setIsLoading(true);

    try {
      const LegalClient = await createLegalClient({
        variables: {
          legalClientInput: {
            branch: data.branch,
            legal_person_id: data.legalPerson.id,
          },
        },
      });

      toast.success('Cliente Jurídico criado com sucesso!');

      router.push(
        `/dashboard/physical-customers/${LegalClient.data?.createLegalClient.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Cliente Jurídico!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Cliente Jurídico!');
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
                values={dataLegalPersons?.getAllLegalPerson?.map(item => ({
                  id: item.id,
                  description: `${item.cnpj}`,
                }))}
                value={value}
                label="Cliente Jurídico"
                search={searchLegalPerson}
                setSearch={setSearchLegalPerson}
                setValue={item => onChange(item)}
                isInvalid={!!errors.legalPerson?.id}
                isLoading={isLoadingSearchLegalPerson}
                placeholder="Selecione a Cliente Jurídico"
                emptyMessage="Cliente Jurídico não encontrado"
                className="bg-transparent dark:bg-transparent"
                errorMessage={errors.legalPerson?.id?.message}
                placeholderCommand="Pesquise a Cliente Jurídico..."
              />
            )}
            control={control}
            name="legalPerson"
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateLegalClientOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update LegalClient"
          >
            Criar Cliente Jurídico
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateLegalClient = forwardRef(CreateLegalClientRef);
