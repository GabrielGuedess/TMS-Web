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
  useGetAllCarrierCompanyComboQuery,
  useGetAllPhysicalCustomerComboQuery,
  useUpdatePhysicalCustomerOrderMutation,
  useGetAllPhysicalCustomerQuoteTableComboQuery,
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

import { physicalCustomerOrderGeneralSchema } from './schema';
import {
  type PhysicalCustomerOrderGeneralProps,
  type PhysicalCustomerOrderGeneralInputProps,
  type PhysicalCustomerOrderGeneralOutputProps,
} from './types';

const PhysicalCustomerOrderGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  PhysicalCustomerOrderGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchCarrier, setIsLoadingSearchCarrier] = useState(false);
  const [isLoadingSearchPhysicalCustomer, setIsLoadingSearchPhysicalCustomer] =
    useState(false);
  const [
    isLoadingSearchPhysicalCustomerQuoteTable,
    setIsLoadingSearchPhysicalCustomerQuoteTable,
  ] = useState(false);

  const [searchCarrier, setSearchCarrier] = useState('');
  const [searchPhysicalCustomer, setSearchPhysicalCustomer] = useState('');
  const [
    searchPhysicalCustomerQuoteTable,
    setSearchPhysicalCustomerQuoteTable,
  ] = useState('');

  const [updatePhysicalCustomerOrder] =
    useUpdatePhysicalCustomerOrderMutation();

  const { data: dataCarriers, refetch: refetchCarriers } =
    useGetAllCarrierCompanyComboQuery();

  const { data: dataPhysicalCustomer, refetch: refetchPhysicalCustomer } =
    useGetAllPhysicalCustomerComboQuery();

  const {
    data: dataPhysicalCustomerQuoteTable,
    refetch: refetchPhysicalCustomerQuoteTable,
  } = useGetAllPhysicalCustomerQuoteTableComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PhysicalCustomerOrderGeneralInputProps>({
    resolver: zodResolver(physicalCustomerOrderGeneralSchema),
    defaultValues: {
      quoteTable: {
        id: data?.getPhysicalCustomerOrderModel?.quote_table_id,
        description: data?.getPhysicalCustomerOrderModel?.Quote?.codQuote,
      },
      expenses:
        data?.getPhysicalCustomerOrderModel?.expenses.map(item => ({
          value: String(item.value),
          expenseName: item.expenseName,
        })) ?? [],
      carrier: {
        id: data?.getPhysicalCustomerOrderModel?.carrier_id,
        description:
          data?.getPhysicalCustomerOrderModel?.CarrierCompany?.rntrc ?? '',
      },
      physicalCustomer: {
        id: data?.getPhysicalCustomerOrderModel?.physicalCustomerId,
        description:
          data?.getPhysicalCustomerOrderModel?.PhysicalCustomer?.NaturalPerson
            .cpf,
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

  const handleSearchPhysicalCustomer = async () => {
    setIsLoadingSearchPhysicalCustomer(true);

    try {
      await refetchPhysicalCustomer({
        where: {
          OR: [
            {
              NaturalPerson: {
                cpf: {
                  mode: QueryMode.Insensitive,
                  contains: searchPhysicalCustomer,
                },
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar as Clientes Físicos!');
    } finally {
      setIsLoadingSearchPhysicalCustomer(false);
    }
  };

  const handleSearchPhysicalCustomerQuoteTable = async () => {
    setIsLoadingSearchPhysicalCustomerQuoteTable(true);

    try {
      await refetchPhysicalCustomerQuoteTable({
        where: {
          OR: [
            {
              cod_quote: {
                mode: QueryMode.Insensitive,
                contains: searchPhysicalCustomerQuoteTable,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar as Cotações!');
    } finally {
      setIsLoadingSearchPhysicalCustomerQuoteTable(false);
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
      if (searchPhysicalCustomerQuoteTable !== '') {
        handleSearchPhysicalCustomerQuoteTable();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchPhysicalCustomerQuoteTable]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchPhysicalCustomer !== '') {
        handleSearchPhysicalCustomer();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchPhysicalCustomer]);

  const handleCreate = async (
    newData: PhysicalCustomerOrderGeneralOutputProps,
  ) => {
    setIsLoading(true);

    try {
      await updatePhysicalCustomerOrder({
        variables: {
          updatePhysicalCustomerOrderId:
            data?.getPhysicalCustomerOrderModel?.id ?? '',
          physicalCustomerOrderInput: {
            carrier_id: newData.carrier.id,
            quote_table_id: newData.quoteTable.id,
            physicalCustomerId: newData.physicalCustomer.id,
            expenses:
              newData.expenses?.map(item => ({
                value: Number(item.value),
                expenseName: item.expenseName,
              })) ?? [],
          },
        },
      });

      toast.success('Pedido Físico atualizado com sucesso!');
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar Pedido Físico!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar Pedido Físico!');
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
                values={dataPhysicalCustomer?.getAllPhysicalCustomer?.map(
                  item => ({
                    id: item.id,
                    description: `${item.NaturalPerson.cpf}`,
                  }),
                )}
                value={value}
                label="Client Físico"
                search={searchPhysicalCustomer}
                setValue={item => onChange(item)}
                setSearch={setSearchPhysicalCustomer}
                placeholder="Selecione a Client Físico"
                isInvalid={!!errors.physicalCustomer?.id}
                isLoading={isLoadingSearchPhysicalCustomer}
                emptyMessage="Client Físico não encontrado"
                className="bg-transparent dark:bg-transparent"
                placeholderCommand="Pesquise a Client Físico..."
                errorMessage={errors.physicalCustomer?.id?.message}
              />
            )}
            control={control}
            name="physicalCustomer"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataPhysicalCustomerQuoteTable?.getAllPhysicalCustomerQuoteTable?.map(
                  item => ({
                    id: item.id,
                    description: `${item.codQuote}`,
                  }),
                )}
                value={value}
                label="Cotação Física"
                setValue={item => onChange(item)}
                isInvalid={!!errors.quoteTable?.id}
                placeholder="Selecione a Cotação Física"
                search={searchPhysicalCustomerQuoteTable}
                emptyMessage="Cotação Física não encontrado"
                errorMessage={errors.quoteTable?.id?.message}
                className="bg-transparent dark:bg-transparent"
                setSearch={setSearchPhysicalCustomerQuoteTable}
                placeholderCommand="Pesquise a Cotação Física..."
                isLoading={isLoadingSearchPhysicalCustomerQuoteTable}
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
              onClick={() => append({ value: '', expenseName: '' })}
              className="max-w-min cursor-pointer rounded-full border-2 border-gray-300 p-5 text-gray-300 transition-all hover:bg-primary-500/10 hover:text-blue-500 dark:border-shark-950 dark:text-shark-950 hover:dark:text-blue-500"
            >
              <PlusIcon />
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const update = values as PhysicalCustomerOrderGeneralOutputProps;

              handleCreate(update);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update PhysicalCustomerOrder"
          >
            Atualizar Pedido Físico
          </Button>
        </div>
      </form>
    </div>
  );
};

export const PhysicalCustomerOrderGeneral = forwardRef(
  PhysicalCustomerOrderGeneralRef,
);
