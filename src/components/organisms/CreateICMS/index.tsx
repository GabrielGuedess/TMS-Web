'use client';

import { useRouter } from 'next/navigation';

import { useForm, Controller } from 'react-hook-form';
import {
  useState,
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import { UfEnum, useCreateIcmsMutation } from 'graphql/generated';

import dayjs from 'dayjs';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { Select } from 'components/molecules/Select';
import { DatePicker } from 'components/molecules/DatePicker';

import { createICMSSchema } from './schema';
import {
  type CreateICMSProps,
  type CreateICMSInputProps,
  type CreateICMSOutputProps,
} from './types';

const CreateICMSRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateICMSProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const [createICMS] = useCreateIcmsMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateICMSInputProps>({
    resolver: zodResolver(createICMSSchema),
    defaultValues: {
      aliquot: '0',
      state_origin: '',
      recipient_state: '',
      effective_date: dayjs().toDate(),
    },
  });

  const handleCreate = async (data: CreateICMSOutputProps) => {
    setIsLoading(true);

    try {
      const ICMS = await createICMS({
        variables: {
          data: {
            aliquot: Number(data.aliquot),
            state_origin: data.state_origin,
            effective_date: data.effective_date,
            recipient_state: data.recipient_state,
          },
        },
      });

      toast.success('ICMS criado com sucesso!');

      router.refresh();

      router.push(`/dashboard/icms/${ICMS.data?.createIcms.id}/general`);
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar ICMS!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar ICMS!');
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
                type="number"
                value={value}
                label="Alíquota"
                onChange={onChange}
                aria-label="Aliquot"
                placeholder="Alíquota"
                isInvalid={!!errors.aliquot?.message}
                errorMessage={errors.aliquot?.message}
                required
                isFullWidth
              />
            )}
            name="aliquot"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Select
                value={value}
                placeholder="Estado"
                onValueChange={onChange}
                label="Estado de Origem"
                aria-label="State Origin"
                values={Object.values(UfEnum)}
                className="p-3 dark:bg-smoke-950"
                isInvalid={!!errors.state_origin?.message}
                errorMessage={errors.state_origin?.message}
                hasHeight
              />
            )}
            control={control}
            name="state_origin"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Select
                value={value}
                placeholder="Estado"
                onValueChange={onChange}
                label="Estado Recebedor"
                aria-label="Recipient State"
                values={Object.values(UfEnum)}
                className="p-3 dark:bg-smoke-950"
                isInvalid={!!errors.recipient_state?.message}
                errorMessage={errors.recipient_state?.message}
                hasHeight
              />
            )}
            control={control}
            name="recipient_state"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <DatePicker
                date={value as Date}
                label="Data Efetiva"
                setDate={item => onChange(item as Date)}
                isInvalid={!!errors.effective_date?.message}
                errorMessage={errors.effective_date?.message}
              />
            )}
            control={control}
            name="effective_date"
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateICMSOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            aria-label="Update ICMS"
            className="min-w-[12.404rem]"
          >
            Criar ICMS
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateICMS = forwardRef(CreateICMSRef);
