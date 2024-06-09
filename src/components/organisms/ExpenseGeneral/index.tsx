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
  useUpdateFreightExpenseMutation,
  useGetAllLegalClientOrderComboQuery,
  useGetAllPhysicalCustomerOrderComboQuery,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { expenseGeneralSchema } from './schema';
import {
  type ExpenseGeneralProps,
  type ExpenseGeneralInputProps,
  type ExpenseGeneralOutputProps,
} from './types';

const ExpenseGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  ExpenseGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchLegalClientOrder, setIsLoadingSearchLegalClientOrder] =
    useState(false);
  const [
    isLoadingSearchPhysicalCustomerOrder,
    setIsLoadingSearchPhysicalCustomerOrder,
  ] = useState(false);

  const [searchPhysicalCustomerOrder, setSearchPhysicalCustomerOrder] =
    useState('');
  const [searchLegalClientOrder, setSearchLegalClientOrder] = useState('');

  const [updateExpense] = useUpdateFreightExpenseMutation();

  const { data: dataLegalClientOrders, refetch: refetchLegalClientOrders } =
    useGetAllLegalClientOrderComboQuery();
  const {
    data: dataPhysicalCustomerOrders,
    refetch: refetchPhysicalCustomerOrders,
  } = useGetAllPhysicalCustomerOrderComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseGeneralInputProps>({
    resolver: zodResolver(expenseGeneralSchema),
    defaultValues: {
      value: String(data.getFreightExpense.value),
      expenseName: data.getFreightExpense.expenseName,
      legalClientOrder: {
        id: data?.getFreightExpense?.legalClientOrderId ?? '',
        description: data?.getFreightExpense?.LegalClientOrder?.order ?? '',
      },
      physicalCustomerOrder: {
        id: data?.getFreightExpense?.physicalCustomerOrderId ?? '',
        description:
          data?.getFreightExpense?.PhysicalCustomerOrder?.order ?? '',
      },
    },
  });

  const handleSearchLegalClientOrder = async () => {
    setIsLoadingSearchLegalClientOrder(true);

    try {
      await refetchLegalClientOrders({
        where: {
          OR: [
            {
              order: {
                mode: QueryMode.Insensitive,
                contains: searchLegalClientOrder,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Pedidos Jurídicos!');
    } finally {
      setIsLoadingSearchLegalClientOrder(false);
    }
  };

  const handleSearchPhysicalCustomerOrder = async () => {
    setIsLoadingSearchPhysicalCustomerOrder(true);

    try {
      await refetchPhysicalCustomerOrders({
        where: {
          OR: [
            {
              order: {
                mode: QueryMode.Insensitive,
                contains: searchPhysicalCustomerOrder,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Pedidos Físicos!');
    } finally {
      setIsLoadingSearchPhysicalCustomerOrder(false);
    }
  };

  const handleUpdate = async (newData: ExpenseGeneralOutputProps) => {
    setIsLoading(true);

    try {
      await updateExpense({
        variables: {
          updateFreightExpenseId: data?.getFreightExpense?.id ?? '',
          upData: {
            value: Number(newData.value),
            expenseName: newData.expenseName,
            legalClientOrderId: newData.legalClientOrder.id,
            physicalCustomerOrderId: newData.physicalCustomerOrder.id,
          },
        },
      });

      toast.success('Despesa atualizada com sucesso!');
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar Despesa!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar Despesa!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchPhysicalCustomerOrder !== '') {
        handleSearchPhysicalCustomerOrder();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchPhysicalCustomerOrder]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchLegalClientOrder !== '') {
        handleSearchLegalClientOrder();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchLegalClientOrder]);

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
                type="number"
                value={value}
                label="Valor"
                aria-label="Value"
                onChange={onChange}
                placeholder="Valor"
                isInvalid={!!errors.value?.message}
                errorMessage={errors.value?.message}
                required
                isFullWidth
              />
            )}
            name="value"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                label="Nome"
                value={value}
                aria-label="Name"
                placeholder="Nome"
                onChange={onChange}
                isInvalid={!!errors.expenseName?.message}
                errorMessage={errors.expenseName?.message}
                required
                isFullWidth
              />
            )}
            control={control}
            name="expenseName"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataPhysicalCustomerOrders?.getAllPhysicalCustomerOrder?.map(
                  item => ({
                    id: item.id,
                    description: `${item.order}`,
                  }),
                )}
                value={value}
                label="Pedido Físico"
                setValue={item => onChange(item)}
                search={searchPhysicalCustomerOrder}
                placeholder="Selecione a Pedido Físico"
                setSearch={setSearchPhysicalCustomerOrder}
                emptyMessage="Pedido Físico não encontrado"
                className="bg-transparent dark:bg-transparent"
                isInvalid={!!errors.physicalCustomerOrder?.id}
                isLoading={isLoadingSearchPhysicalCustomerOrder}
                placeholderCommand="Pesquise a Pedido Físico..."
                errorMessage={errors.physicalCustomerOrder?.id?.message}
              />
            )}
            control={control}
            name="physicalCustomerOrder"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataLegalClientOrders?.getAllLegalClientOrder?.map(
                  item => ({
                    id: item.id,
                    description: `${item.order}`,
                  }),
                )}
                value={value}
                label="Pedido Jurídico"
                search={searchLegalClientOrder}
                setValue={item => onChange(item)}
                setSearch={setSearchLegalClientOrder}
                isInvalid={!!errors.legalClientOrder?.id}
                placeholder="Selecione a Pedido Jurídico"
                isLoading={isLoadingSearchLegalClientOrder}
                emptyMessage="Pedido Jurídico não encontrado"
                className="bg-transparent dark:bg-transparent"
                placeholderCommand="Pesquise a Pedido Jurídico..."
                errorMessage={errors.legalClientOrder?.id?.message}
              />
            )}
            control={control}
            name="legalClientOrder"
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const update = values as ExpenseGeneralOutputProps;

              handleUpdate(update);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            aria-label="Update Expense"
            className="min-w-[12.404rem]"
          >
            Atualizar Despesa
          </Button>
        </div>
      </form>
    </div>
  );
};

export const ExpenseGeneral = forwardRef(ExpenseGeneralRef);
