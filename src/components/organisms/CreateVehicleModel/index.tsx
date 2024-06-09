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
  useCreateVehicleModelMutation,
  useGetAllVehicleBrandComboQuery,
  useGetAllVehicleTypesComboQuery,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { createVehicleModelSchema } from './schema';
import {
  type CreateVehicleModelProps,
  type CreateVehicleModelInputProps,
  type CreateVehicleModelOutputProps,
} from './types';

const CreateVehicleModelRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateVehicleModelProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchVehicleBrand, setIsLoadingSearchVehicleBrand] =
    useState(false);
  const [isLoadingSearchVehicleType, setIsLoadingSearchVehicleType] =
    useState(false);

  const [searchVehicleBrand, setSearchVehicleBrand] = useState('');
  const [searchVehicleType, setSearchVehicleType] = useState('');

  const router = useRouter();

  const [createVehicleModel] = useCreateVehicleModelMutation();

  const { data: dataVehicleBrands, refetch: refetchVehicleBrands } =
    useGetAllVehicleBrandComboQuery();
  const { data: dataVehicleTypes, refetch: refetchVehicleTypes } =
    useGetAllVehicleTypesComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVehicleModelInputProps>({
    resolver: zodResolver(createVehicleModelSchema),
    defaultValues: {
      name: '',
      axles: '',
      weight: '',
      capacity_max: '',
      capacity_per_axle: '',
      type: { id: '', description: '' },
      brand: { id: '', description: '' },
    },
  });

  const handleSearchVehicleBrand = async () => {
    setIsLoadingSearchVehicleBrand(true);

    try {
      await refetchVehicleBrands({
        where: {
          OR: [
            {
              name: {
                mode: QueryMode.Insensitive,
                contains: searchVehicleBrand,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar as Marcas!');
    } finally {
      setIsLoadingSearchVehicleBrand(false);
    }
  };

  const handleSearchVehicleType = async () => {
    setIsLoadingSearchVehicleType(true);

    try {
      await refetchVehicleTypes({
        where: {
          OR: [
            {
              name: {
                mode: QueryMode.Insensitive,
                contains: searchVehicleType,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar as Tipos!');
    } finally {
      setIsLoadingSearchVehicleType(false);
    }
  };

  const handleCreate = async (data: CreateVehicleModelOutputProps) => {
    setIsLoading(true);

    try {
      const VehicleModel = await createVehicleModel({
        variables: {
          vehicleModelInput: {
            name: data.name,
            type_id: data.type.id,
            brand_id: data.brand.id,
            axles: Number(data.axles),
            weight: Number(data.weight),
            capacity_max: Number(data.capacity_max),
            capacity_per_axle: Number(data.capacity_per_axle),
          },
        },
      });

      toast.success('Modelo de Veiculo criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/vehicle-models/${VehicleModel.data?.createVehicleModel.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Modelo de Veiculo!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Modelo de Veiculo!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchVehicleBrand !== '') {
        handleSearchVehicleBrand();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchVehicleBrand]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchVehicleType !== '') {
        handleSearchVehicleType();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchVehicleType]);

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
                label="Nome"
                value={value}
                aria-label="Name"
                placeholder="Nome"
                onChange={onChange}
                isInvalid={!!errors.name?.message}
                errorMessage={errors.name?.message}
                required
                isFullWidth
              />
            )}
            name="name"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                type="number"
                value={value}
                onChange={onChange}
                label="Capacidade Maxima"
                aria-label="Capacity Max"
                placeholder="Capacidade Maxima"
                isInvalid={!!errors.capacity_max?.message}
                errorMessage={errors.capacity_max?.message}
                required
                isFullWidth
              />
            )}
            control={control}
            name="capacity_max"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                type="number"
                value={value}
                onChange={onChange}
                label="Maxima por Eixo"
                placeholder="Maxima por Eixo"
                aria-label="Capacity per Axle"
                isInvalid={!!errors.capacity_per_axle?.message}
                errorMessage={errors.capacity_per_axle?.message}
                required
                isFullWidth
              />
            )}
            control={control}
            name="capacity_per_axle"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                label="Peso"
                type="number"
                value={value}
                placeholder="Peso"
                aria-label="Weight"
                onChange={onChange}
                isInvalid={!!errors.weight?.message}
                errorMessage={errors.weight?.message}
                required
                isFullWidth
              />
            )}
            name="weight"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                type="number"
                label="Eixos"
                value={value}
                aria-label="Axles"
                placeholder="Eixos"
                onChange={onChange}
                isInvalid={!!errors.axles?.message}
                errorMessage={errors.axles?.message}
                required
                isFullWidth
              />
            )}
            name="axles"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataVehicleBrands?.getAllVehicleBrand?.map(item => ({
                  id: item.id,
                  description: `${item.name}`,
                }))}
                value={value}
                label="Marca"
                search={searchVehicleBrand}
                isInvalid={!!errors.brand?.id}
                placeholder="Selecione a Marca"
                setValue={item => onChange(item)}
                setSearch={setSearchVehicleBrand}
                emptyMessage="Marca não encontrado"
                isLoading={isLoadingSearchVehicleBrand}
                placeholderCommand="Pesquise a Marca..."
                errorMessage={errors.brand?.id?.message}
                className="bg-transparent dark:bg-transparent"
              />
            )}
            name="brand"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataVehicleTypes?.getAllVehicleTypes?.map(item => ({
                  id: item.id,
                  description: `${item.name}`,
                }))}
                label="Tipo"
                value={value}
                search={searchVehicleType}
                isInvalid={!!errors.type?.id}
                placeholder="Selecione a Tipo"
                setSearch={setSearchVehicleType}
                setValue={item => onChange(item)}
                emptyMessage="Tipo não encontrado"
                isLoading={isLoadingSearchVehicleType}
                placeholderCommand="Pesquise a Tipo..."
                errorMessage={errors.type?.id?.message}
                className="bg-transparent dark:bg-transparent"
              />
            )}
            name="type"
            control={control}
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateVehicleModelOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update VehicleModel"
          >
            Criar Modelo de Veiculo
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateVehicleModel = forwardRef(CreateVehicleModelRef);
