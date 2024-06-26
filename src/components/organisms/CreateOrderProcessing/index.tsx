'use client';

import { useRouter } from 'next/navigation';

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
  StatusOrder,
  useGetAllOwnDriverQuery,
  useGetAllVehiclesComboQuery,
  useCreateOrderProcessingMutation,
  useGetAllLegalClientOrderComboQuery,
  useGetAllPhysicalCustomerOrderComboQuery,
} from 'graphql/generated';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { Separator } from '@radix-ui/react-select';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { PlusIcon } from 'components/atoms/PlusIcon';
import { ComboBox } from 'components/molecules/Combobox';
import { DatePicker } from 'components/molecules/DatePicker';
import { CloseCircleIcon } from 'components/atoms/CloseCircleIcon';

import { createOrderProcessingSchema } from './schema';
import {
  type CreateOrderProcessingProps,
  type CreateOrderProcessingInputProps,
  type CreateOrderProcessingOutputProps,
} from './types';

const CreateOrderProcessingRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateOrderProcessingProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchDriverOrder, setIsLoadingSearchDriverOrder] =
    useState(false);
  const [isLoadingSearchVehiclesOrder, setIsLoadingSearchVehiclesOrder] =
    useState(false);
  const [
    isLoadingSearchPhysicalCustomerOrder,
    setIsLoadingSearchPhysicalCustomerOrder,
  ] = useState(false);
  const [isLoadingSearchLegalClientOrder, setIsLoadingSearchLegalClientOrder] =
    useState(false);

  const [searchDriverOrder, setSearchDriverOrder] = useState('');
  const [searchVehiclesOrder, setSearchVehiclesOrder] = useState('');
  const [searchPhysicalCustomerOrder, setSearchPhysicalCustomerOrder] =
    useState('');
  const [searchLegalClientOrder, setSearchLegalClientOrder] = useState('');

  const router = useRouter();

  const [createOrderProcessing] = useCreateOrderProcessingMutation();

  const { data: dataDriverOrders, refetch: refetchDriverOrders } =
    useGetAllOwnDriverQuery();
  const { data: dataVehiclesOrders, refetch: refetchVehiclesOrders } =
    useGetAllVehiclesComboQuery();
  const {
    data: dataPhysicalCustomerOrders,
    refetch: refetchPhysicalCustomerOrders,
  } = useGetAllPhysicalCustomerOrderComboQuery();
  const { data: dataLegalClientOrders, refetch: refetchLegalClientOrders } =
    useGetAllLegalClientOrderComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOrderProcessingInputProps>({
    resolver: zodResolver(createOrderProcessingSchema),
    defaultValues: {
      total_distance: '',
      total_spend_liters: '',
      legalCustomerOrder: [],
      total_spending_money: '',
      physicalCustomerOrder: [],
      start_at: dayjs().toDate(),
      driver: { id: '', description: '' },
      vehicle: {
        id: '',
        description: '',
      },
    },
  });

  const {
    fields: fieldsLegal,
    append: appendLegal,
    remove: removeLegal,
  } = useFieldArray({
    control,
    name: 'legalCustomerOrder',
  });

  const {
    fields: fieldsPhysical,
    append: appendPhysical,
    remove: removePhysical,
  } = useFieldArray({
    control,
    name: 'physicalCustomerOrder',
  });

  const handleSearchDriverOrder = async () => {
    setIsLoadingSearchDriverOrder(true);

    try {
      await refetchDriverOrders({
        where: {
          OR: [
            {
              cnh: {
                mode: QueryMode.Insensitive,
                contains: searchDriverOrder,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Motoristas!');
    } finally {
      setIsLoadingSearchDriverOrder(false);
    }
  };

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

  const handleSearchVehiclesOrder = async () => {
    setIsLoadingSearchVehiclesOrder(true);

    try {
      await refetchVehiclesOrders({
        where: {
          OR: [
            {
              plate: {
                mode: QueryMode.Insensitive,
                contains: searchVehiclesOrder,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Veículos!');
    } finally {
      setIsLoadingSearchVehiclesOrder(false);
    }
  };

  const handleCreate = async (data: CreateOrderProcessingOutputProps) => {
    setIsLoading(true);

    try {
      const OrderProcessing = await createOrderProcessing({
        variables: {
          data: {
            start_at: data.start_at,
            driver_id: data.driver.id,
            status: StatusOrder.Created,
            vehicle_id: data.vehicle.id,
            total_distance: Number(data.total_distance),
            total_spend_liters: Number(data.total_spend_liters),
            total_spending_money: Number(data.total_spending_money),
            legal_customer_order_ids: data.legalCustomerOrder.map(
              item => item.id,
            ),
            physical_customer_order_ids: data.physicalCustomerOrder.map(
              item => item.id,
            ),
          },
        },
      });

      toast.success('Processamento criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/order-processing/${OrderProcessing.data?.createOrderProcessing.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Processamento!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Processamento!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchVehiclesOrder !== '') {
        handleSearchVehiclesOrder();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchVehiclesOrder]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchLegalClientOrder !== '') {
        handleSearchLegalClientOrder();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchLegalClientOrder]);

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
      if (searchDriverOrder !== '') {
        handleSearchDriverOrder();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchDriverOrder]);

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
                onChange={onChange}
                label="Distancia Total"
                aria-label="Distancia Total"
                placeholder="Distancia Total"
                isInvalid={!!errors.total_distance?.message}
                errorMessage={errors.total_distance?.message}
                required
                isFullWidth
              />
            )}
            control={control}
            name="total_distance"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                type="number"
                value={value}
                onChange={onChange}
                label="Total de Litros Gastos"
                aria-label="Total de Litros Gastos"
                placeholder="Total de Litros Gastos"
                isInvalid={!!errors.total_spend_liters?.message}
                errorMessage={errors.total_spend_liters?.message}
                required
                isFullWidth
              />
            )}
            control={control}
            name="total_spend_liters"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                type="number"
                value={value}
                onChange={onChange}
                label="Total de Gastos"
                aria-label="Total de Gastos"
                placeholder="Total de Gastos"
                isInvalid={!!errors.total_spending_money?.message}
                errorMessage={errors.total_spending_money?.message}
                required
                isFullWidth
              />
            )}
            control={control}
            name="total_spending_money"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <DatePicker
                date={value as Date}
                label="Data de Inicio"
                isInvalid={!!errors.start_at?.message}
                errorMessage={errors.start_at?.message}
                setDate={item => onChange(item as Date)}
              />
            )}
            name="start_at"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataVehiclesOrders?.getAllVehicles?.map(item => ({
                  id: item.id,
                  description: `${item?.VehicleModel?.name} - ${item.plate}`,
                }))}
                value={value}
                label="Veículo"
                search={searchVehiclesOrder}
                isInvalid={!!errors.vehicle?.id}
                setValue={item => onChange(item)}
                placeholder="Selecione a Veículo"
                setSearch={setSearchVehiclesOrder}
                emptyMessage="Veículo não encontrado"
                isLoading={isLoadingSearchVehiclesOrder}
                placeholderCommand="Pesquise a Veículo..."
                errorMessage={errors.vehicle?.id?.message}
                className="bg-transparent dark:bg-transparent"
              />
            )}
            name="vehicle"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataDriverOrders?.getAllOwnDriver?.map(item => ({
                  id: item.id,
                  description: `${item.cnh}`,
                }))}
                value={value}
                label="Motorista"
                search={searchDriverOrder}
                isInvalid={!!errors.driver?.id}
                setSearch={setSearchDriverOrder}
                setValue={item => onChange(item)}
                placeholder="Selecione o Motorista"
                isLoading={isLoadingSearchDriverOrder}
                emptyMessage="Motorista não encontrado"
                errorMessage={errors.driver?.id?.message}
                placeholderCommand="Pesquise o Motorista..."
                className="bg-transparent dark:bg-transparent"
              />
            )}
            name="driver"
            control={control}
          />
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Separator className="h-[1px] bg-gray-300 transition-all dark:bg-shark-950" />

          <span className="text-sm font-medium text-gray-700 transition-all dark:text-dark-300">
            Selecione os Pedidos Físicos para esse processamento
          </span>

          <div className="grid grid-cols-auto-fill gap-x-4 gap-y-10">
            {fieldsPhysical.map((field, index) => (
              <div key={index} className="flex gap-2">
                <Controller
                  render={({ field: { value, onChange } }) => (
                    <ComboBox
                      isInvalid={
                        !!errors.physicalCustomerOrder?.[index]?.message
                      }
                      errorMessage={
                        errors.physicalCustomerOrder?.[index]?.message
                      }
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
                      placeholder="Selecione o Pedidos Físico"
                      setSearch={setSearchPhysicalCustomerOrder}
                      emptyMessage="Pedido Físico não encontrado"
                      isLoading={isLoadingSearchPhysicalCustomerOrder}
                      placeholderCommand="Pesquise o Pedido Físico..."
                      className="flex-1 bg-transparent dark:bg-transparent"
                    />
                  )}
                  control={control}
                  name={`physicalCustomerOrder.${index}`}
                />

                <div className="flex items-center">
                  <button
                    type="button"
                    aria-label="Remove Item"
                    className="p-2 text-red-500"
                    onClick={() => removePhysical(index)}
                  >
                    <CloseCircleIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-center">
            <button
              className={clsx(
                'max-w-min cursor-pointer rounded-full border-2 border-gray-300 p-3 text-gray-300 transition-all hover:bg-primary-500/10 hover:text-blue-500 dark:border-shark-950 dark:text-shark-950 hover:dark:text-blue-500',
              )}
              type="button"
              aria-label="Add"
              onClick={() => appendPhysical({ id: '', description: '' })}
            >
              <PlusIcon />
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Separator className="h-[1px] bg-gray-300 transition-all dark:bg-shark-950" />

          <span className="text-sm font-medium text-gray-700 transition-all dark:text-dark-300">
            Selecione os Pedidos Jurídicos para esse processamento
          </span>

          <div className="grid grid-cols-auto-fill gap-x-4 gap-y-10">
            {fieldsLegal.map((field, index) => (
              <div key={index} className="flex gap-2">
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
                      placeholder="Selecione o Pedidos Jurídico"
                      isLoading={isLoadingSearchLegalClientOrder}
                      emptyMessage="Pedido Jurídico não encontrado"
                      placeholderCommand="Pesquise o Pedido Jurídico..."
                      className="flex-1 bg-transparent dark:bg-transparent"
                      isInvalid={!!errors.legalCustomerOrder?.[index]?.message}
                      errorMessage={errors.legalCustomerOrder?.[index]?.message}
                    />
                  )}
                  control={control}
                  name={`legalCustomerOrder.${index}`}
                />

                <div className="flex items-center">
                  <button
                    type="button"
                    aria-label="Remove Item"
                    className="p-2 text-red-500"
                    onClick={() => removeLegal(index)}
                  >
                    <CloseCircleIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full justify-center">
            <button
              className={clsx(
                'max-w-min cursor-pointer rounded-full border-2 border-gray-300 p-3 text-gray-300 transition-all hover:bg-primary-500/10 hover:text-blue-500 dark:border-shark-950 dark:text-shark-950 hover:dark:text-blue-500',
              )}
              type="button"
              aria-label="Add"
              onClick={() => appendLegal({ id: '', description: '' })}
            >
              <PlusIcon />
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateOrderProcessingOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update OrderProcessing"
          >
            Criar Processamento
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateOrderProcessing = forwardRef(CreateOrderProcessingRef);
