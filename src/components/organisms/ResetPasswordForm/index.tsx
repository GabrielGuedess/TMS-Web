'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useForm, Controller } from 'react-hook-form';
import { useState, forwardRef, type ForwardRefRenderFunction } from 'react';

import { toast } from 'sonner';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { OTP } from 'components/molecules/OTP';
import { Button } from 'components/atoms/Button';
import { CaretArrowLeftIcon } from 'components/atoms/CaretArrowLeftIcon';

import { resetPasswordFormSchema } from './schema';
import {
  type ResetPasswordFormProps,
  type ResetPasswordFormSchemaProps,
} from './types';

const ResetPasswordFormRef: ForwardRefRenderFunction<
  HTMLFormElement,
  ResetPasswordFormProps
> = ({ email, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormSchemaProps>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      code: '',
      password: '',
      email: email ?? '',
      confirm_password: '',
    },
  });

  const handleSend = async () => {
    setIsLoading(true);

    try {
      toast.success('Senha atualizada com sucesso!');

      router.push(`/`);
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar a senha!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar a senha!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={ref} {...props}>
      <div className="flex flex-col gap-8">
        <Input
          type="email"
          label="E-mail"
          isInvalid={!!errors.email?.message}
          errorMessage={errors.email?.message}
          required
          {...register('email')}
        />

        <Controller
          render={({ field: { value, onChange } }) => (
            <OTP
              numInputs={6}
              value={value}
              onChange={onChange}
              isInvalid={!!errors.code?.message}
              errorMessage={errors.code?.message}
            />
          )}
          name="code"
          control={control}
        />

        <Input
          type="password"
          label="Nova Senha"
          isInvalid={!!errors.password?.message}
          errorMessage={errors.password?.message}
          required
          {...register('password')}
        />

        <Input
          type="password"
          label="Confirme a Senha"
          isInvalid={!!errors.confirm_password?.message}
          errorMessage={errors.confirm_password?.message}
          required
          {...register('confirm_password')}
        />

        <div className="flex flex-col gap-6">
          <Button
            type="submit"
            variant="label"
            className="h-12"
            isLoading={isLoading}
            isDisabled={isLoading}
            onClick={handleSubmit(handleSend)}
            isFullWidth
          >
            Atualizar Senha
          </Button>

          <div className="flex flex-col gap-3">
            <span className="text-center text-sm text-shark-950 transition-all dark:text-white-lilac-50">
              Não tem um código?{' '}
              <button
                type="button"
                className="font-semibold text-primary-400 hover:underline focus:underline"
              >
                Reenviar código
              </button>
            </span>

            <Link
              href="/"
              className="flex h-12 w-full items-center justify-center text-sm font-semibold text-shark-950 outline-primary-400 transition-all hover:text-primary-400 focus:text-primary-400 dark:text-white-lilac-50 dark:hover:text-primary-400 dark:focus:text-primary-400"
            >
              <CaretArrowLeftIcon size={16} />
              Voltar para login
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export const ResetPasswordForm = forwardRef(ResetPasswordFormRef);
