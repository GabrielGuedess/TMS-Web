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
  useGetAllLegalClientQuery,
  useCreateLegalContractMutation,
  useGetAllCarrierCompanyComboQuery,
} from 'graphql/generated';

import dayjs from 'dayjs';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';
import { DatePicker } from 'components/molecules/DatePicker';

import { createContractSchema } from './schema';
import {
  type CreateContractProps,
  type CreateContractInputProps,
  type CreateContractOutputProps,
} from './types';

const CreateContractRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateContractProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearchCarrierCompany, setIsLoadingSearchCarrierCompany] =
    useState(false);
  const [isLoadingSearchLegalClient, setIsLoadingSearchLegalClient] =
    useState(false);

  const [searchLegalClient, setSearchLegalClient] = useState('');
  const [searchCarrierCompany, setSearchCarrierCompany] = useState('');

  const router = useRouter();

  const [createContract] = useCreateLegalContractMutation();

  const { data: dataCarrierCompanies, refetch: refetchCarrierCompanies } =
    useGetAllCarrierCompanyComboQuery();

  const { data: dataLegalClients, refetch: refetchLegalClients } =
    useGetAllLegalClientQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateContractInputProps>({
    resolver: zodResolver(createContractSchema),
    defaultValues: {
      observations: '',
      delivery_conditions: '',
      effective_date: dayjs().toDate(),
      legalClient: {
        id: '',
        description: '',
      },
      carrierCompany: {
        id: '',
        description: '',
      },
    },
  });

  const handleSearchCarrierCompany = async () => {
    setIsLoadingSearchCarrierCompany(true);

    try {
      await refetchCarrierCompanies({
        where: {
          OR: [
            {
              rntrc: {
                mode: QueryMode.Insensitive,
                contains: searchCarrierCompany,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar as Transportadoras!');
    } finally {
      setIsLoadingSearchCarrierCompany(false);
    }
  };

  const handleSearchLegalClient = async () => {
    setIsLoadingSearchLegalClient(true);

    try {
      await refetchLegalClients({
        where: {
          OR: [
            {
              LegalPerson: {
                cnpj: {
                  mode: QueryMode.Insensitive,
                  contains: searchLegalClient,
                },
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar as Transportadoras!');
    } finally {
      setIsLoadingSearchLegalClient(false);
    }
  };

  const handleCreate = async (data: CreateContractOutputProps) => {
    setIsLoading(true);

    try {
      const Contract = await createContract({
        variables: {
          legalContractInput: {
            observations: data.observations,
            effective_date: data.effective_date,
            legal_client_id: data.legalClient.id,
            carrier_company_id: data.carrierCompany.id,
            delivery_conditions: data.delivery_conditions,
          },
        },
      });

      toast.success('Contrato criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/physical-customers/${Contract.data?.createLegalContract.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Contrato!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Contrato!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchCarrierCompany !== '') {
        handleSearchCarrierCompany();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchCarrierCompany]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchLegalClient !== '') {
        handleSearchLegalClient();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchLegalClient]);

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
                label="Observações"
                onChange={onChange}
                aria-label="Observações"
                placeholder="Observações"
                isInvalid={!!errors.observations?.message}
                errorMessage={errors.observations?.message}
                required
                isFullWidth
              />
            )}
            control={control}
            name="observations"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChange={onChange}
                label="Condições de Entrega"
                aria-label="Condições de Entrega"
                placeholder="Condições de Entrega"
                isInvalid={!!errors.delivery_conditions?.message}
                errorMessage={errors.delivery_conditions?.message}
                required
                isFullWidth
              />
            )}
            control={control}
            name="delivery_conditions"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <DatePicker
                date={value as Date}
                label="Data Efetiva"
                setDate={item => onChange(item as Date)}
                isInvalid={!!errors.effective_date?.message}
                errorMessage={errors.effective_date?.message}
              />
            )}
            control={control}
            name="effective_date"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataCarrierCompanies?.getAllCarrierCompany?.map(
                  item => ({
                    id: item.id,
                    description: `${item.rntrc}`,
                  }),
                )}
                value={value}
                label="Transportadora"
                search={searchCarrierCompany}
                setValue={item => onChange(item)}
                setSearch={setSearchCarrierCompany}
                isInvalid={!!errors.carrierCompany?.id}
                placeholder="Selecione a Transportadora"
                isLoading={isLoadingSearchCarrierCompany}
                emptyMessage="Transportadora não encontrado"
                className="bg-transparent dark:bg-transparent"
                placeholderCommand="Pesquise a Transportadora..."
                errorMessage={errors.carrierCompany?.id?.message}
              />
            )}
            control={control}
            name="carrierCompany"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataLegalClients?.getAllLegalClient?.map(item => ({
                  id: item.id,
                  description: `${item.LegalPerson.cnpj}`,
                }))}
                value={value}
                label="Cliente Jurídico"
                search={searchLegalClient}
                setSearch={setSearchLegalClient}
                setValue={item => onChange(item)}
                isInvalid={!!errors.legalClient?.id}
                isLoading={isLoadingSearchLegalClient}
                placeholder="Selecione a Cliente Jurídico"
                emptyMessage="Cliente Jurídico não encontrado"
                className="bg-transparent dark:bg-transparent"
                errorMessage={errors.legalClient?.id?.message}
                placeholderCommand="Pesquise a Cliente Jurídico..."
              />
            )}
            control={control}
            name="legalClient"
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateContractOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            aria-label="Update Contract"
            className="min-w-[12.404rem]"
          >
            Criar Contrato
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateContract = forwardRef(CreateContractRef);
