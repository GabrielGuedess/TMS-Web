'use client';

import { useRouter } from 'next/navigation';

import { useForm, Controller } from 'react-hook-form';
import {
  useState,
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import { useCreateVehicleBodyworkMutation } from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';

import { createVehicleBodyworkSchema } from './schema';
import {
  type CreateVehicleBodyworkProps,
  type CreateVehicleBodyworkInputProps,
  type CreateVehicleBodyworkOutputProps,
} from './types';

const CreateVehicleBodyworkRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateVehicleBodyworkProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const [createVehicleBodywork] = useCreateVehicleBodyworkMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVehicleBodyworkInputProps>({
    resolver: zodResolver(createVehicleBodyworkSchema),
    defaultValues: {
      name: '',
      mass: '',
      axles: '',
    },
  });

  const handleCreate = async (data: CreateVehicleBodyworkOutputProps) => {
    setIsLoading(true);

    try {
      const VehicleBodywork = await createVehicleBodywork({
        variables: {
          vehicleBodyworkInput: {
            name: data.name,
            mass: Number(data.mass),
            axles: Number(data.axles),
            volume: Number(data.volume),
          },
        },
      });

      toast.success('Carroceria de Veiculo criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/vehicle-types/${VehicleBodywork.data?.createVehicleBodywork.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Carroceria de Veiculo!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Carroceria de Veiculo!');
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
              const data = values as CreateVehicleBodyworkOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update VehicleBodywork"
          >
            Criar Carroceria de Veiculo
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateVehicleBodywork = forwardRef(CreateVehicleBodyworkRef);
