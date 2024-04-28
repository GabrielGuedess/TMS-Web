'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useForm, Controller } from 'react-hook-form';
import {
  useRef,
  useState,
  forwardRef,
  type ElementRef,
  type ChangeEvent,
  type ForwardRefRenderFunction,
} from 'react';

import { useCreateUserMutation } from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { Select } from 'components/molecules/Select';
import { CameraIcon } from 'components/atoms/CameraIcon';
import { ProfileIcon } from 'components/atoms/ProfileIcon';

import { createUserSchema } from './schema';
import {
  type CreateUserProps,
  type CreateUserInputProps,
  type CreateUserOutputProps,
} from './types';

const CreateUserRef: ForwardRefRenderFunction<
  HTMLDivElement,
  CreateUserProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [userNewPhoto, setUserNewPhoto] = useState<File>();

  const router = useRouter();
  const [createUser] = useCreateUserMutation();

  const fileInput = useRef<ElementRef<'input'>>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserInputProps>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'USER',
      username: '',
    },
  });

  const handleCreate = async (data: CreateUserOutputProps) => {
    setIsLoading(true);

    try {
      const user = await createUser({
        variables: {
          avatar: userNewPhoto,
          createUserInput: {
            name: data.name,
            role: data.role,
            email: data.email,
            password: data.password,
            username: data.username,
          },
        },
      });

      toast.success('Usuário criado com sucesso!');

      router.push(`/dashboard/users/${user.data?.createUser.id}/general`);
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar usuário!', { description: error.message });

        return;
      }

      toast.error('Erro ao criar usuário!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectPhoto = () => fileInput.current?.click();

  const onSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0].size > 5e6) {
        toast.error('A imagem deve ter o tamanho máximo de 5 Mb!');

        return;
      }

      setUserNewPhoto(event.target.files[0]);
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
      <div className="col-span-4 flex flex-col items-center justify-center gap-6 rounded-2xl border border-zumthor-100 bg-white-lilac-50 px-6 pb-10 pt-20 shadow-default transition-all dark:border-shark-950 dark:bg-smoke-950">
        <div className="relative flex size-36 items-center justify-center rounded-full border border-dashed border-dark-200 dark:border-shark-700">
          {userNewPhoto ? (
            <Image
              alt="photo"
              aria-label="Photo"
              sizes="(max-width: 768px) 100vw, 33vw"
              src={URL.createObjectURL(userNewPhoto)}
              className="cursor-pointer rounded-full object-cover p-2"
              fill
              priority
            />
          ) : (
            <ProfileIcon
              size={56}
              aria-label="Default Photo"
              className="text-comet-500 transition-all dark:text-dark-500"
            />
          )}

          <input
            type="file"
            ref={fileInput}
            accept="image/*"
            aria-label="File"
            className="hidden"
            onChange={onSelectFile}
            aria-hidden
          />

          <button
            type="button"
            aria-label="Change Photo"
            onClick={handleSelectPhoto}
            className="group absolute inset-2 z-20 flex cursor-pointer items-center justify-center rounded-full text-white-lilac-50 transition-all hover:bg-black/70 focus:bg-black/70"
          >
            <CameraIcon
              size={36}
              className="opacity-0 transition-all group-hover:opacity-100 group-focus:opacity-100"
            />
          </button>
        </div>

        <span className="text-center text-xs text-comet-500 transition-all dark:text-dark-300">
          Permitido *.jpeg, *.jpg, *.png, *.gif <br />
          tamanho máximo de 5 Mb
        </span>
      </div>

      <form
        aria-label="Form"
        className="col-span-8 flex flex-col justify-between gap-6 rounded-2xl border border-zumthor-100 bg-white-lilac-50 p-6 shadow-default transition-all dark:border-shark-950 dark:bg-smoke-950"
      >
        <div className="grid grid-cols-auto-fill gap-x-4 gap-y-10">
          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                aria-label="Name"
                placeholder="Nome"
                onChange={onChange}
                label="Nome Completo"
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
                type="email"
                value={value}
                label="E-mail"
                aria-label="Email"
                onChange={onChange}
                isInvalid={!!errors.email?.message}
                errorMessage={errors.email?.message}
                required
                isFullWidth
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
                aria-label="Password"
                isInvalid={!!errors.password?.message}
                errorMessage={errors.password?.message}
                required
                isFullWidth
              />
            )}
            name="password"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                label="Username"
                onChange={onChange}
                aria-label="Username"
                placeholder="Username"
                isInvalid={!!errors.username?.message}
                errorMessage={errors.username?.message}
                required
                isFullWidth
              />
            )}
            name="username"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Select
                value={value}
                placeholder="Tipo"
                label="Tipo de Usuário"
                onValueChange={onChange}
                values={['USER', 'ADMIN']}
                className="p-3 dark:bg-smoke-950"
                isInvalid={!!errors.role?.message}
                errorMessage={errors.role?.message}
              />
            )}
            name="role"
            control={control}
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateUserOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            aria-label="Update User"
            className="min-w-[12.404rem]"
          >
            Criar Colaborador
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateUser = forwardRef(CreateUserRef);
