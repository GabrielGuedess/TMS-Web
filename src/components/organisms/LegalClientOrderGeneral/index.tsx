'use client';

import { useForm, Controller, useFieldArray } from 'react-hook-form';
import {
  useState,
  useEffect,
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import {
  QueryMode,
  useGetAllLegalContractComboQuery,
  useGetAllCarrierCompanyComboQuery,
  useUpdatelegalClientOrderMutation,
  useGetAllLegalClientQuoteTableComboQuery,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { Separator } from '@radix-ui/react-select';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { PlusIcon } from 'components/atoms/PlusIcon';
import { ComboBox } from 'components/molecules/Combobox';
import { CloseCircleIcon } from 'components/atoms/CloseCircleIcon';

import { legalClientOrderGeneralSchema } from './schema';
import {
  type LegalClientOrderGeneralProps,
  type LegalClientOrderGeneralInputProps,
  type LegalClientOrderGeneralOutputProps,
} from './types';

const LegalClientOrderGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  LegalClientOrderGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchCarrier, setIsLoadingSearchCarrier] = useState(false);
  const [isLoadingSearchLegalContract, setIsLoadingSearchLegalContract] =
    useState(false);
  const [
    isLoadingSearchLegalClientQuoteTable,
    setIsLoadingSearchLegalClientQuoteTable,
  ] = useState(false);

  const [searchCarrier, setSearchCarrier] = useState('');
  const [searchLegalContract, setSearchLegalContract] = useState('');
  const [searchLegalClientQuoteTable, setSearchLegalClientQuoteTable] =
    useState('');

  const [updatelegalClientOrder] = useUpdatelegalClientOrderMutation();

  const { data: dataCarriers, refetch: refetchCarriers } =
    useGetAllCarrierCompanyComboQuery();

  const { data: dataLegalContract, refetch: refetchLegalContract } =
    useGetAllLegalContractComboQuery();

  const {
    data: dataLegalClientQuoteTable,
    refetch: refetchLegalClientQuoteTable,
  } = useGetAllLegalClientQuoteTableComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LegalClientOrderGeneralInputProps>({
    resolver: zodResolver(legalClientOrderGeneralSchema),
    defaultValues: {
      expenses: data?.getLegalClientOrderModel?.expenses ?? [],
      quoteTable: {
        id: data?.getLegalClientOrderModel?.quote_table_id,
        description: data?.getLegalClientOrderModel?.Quote?.codQuote ?? '',
      },
      carrier: {
        id: data?.getLegalClientOrderModel?.carrier_id,
        description:
          data?.getLegalClientOrderModel?.CarrierCompany?.LegalPerson?.cnpj ??
          '',
      },
      legalContract: {
        id: data?.getLegalClientOrderModel?.legal_contract_id,
        description:
          data?.getLegalClientOrderModel?.LegalContract?.contract_number ?? '',
      },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'expenses',
  });

  const handleSearchCarrier = async () => {
    setIsLoadingSearchCarrier(true);

    try {
      await refetchCarriers({
        where: {
          OR: [
            {
              LegalPerson: {
                cnpj: {
                  contains: searchCarrier,
                  mode: QueryMode.Insensitive,
                },
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar as Transportadoras!');
    } finally {
      setIsLoadingSearchCarrier(false);
    }
  };

  const handleSearchLegalContract = async () => {
    setIsLoadingSearchLegalContract(true);

    try {
      await refetchLegalContract({
        where: {
          OR: [
            {
              contract_number: {
                mode: QueryMode.Insensitive,
                contains: searchLegalContract,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Contratos!');
    } finally {
      setIsLoadingSearchLegalContract(false);
    }
  };

  const handleSearchLegalClientQuoteTable = async () => {
    setIsLoadingSearchLegalClientQuoteTable(true);

    try {
      await refetchLegalClientQuoteTable({
        where: {
          OR: [
            {
              cod_quote: {
                mode: QueryMode.Insensitive,
                contains: searchLegalClientQuoteTable,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar as Cotações!');
    } finally {
      setIsLoadingSearchLegalClientQuoteTable(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchCarrier !== '') {
        handleSearchCarrier();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchCarrier]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchLegalClientQuoteTable !== '') {
        handleSearchLegalClientQuoteTable();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchLegalClientQuoteTable]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchLegalContract !== '') {
        handleSearchLegalContract();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchLegalContract]);

  const handleUpdate = async (newData: LegalClientOrderGeneralOutputProps) => {
    setIsLoading(true);

    try {
      await updatelegalClientOrder({
        variables: {
          updatelegalClientOrderId: data.getLegalClientOrderModel?.id ?? '',
          legalClientOrderInput: {
            expenses: newData.expenses,
            carrier_id: newData.carrier.id,
            quote_table_id: newData.quoteTable.id,
            legal_contract_id: newData.legalContract.id,
          },
        },
      });

      toast.success('Pedido Jurídico atualizado com sucesso!');
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar Pedido Jurídico!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar Pedido Jurídico!');
    } finally {
      setIsLoading(false);
    }
  };

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
                values={dataCarriers?.getAllCarrierCompany?.map(item => ({
                  id: item.id,
                  description: `${item.rntrc}`,
                }))}
                value={value}
                label="Transportadora"
                search={searchCarrier}
                setSearch={setSearchCarrier}
                isInvalid={!!errors.carrier?.id}
                setValue={item => onChange(item)}
                isLoading={isLoadingSearchCarrier}
                placeholder="Selecione a Transportadora"
                errorMessage={errors.carrier?.id?.message}
                emptyMessage="Transportadora não encontrado"
                className="bg-transparent dark:bg-transparent"
                placeholderCommand="Pesquise a Transportadora..."
              />
            )}
            name="carrier"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataLegalContract?.getAllLegalContract?.map(item => ({
                  id: item.id,
                  description: `${item.contract_number}`,
                }))}
                value={value}
                label="Contrato Jurídico"
                search={searchLegalContract}
                setValue={item => onChange(item)}
                setSearch={setSearchLegalContract}
                isInvalid={!!errors.legalContract?.id}
                isLoading={isLoadingSearchLegalContract}
                placeholder="Selecione a Contrato Jurídico"
                className="bg-transparent dark:bg-transparent"
                emptyMessage="Contrato Jurídico não encontrado"
                errorMessage={errors.legalContract?.id?.message}
                placeholderCommand="Pesquise a Contrato Jurídico..."
              />
            )}
            control={control}
            name="legalContract"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataLegalClientQuoteTable?.getAllLegalClientQuoteTable?.map(
                  item => ({
                    id: item.id,
                    description: `${item.codQuote}`,
                  }),
                )}
                value={value}
                label="Cotação Jurídica"
                setValue={item => onChange(item)}
                isInvalid={!!errors.quoteTable?.id}
                search={searchLegalClientQuoteTable}
                setSearch={setSearchLegalClientQuoteTable}
                placeholder="Selecione a Cotação Jurídica"
                errorMessage={errors.quoteTable?.id?.message}
                emptyMessage="Cotação Jurídica não encontrado"
                className="bg-transparent dark:bg-transparent"
                isLoading={isLoadingSearchLegalClientQuoteTable}
                placeholderCommand="Pesquise a Cotação Jurídica..."
              />
            )}
            control={control}
            name="quoteTable"
          />
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Separator className="h-[1px] bg-gray-300 transition-all dark:bg-shark-950" />

          <span className="text-sm font-medium text-gray-700 transition-all dark:text-dark-300">
            Despesas
          </span>

          {fields.map((field, index) => (
            <div
              key={index}
              className="grid grid-cols-auto-fill gap-x-4 gap-y-10"
            >
              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    errorMessage={
                      errors.expenses?.[index]?.expenseName?.message
                    }
                    key={index}
                    label="Nome"
                    value={value}
                    aria-label="Name"
                    placeholder="Nome"
                    onChange={onChange}
                    isInvalid={!!errors.expenses?.[index]?.expenseName?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name={`expenses.${index}.expenseName`}
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    type="number"
                    value={value}
                    label="Valor"
                    aria-label="value"
                    onChange={onChange}
                    placeholder="Valor"
                    isInvalid={!!errors.expenses?.[index]?.value?.message}
                    errorMessage={errors.expenses?.[index]?.value?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name={`expenses.${index}.value`}
              />

              <div className="flex flex-1 items-center">
                <button
                  type="button"
                  aria-label="Remove Item"
                  className="p-2 text-red-500"
                  onClick={() => remove(index)}
                >
                  <CloseCircleIcon />
                </button>
              </div>
            </div>
          ))}

          <div className="flex w-full justify-center">
            <button
              type="button"
              aria-label="Add Expense"
              onClick={() => append({ value: 0, expenseName: '' })}
              className="max-w-min cursor-pointer rounded-full border-2 border-gray-300 p-5 text-gray-300 transition-all hover:bg-primary-500/10 hover:text-blue-500 dark:border-shark-950 dark:text-shark-950 hover:dark:text-blue-500"
            >
              <PlusIcon />
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const update = values as LegalClientOrderGeneralOutputProps;

              handleUpdate(update);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update LegalClientOrder"
          >
            Atualizar Pedido Jurídico
          </Button>
        </div>
      </form>
    </div>
  );
};

export const LegalClientOrderGeneral = forwardRef(LegalClientOrderGeneralRef);
