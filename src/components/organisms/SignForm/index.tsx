'use client';

import Link from 'next/link';
import { type Route } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';

import { useForm, Controller } from 'react-hook-form';
import { useState, forwardRef, type ForwardRefRenderFunction } from 'react';

import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';

import { signInFormSchema } from './schema';
import { type SignFormProps, type SignInFormSchemaProps } from './types';

const SignFormRef: ForwardRefRenderFunction<HTMLFormElement, SignFormProps> = (
  { ...props },
  ref,
) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const searchParameters = useSearchParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormSchemaProps>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSignIn = async (data: SignInFormSchemaProps) => {
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        ...data,
        redirect: false,
        callbackUrl: `${window.location.origin}${searchParameters.get('callbackUrl') || '/dashboard'}`,
      });

      if (result?.error) {
        toast.error('Credenciais Inválidas!');

        return;
      }

      if (result?.url) {
        router.push(result?.url as Route);
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao realizar login!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao realizar login!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={ref} className="flex flex-col gap-5" {...props}>
      <div className="flex flex-col gap-10">
        <Controller
          render={({ field: { value, onChange } }) => (
            <Input
              type="email"
              value={value}
              label="E-mail"
              onChange={onChange}
              isInvalid={!!errors.email?.message}
              errorMessage={errors.email?.message}
              required
            />
          )}
          name="email"
          control={control}
        />

        <Controller
          render={({ field: { value, onChange } }) => (
            <Input
              label="Senha"
              value={value}
              type="password"
              onChange={onChange}
              isInvalid={!!errors.password?.message}
              errorMessage={errors.password?.message}
              required
            />
          )}
          name="password"
          control={control}
        />
      </div>

      <Link
        href="/forgot-password"
        className="self-end text-sm text-primary-400 underline"
      >
        Esqueceu sua senha?
      </Link>

      <Button
        type="submit"
        variant="label"
        className="h-12"
        isLoading={isLoading}
        isDisabled={isLoading}
        onClick={handleSubmit(handleSignIn)}
      >
        Login
      </Button>
    </form>
  );
};

export const SignForm = forwardRef(SignFormRef);
