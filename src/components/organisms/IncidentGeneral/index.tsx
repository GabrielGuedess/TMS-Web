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
  useUpdateIncidentMutation,
  useGetAllOrderProcessingComboQuery,
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

import { incidentGeneralSchema } from './schema';
import {
  type IncidentGeneralProps,
  type IncidentGeneralInputProps,
  type IncidentGeneralOutputProps,
} from './types';

const IncidentGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  IncidentGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchOrderProcessing, setIsLoadingSearchOrderProcessing] =
    useState(false);

  const [searchOrderProcessing, setSearchOrderProcessing] = useState('');

  const [updateIncident] = useUpdateIncidentMutation();

  const { data: dataOrderProcessing, refetch: refetchOrderProcessing } =
    useGetAllOrderProcessingComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IncidentGeneralInputProps>({
    resolver: zodResolver(incidentGeneralSchema),
    defaultValues: {
      description: data.getIncident.description,
      date_resolved: dayjs(data.getIncident.date_resolved as Date).toDate(),
      date_incident: dayjs(data.getIncident.date_incident as Date).toDate(),
      orderProcess: {
        id: data.getIncident.OrderProcessing.id,
        description: data.getIncident.OrderProcessing.order_processing_number,
      },
    },
  });

  const handleSearchOrderProcessing = async () => {
    setIsLoadingSearchOrderProcessing(true);

    try {
      await refetchOrderProcessing({
        where: {
          OR: [
            {
              order_processing_number: {
                mode: QueryMode.Insensitive,
                contains: searchOrderProcessing,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Processos de Pedido!');
    } finally {
      setIsLoadingSearchOrderProcessing(false);
    }
  };

  const handleUpdate = async (newData: IncidentGeneralOutputProps) => {
    setIsLoading(true);

    try {
      await updateIncident({
        variables: {
          updateIncidentId: data.getIncident.id,
          upData: {
            description: newData.description,
            date_incident: newData.date_incident,
            date_resolved: newData.date_resolved,
            order_process_id: newData.orderProcess.id,
          },
        },
      });

      toast.success('Incidente atualizado com sucesso!');
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar Incidente!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar Incidente!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchOrderProcessing !== '') {
        handleSearchOrderProcessing();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchOrderProcessing]);

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
                label="Descrição"
                onChange={onChange}
                placeholder="Descrição"
                aria-label="description"
                isInvalid={!!errors.description?.message}
                errorMessage={errors.description?.message}
                required
                isFullWidth
              />
            )}
            control={control}
            name="description"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <DatePicker
                date={value as Date}
                label="Data do Incidente"
                setDate={item => onChange(item as Date)}
                isInvalid={!!errors.date_incident?.message}
                errorMessage={errors.date_incident?.message}
              />
            )}
            control={control}
            name="date_incident"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <DatePicker
                date={value as Date}
                label="Data da Resolução"
                setDate={item => onChange(item as Date)}
                isInvalid={!!errors.date_resolved?.message}
                errorMessage={errors.date_resolved?.message}
              />
            )}
            control={control}
            name="date_resolved"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataOrderProcessing?.getAllOrderProcessing?.map(
                  item => ({
                    id: item.id,
                    description: `${item.order_processing_number}`,
                  }),
                )}
                value={value}
                label="Processamento"
                search={searchOrderProcessing}
                setValue={item => onChange(item)}
                setSearch={setSearchOrderProcessing}
                isInvalid={!!errors.orderProcess?.id}
                isLoading={isLoadingSearchOrderProcessing}
                className="bg-transparent dark:bg-transparent"
                errorMessage={errors.orderProcess?.id?.message}
                placeholder="Selecione a Processamento de Pedido"
                emptyMessage="Processamento de Pedido não encontrado"
                placeholderCommand="Pesquise a Processamento de Pedido..."
              />
            )}
            control={control}
            name="orderProcess"
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const update = values as IncidentGeneralOutputProps;

              handleUpdate(update);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            aria-label="Update Incident"
            className="min-w-[12.404rem]"
          >
            Atualizar Incident
          </Button>
        </div>
      </form>
    </div>
  );
};

export const IncidentGeneral = forwardRef(IncidentGeneralRef);
