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
  useGetAllVehiclesComboQuery,
  useUpdatedCompanyVehicleMutation,
  useGetAllCarrierCompanyComboQuery,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { companyVehicleGeneralSchema } from './schema';
import {
  type CompanyVehicleGeneralProps,
  type CompanyVehicleGeneralInputProps,
  type CompanyVehicleGeneralOutputProps,
} from './types';

const CompanyVehicleGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CompanyVehicleGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchCarrier, setIsLoadingSearchCarrier] = useState(false);
  const [isLoadingSearchVehicle, setIsLoadingSearchVehicle] = useState(false);

  const [searchVehicle, setSearchVehicle] = useState('');
  const [searchCarrier, setSearchCarrier] = useState('');

  const [updateCompanyVehicle] = useUpdatedCompanyVehicleMutation();

  const { data: dataCarriers, refetch: refetchCarriers } =
    useGetAllCarrierCompanyComboQuery();
  const { data: dataVehicles, refetch: refetchVehicles } =
    useGetAllVehiclesComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyVehicleGeneralInputProps>({
    resolver: zodResolver(companyVehicleGeneralSchema),
    defaultValues: {
      vehicle: { id: '', description: '' },
      carrierCompany: { id: '', description: '' },
    },
  });

  const handleSearchCarrier = async () => {
    setIsLoadingSearchCarrier(true);

    try {
      await refetchCarriers({
        where: {
          OR: [
            {
              rntrc: {
                contains: searchCarrier,
                mode: QueryMode.Insensitive,
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

  const handleSearchVehicle = async () => {
    setIsLoadingSearchVehicle(true);

    try {
      await refetchVehicles({
        where: {
          OR: [
            {
              plate: {
                contains: searchVehicle,
                mode: QueryMode.Insensitive,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Veiculos!');
    } finally {
      setIsLoadingSearchVehicle(false);
    }
  };

  const handleUpdate = async (newData: CompanyVehicleGeneralOutputProps) => {
    setIsLoading(true);

    try {
      await updateCompanyVehicle({
        variables: {
          updatedCompanyVehicleId: data.getCompanyVehicle.id,
          outsourced: {
            Vehicle: {},
            vehicle_id: newData.vehicle.id,
            carrier_company_id: newData.carrierCompany.id,
          },
        },
      });

      toast.success('Veiculo de Empresa atualizado com sucesso!');
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar Veiculo de Empresa!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar Veiculo de Empresa!');
    } finally {
      setIsLoading(false);
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
      if (searchVehicle !== '') {
        handleSearchVehicle();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchVehicle]);

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
                setValue={item => onChange(item)}
                isLoading={isLoadingSearchCarrier}
                isInvalid={!!errors.carrierCompany?.id}
                placeholder="Selecione a Transportadora"
                emptyMessage="Transportadora não encontrado"
                className="bg-transparent dark:bg-transparent"
                errorMessage={errors.carrierCompany?.id?.message}
                placeholderCommand="Pesquise a Transportadora..."
              />
            )}
            control={control}
            name="carrierCompany"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataVehicles?.getAllVehicles?.map(item => ({
                  id: item.id,
                  description: `${item?.VehicleModel?.name ?? ''} - ${item.plate}`,
                }))}
                value={value}
                label="Veiculo"
                search={searchVehicle}
                setSearch={setSearchVehicle}
                isInvalid={!!errors.vehicle?.id}
                setValue={item => onChange(item)}
                placeholder="Selecione a Veiculo"
                isLoading={isLoadingSearchVehicle}
                emptyMessage="Veiculo não encontrado"
                errorMessage={errors.vehicle?.id?.message}
                placeholderCommand="Pesquise a Veiculo..."
                className="bg-transparent dark:bg-transparent"
              />
            )}
            name="vehicle"
            control={control}
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const update = values as CompanyVehicleGeneralOutputProps;

              handleUpdate(update);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update CompanyVehicle"
          >
            Atualizar Veiculo de Empresa
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CompanyVehicleGeneral = forwardRef(CompanyVehicleGeneralRef);
