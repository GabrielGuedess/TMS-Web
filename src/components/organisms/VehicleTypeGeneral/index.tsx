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
  useUpdatedVehicleTypeMutation,
  useGetAllVehicleBodyworkComboQuery,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { Select } from 'components/molecules/Select';
import { ComboBox } from 'components/molecules/Combobox';

import { vehicleTypeGeneralSchema } from './schema';
import {
  type VehicleTypeGeneralProps,
  type VehicleTypeGeneralInputProps,
  type VehicleTypeGeneralOutputProps,
} from './types';

const VehicleTypeGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  VehicleTypeGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchVehicleBodywork, setIsLoadingSearchVehicleBodywork] =
    useState(false);

  const [searchVehicleBodywork, setSearchVehicleBodywork] = useState('');

  const [updatedVehicleType] = useUpdatedVehicleTypeMutation();

  const { data: dataVehicleBodyworks, refetch: refetchVehicleBodyworks } =
    useGetAllVehicleBodyworkComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VehicleTypeGeneralInputProps>({
    resolver: zodResolver(vehicleTypeGeneralSchema),
    defaultValues: {
      name: data.getVehicleType.name,
      bodyWorkEntity: { id: '', description: '' },
      bodyWork: data.getVehicleType.bodyWork ? 'Sim' : 'Não',
    },
  });

  const handleSearchVehicleBodywork = async () => {
    setIsLoadingSearchVehicleBodywork(true);

    try {
      await refetchVehicleBodyworks({
        where: {
          OR: [
            {
              name: {
                mode: QueryMode.Insensitive,
                contains: searchVehicleBodywork,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Carrocerias!');
    } finally {
      setIsLoadingSearchVehicleBodywork(false);
    }
  };

  const handleUpdate = async (newData: VehicleTypeGeneralOutputProps) => {
    setIsLoading(true);

    try {
      await updatedVehicleType({
        variables: {
          updatedVehicleTypeId: data.getVehicleType.id,
          vehicleTypeInput: {
            name: newData.name,
            bodyWork: newData.bodyWork,
            body_work_id: [newData.bodyWorkEntity.id],
          },
        },
      });

      toast.success('Tipo de Veiculo atualizado com sucesso!');
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar Tipo de Veiculo!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar Tipo de Veiculo!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchVehicleBodywork !== '') {
        handleSearchVehicleBodywork();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchVehicleBodywork]);

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
              <Select
                value={value}
                label="Carroceria"
                values={['Sim', 'Não']}
                onValueChange={onChange}
                placeholder="Carroceria?"
                className="p-3 dark:bg-smoke-950"
                isInvalid={!!errors.bodyWork?.message}
                errorMessage={errors.bodyWork?.message}
              />
            )}
            name="bodyWork"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataVehicleBodyworks?.getAllVehicleBodywork?.map(
                  item => ({
                    id: item.id,
                    description: `${item.axles}`,
                  }),
                )}
                value={value}
                label="Carroceria"
                search={searchVehicleBodywork}
                setValue={item => onChange(item)}
                setSearch={setSearchVehicleBodywork}
                placeholder="Selecione a Carroceria"
                isInvalid={!!errors.bodyWorkEntity?.id}
                emptyMessage="Carroceria não encontrado"
                isLoading={isLoadingSearchVehicleBodywork}
                placeholderCommand="Pesquise a Carroceria..."
                className="bg-transparent dark:bg-transparent"
                errorMessage={errors.bodyWorkEntity?.id?.message}
              />
            )}
            control={control}
            name="bodyWorkEntity"
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const update = values as VehicleTypeGeneralOutputProps;

              handleUpdate(update);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update VehicleType"
          >
            Atualizar Tipo de Veiculo
          </Button>
        </div>
      </form>
    </div>
  );
};

export const VehicleTypeGeneral = forwardRef(VehicleTypeGeneralRef);
