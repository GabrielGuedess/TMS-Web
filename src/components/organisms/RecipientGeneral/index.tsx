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
  useGetAllLegalPersonComboQuery,
  useGetAllNaturalPersonComboQuery,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { recipientGeneralSchema } from './schema';
import {
  type RecipientGeneralProps,
  type RecipientGeneralInputProps,
} from './types';

const RecipientGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  RecipientGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading] = useState(false);
  const [isLoadingSearchNaturalPerson, setIsLoadingSearchNaturalPerson] =
    useState(false);
  const [isLoadingSearchLegalPerson, setIsLoadingSearchLegalPerson] =
    useState(false);

  const [searchLegalPerson, setSearchLegalPerson] = useState('');
  const [searchNaturalPerson, setSearchNaturalPerson] = useState('');

  const { data: dataNaturalPersons, refetch: refetchNaturalPersons } =
    useGetAllNaturalPersonComboQuery();
  const { data: dataLegalPersons, refetch: refetchLegalPersons } =
    useGetAllLegalPersonComboQuery();

  const {
    control,
    formState: { errors },
  } = useForm<RecipientGeneralInputProps>({
    resolver: zodResolver(recipientGeneralSchema),
    defaultValues: {
      naturalPerson: {
        id: data?.getRecipient?.natural_person_id ?? '',
        description: `${data?.getRecipient?.NaturalPerson?.cpf ?? ''} - ${data?.getRecipient?.NaturalPerson?.name ?? ''}`,
      },
      legalPerson: {
        id: data?.getRecipient?.legal_person_id ?? '',
        description: `${data?.getRecipient?.LegalPerson?.cnpj ?? ''} - ${data?.getRecipient?.LegalPerson?.fantasy_name ?? ''}`,
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
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            aria-label="Update Recipient"
            className="min-w-[12.404rem]"
          >
            Criar Destinatário
          </Button>
        </div>
      </form>
    </div>
  );
};

export const RecipientGeneral = forwardRef(RecipientGeneralRef);
