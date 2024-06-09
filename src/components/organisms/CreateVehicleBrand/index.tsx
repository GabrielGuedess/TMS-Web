'use client';

import { useRouter } from 'next/navigation';

import { useForm, Controller } from 'react-hook-form';
import {
  useState,
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import { useCreateVehicleBrandMutation } from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';

import { createVehicleBrandSchema } from './schema';
import {
  type CreateVehicleBrandProps,
  type CreateVehicleBrandInputProps,
  type CreateVehicleBrandOutputProps,
} from './types';

const CreateVehicleBrandRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateVehicleBrandProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const [createVehicleBrand] = useCreateVehicleBrandMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateVehicleBrandInputProps>({
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(createVehicleBrandSchema),
  });

  const handleCreate = async (data: CreateVehicleBrandOutputProps) => {
    setIsLoading(true);

    try {
      const VehicleBrand = await createVehicleBrand({
        variables: {
          vehicleBrandInput: {
            name: data.name,
          },
        },
      });

      toast.success('Marca de Veiculo criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/vehicle-types/${VehicleBrand.data?.createVehicleBrand.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Marca de Veiculo!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Marca de Veiculo!');
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
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateVehicleBrandOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update VehicleBrand"
          >
            Criar Marca de Veiculo
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateVehicleBrand = forwardRef(CreateVehicleBrandRef);
