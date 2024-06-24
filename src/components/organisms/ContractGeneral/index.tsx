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
  useGetAllLegalClientQuery,
  useUpdatelegalContractMutation,
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

import { contractGeneralSchema } from './schema';
import {
  type ContractGeneralProps,
  type ContractGeneralInputProps,
  type ContractGeneralOutputProps,
} from './types';

const ContractGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  ContractGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearchCarrierCompany, setIsLoadingSearchCarrierCompany] =
    useState(false);
  const [isLoadingSearchLegalClient, setIsLoadingSearchLegalClient] =
    useState(false);

  const [searchLegalClient, setSearchLegalClient] = useState('');
  const [searchCarrierCompany, setSearchCarrierCompany] = useState('');

  const [contractUpdate] = useUpdatelegalContractMutation();

  const { data: dataCarrierCompanies, refetch: refetchCarrierCompanies } =
    useGetAllCarrierCompanyComboQuery();

  const { data: dataLegalClients, refetch: refetchLegalClients } =
    useGetAllLegalClientQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContractGeneralInputProps>({
    resolver: zodResolver(contractGeneralSchema),
    defaultValues: {
      observations: data?.getLegalContractModel?.observations ?? '',
      delivery_conditions:
        data?.getLegalContractModel?.delivery_conditions ?? '',
      effective_date: dayjs(
        data?.getLegalContractModel?.effective_date as Date,
      ).toDate(),
      carrierCompany: {
        id: data?.getLegalContractModel?.carrier_company_id,
        description: data?.getLegalContractModel?.CarrierCompany.rntrc,
      },
      legalClient: {
        id: data?.getLegalContractModel?.legal_client_id,
        description: data?.getLegalContractModel?.LegalClient.LegalPerson.cnpj,
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

  const handleUpdate = async (newData: ContractGeneralOutputProps) => {
    setIsLoading(true);

    try {
      await contractUpdate({
        variables: {
          updatelegalContractId: data?.getLegalContractModel?.id ?? '',
          legalContractInput: {
            observations: newData.observations,
            effective_date: newData.effective_date,
            legal_client_id: newData.legalClient.id,
            carrier_company_id: newData.carrierCompany.id,
            delivery_conditions: newData.delivery_conditions,
          },
        },
      });

      toast.success('Contrato atualizado com sucesso!');
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar Contrato!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar Contrato!');
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
              const update = values as ContractGeneralOutputProps;

              handleUpdate(update);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            aria-label="Update Contract"
            className="min-w-[12.404rem]"
          >
            Atualizar Contrato
          </Button>
        </div>
      </form>
    </div>
  );
};

export const ContractGeneral = forwardRef(ContractGeneralRef);
