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
  useUpdateLegalClientMutation,
  useGetAllLegalPersonComboQuery,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { legalClientGeneralSchema } from './schema';
import {
  type LegalClientGeneralProps,
  type LegalClientGeneralInputProps,
  type LegalClientGeneralOutputProps,
} from './types';

const LegalClientGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  LegalClientGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearchLegalPerson, setIsLoadingSearchLegalPerson] =
    useState(false);

  const [searchLegalPerson, setSearchLegalPerson] = useState('');

  const [updateLegalClient] = useUpdateLegalClientMutation();

  const { data: dataLegalPersons, refetch: refetchLegalPersons } =
    useGetAllLegalPersonComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LegalClientGeneralInputProps>({
    resolver: zodResolver(legalClientGeneralSchema),
    defaultValues: {
      branch: data?.getLegalClientModel?.branch ?? '',
      legalPerson: {
        id: data?.getLegalClientModel?.legal_person_id ?? '',
        description: data?.getLegalClientModel?.LegalPerson.cnpj ?? '',
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

  const handleUpdate = async (newData: LegalClientGeneralOutputProps) => {
    setIsLoading(true);

    try {
      await updateLegalClient({
        variables: {
          updateLegalClientId: data.getLegalClientModel?.id ?? '',
          legalClientInput: {
            LegalPerson: {},
            branch: newData.branch,
            legal_person_id: newData.legalPerson.id,
          },
        },
      });

      toast.success('Cliente Jurídico atualizado com sucesso!');
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar Cliente Jurídico!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar Cliente Jurídico!');
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
              const update = values as LegalClientGeneralOutputProps;

              handleUpdate(update);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update LegalClient"
          >
            Atualizar Cliente Jurídico
          </Button>
        </div>
      </form>
    </div>
  );
};

export const LegalClientGeneral = forwardRef(LegalClientGeneralRef);
