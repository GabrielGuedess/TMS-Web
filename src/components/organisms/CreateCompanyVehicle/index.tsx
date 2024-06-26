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
  useGetAllVehicleModelQuery,
  useGetAllVehiclesComboQuery,
  useCreateCompanyVehicleMutation,
  useGetAllCarrierCompanyComboQuery,
} from 'graphql/generated';

import clsx from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { Separator } from '@radix-ui/react-select';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { PlusIcon } from 'components/atoms/PlusIcon';
import { Select } from 'components/molecules/Select';
import { CloseIcon } from 'components/atoms/CloseIcon';
import { ComboBox } from 'components/molecules/Combobox';
import { DatePicker } from 'components/molecules/DatePicker';

import { createCompanyVehicleSchema } from './schema';
import {
  type CreateCompanyVehicleProps,
  type CreateCompanyVehicleInputProps,
  type CreateCompanyVehicleOutputProps,
} from './types';

const CreateCompanyVehicleRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateCompanyVehicleProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchCarrier, setIsLoadingSearchCarrier] = useState(false);
  const [isLoadingSearchVehicle, setIsLoadingSearchVehicle] = useState(false);
  const [isLoadingSearchModel, setIsLoadingSearchModel] = useState(false);

  const [searchModel, setSearchModel] = useState('');
  const [searchVehicle, setSearchVehicle] = useState('');
  const [searchCarrier, setSearchCarrier] = useState('');

  const router = useRouter();

  const [createCompanyVehicle] = useCreateCompanyVehicleMutation();

  const { data: dataCarriers, refetch: refetchCarriers } =
    useGetAllCarrierCompanyComboQuery();
  const { data: dataVehicles, refetch: refetchVehicles } =
    useGetAllVehiclesComboQuery();
  const { data: models, refetch: refetchModels } = useGetAllVehicleModelQuery();

  const {
    watch,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCompanyVehicleInputProps>({
    resolver: zodResolver(createCompanyVehicleSchema),
    defaultValues: {
      reference: 'auto',
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

  const handleSearchModel = async () => {
    setIsLoadingSearchModel(true);

    try {
      await refetchModels({
        where: {
          OR: [
            {
              name: {
                contains: searchModel,
                mode: QueryMode.Insensitive,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Modelos!');
    } finally {
      setIsLoadingSearchModel(false);
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

  const handleCreate = async (data: CreateCompanyVehicleOutputProps) => {
    setIsLoading(true);

    try {
      const companyVehicle = await createCompanyVehicle({
        variables: {
          companyVehicleInput: {
            carrier_company_id: data.carrierCompany.id,
            ...(data.reference === 'auto' && {
              vehicle_id: data.vehicle.id,
            }),
            ...(data.reference === 'manual' && {
              Vehicle: {
                antt: data?.vehicleManual?.antt ?? '',
                year: data?.vehicleManual?.year ?? '',
                color: data?.vehicleManual?.color ?? '',
                plate: data?.vehicleManual?.plate ?? '',
                renavam: data?.vehicleManual?.renavam ?? '',
                isIpvaPaid: !!data?.vehicleManual?.isIpvaPaid,
                model_id: data?.vehicleManual?.model.id ?? '',
                registration: data?.vehicleManual?.registration ?? '',
              },
            }),
          },
        },
      });

      toast.success('Veiculo de Empresa criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/company-vehicles/${companyVehicle.data?.createCompanyVehicle.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Veiculo de Empresa!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Veiculo de Empresa!');
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

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchModel !== '') {
        handleSearchModel();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchModel]);

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
                  description: `${item.plate}`,
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
                isDisable={watch('reference') === 'manual'}
                className="bg-transparent dark:bg-transparent"
              />
            )}
            name="vehicle"
            control={control}
          />
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Separator className="h-[1px] bg-gray-300 transition-all dark:bg-shark-950" />

          <span className="text-sm font-medium text-gray-700 transition-all dark:text-dark-300">
            Não possui nenhum veículo? Crie abaixo
          </span>

          {watch('reference') === 'manual' && (
            <div className="grid grid-cols-auto-fill gap-x-4 gap-y-10">
              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    label="Placa"
                    value={value}
                    aria-label="Plate"
                    placeholder="Placa"
                    onChange={onChange}
                    isInvalid={!!errors.vehicleManual?.plate?.message}
                    errorMessage={errors.vehicleManual?.plate?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="vehicleManual.plate"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    label="Ano"
                    value={value}
                    type="number"
                    maxLength={4}
                    aria-label="Year"
                    placeholder="Ano"
                    onChange={onChange}
                    isInvalid={!!errors.vehicleManual?.year?.message}
                    errorMessage={errors.vehicleManual?.year?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="vehicleManual.year"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    label="Cor"
                    value={value}
                    placeholder="Cor"
                    aria-label="Color"
                    onChange={onChange}
                    isInvalid={!!errors.vehicleManual?.color?.message}
                    errorMessage={errors.vehicleManual?.color?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="vehicleManual.color"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    value={value}
                    label="Renavam"
                    onChange={onChange}
                    aria-label="Renavam"
                    placeholder="Renavam"
                    isInvalid={!!errors.vehicleManual?.renavam?.message}
                    errorMessage={errors.vehicleManual?.renavam?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="vehicleManual.renavam"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    label="Antt"
                    value={value}
                    aria-label="Antt"
                    placeholder="Antt"
                    onChange={onChange}
                    isInvalid={!!errors.vehicleManual?.antt?.message}
                    errorMessage={errors.vehicleManual?.antt?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="vehicleManual.antt"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <DatePicker
                    date={value as Date}
                    label="Data de Registro"
                    setDate={item => onChange(item as Date)}
                    isInvalid={!!errors.vehicleManual?.registration?.message}
                    errorMessage={errors.vehicleManual?.registration?.message}
                  />
                )}
                control={control}
                name="vehicleManual.registration"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Select
                    value={value}
                    label="IPVA Pago?"
                    placeholder="IPVA?"
                    values={['Sim', 'Não']}
                    onValueChange={onChange}
                    className="p-3 dark:bg-smoke-950"
                    isInvalid={!!errors.vehicleManual?.isIpvaPaid?.message}
                    errorMessage={errors.vehicleManual?.isIpvaPaid?.message}
                  />
                )}
                control={control}
                name="vehicleManual.isIpvaPaid"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <ComboBox
                    values={models?.getAllVehicleModel?.map(item => ({
                      id: item.id,
                      description: `${item.name}`,
                    }))}
                    value={value}
                    label="Modelo"
                    search={searchModel}
                    setSearch={setSearchModel}
                    placeholder="Selecione a Modelo"
                    isLoading={isLoadingSearchModel}
                    setValue={item => onChange(item)}
                    emptyMessage="Modelo não encontrado"
                    placeholderCommand="Pesquise a Modelo..."
                    isInvalid={!!errors.vehicleManual?.model?.id}
                    className="bg-transparent dark:bg-transparent"
                    errorMessage={errors.vehicleManual?.model?.message}
                  />
                )}
                control={control}
                name="vehicleManual.model"
              />
            </div>
          )}

          <div className="flex w-full justify-center">
            <button
              onClick={() => {
                if (watch('reference') === 'auto') {
                  setValue('reference', 'manual');

                  return;
                }

                if (watch('reference') === 'manual') {
                  setValue('reference', 'auto');
                  reset();
                }
              }}
              className={clsx(
                'max-w-min cursor-pointer rounded-full border-2 border-gray-300 p-5 text-gray-300 transition-all dark:border-shark-950 dark:text-shark-950',
                {
                  'hover:text-red-500 hover:dark:text-red-500 hover:bg-red-500/10':
                    watch('reference') === 'manual',
                  'hover:text-blue-500 hover:dark:text-blue-500 hover:bg-primary-500/10':
                    watch('reference') === 'auto',
                },
              )}
              type="button"
              aria-label="Add"
            >
              {watch('reference') === 'auto' ? (
                <PlusIcon size={18} />
              ) : (
                <CloseIcon size={18} />
              )}
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateCompanyVehicleOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update CompanyVehicle"
          >
            Criar Veiculo de Empresa
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateCompanyVehicle = forwardRef(CreateCompanyVehicleRef);
