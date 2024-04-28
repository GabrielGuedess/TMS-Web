'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { useState, forwardRef, type ForwardRefRenderFunction } from 'react';

import { toast } from 'sonner';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { CaretArrowLeftIcon } from 'components/atoms/CaretArrowLeftIcon';

import { forgotPasswordFormSchema } from './schema';
import {
  type ForgotPasswordFormProps,
  type ForgotPasswordFormSchemaProps,
} from './types';

const ForgotPasswordFormRef: ForwardRefRenderFunction<
  HTMLFormElement,
  ForgotPasswordFormProps
> = ({ ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormSchemaProps>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordFormSchema),
  });

  const handleSend = async ({ email }: ForgotPasswordFormSchemaProps) => {
    setIsLoading(true);

    try {
      router.push(`/reset-password?email=${email}`);
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao enviar o e-mail!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao enviar o e-mail!');
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
            Enviar Solicitação
          </Button>

          <Link
            href="/"
            className="flex h-12 w-full items-center justify-center text-sm font-semibold text-shark-950 outline-primary-400 transition-all hover:text-primary-400 focus:text-primary-400 dark:text-white-lilac-50 dark:hover:text-primary-400 dark:focus:text-primary-400"
          >
            <CaretArrowLeftIcon size={16} />
            Voltar para login
          </Link>
        </div>
      </div>
    </form>
  );
};

export const ForgotPasswordForm = forwardRef(ForgotPasswordFormRef);
