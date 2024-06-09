'use client';

import { useForm, Controller } from 'react-hook-form';
import {
  useState,
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import { useUpdateVehicleBodyworkMutation } from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';

import { vehicleBodyworkGeneralSchema } from './schema';
import {
  type VehicleBodyworkGeneralProps,
  type VehicleBodyworkGeneralInputProps,
  type VehicleBodyworkGeneralOutputProps,
} from './types';

const VehicleBodyworkGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  VehicleBodyworkGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [updateVehicleBodywork] = useUpdateVehicleBodyworkMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VehicleBodyworkGeneralInputProps>({
    resolver: zodResolver(vehicleBodyworkGeneralSchema),
    defaultValues: {
      name: data?.getVehicleBodyworkModel?.name,
      mass: String(data?.getVehicleBodyworkModel?.mass),
      axles: String(data?.getVehicleBodyworkModel?.axles),
      volume: String(data?.getVehicleBodyworkModel?.volume),
    },
  });

  const handleUpdate = async (newData: VehicleBodyworkGeneralOutputProps) => {
    setIsLoading(true);

    try {
      await updateVehicleBodywork({
        variables: {
          updateVehicleBodyworkId: data?.getVehicleBodyworkModel?.id ?? '',
          vehicleBodyworkIUpdate: {
            name: newData.name,
            mass: Number(newData.mass),
            axles: Number(newData.axles),
            volume: Number(newData.volume),
          },
        },
      });

      toast.success('Carroceria de Veiculo atualizado com sucesso!');
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar Carroceria de Veiculo!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar Carroceria de Veiculo!');
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
                label="Massa"
                value={value}
                aria-label="Mass"
                placeholder="Massa"
                onChange={onChange}
                isInvalid={!!errors.mass?.message}
                errorMessage={errors.mass?.message}
                required
                isFullWidth
              />
            )}
            name="mass"
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
              <Input
                type="number"
                value={value}
                label="Volume"
                aria-label="Volume"
                onChange={onChange}
                placeholder="Volume"
                isInvalid={!!errors.volume?.message}
                errorMessage={errors.volume?.message}
                required
                isFullWidth
              />
            )}
            name="volume"
            control={control}
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const update = values as VehicleBodyworkGeneralOutputProps;

              handleUpdate(update);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update VehicleBodywork"
          >
            Atualizar Carroceria de Veiculo
          </Button>
        </div>
      </form>
    </div>
  );
};

export const VehicleBodyworkGeneral = forwardRef(VehicleBodyworkGeneralRef);
