'use client';

import Image from 'next/image';

import { useForm } from 'react-hook-form';
import {
  useRef,
  useState,
  forwardRef,
  type ElementRef,
  type ChangeEvent,
  type ForwardRefRenderFunction,
} from 'react';

import { useUpdateUserMutation } from 'graphql/generated';

import dayjs from 'dayjs';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { deleteUser } from 'actions/user/delete';
import { zodResolver } from '@hookform/resolvers/zod';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { CloseIcon } from 'components/atoms/CloseIcon';
import { CameraIcon } from 'components/atoms/CameraIcon';
import { ProfileIcon } from 'components/atoms/ProfileIcon';

import { userGeneral } from './schema';
import { type UserGeneralProps, type UserGeneralSchemaProps } from './types';

const UserGeneralRef: ForwardRefRenderFunction<
  HTMLDivElement,
  UserGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [userNewPhoto, setUserNewPhoto] = useState<File>();
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const fileInput = useRef<ElementRef<'input'>>(null);

  const [updateUser] = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserGeneralSchemaProps>({
    resolver: zodResolver(userGeneral),
  });

  const onSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files[0].size > 5e6) {
        toast.error('A imagem deve ter o tamanho máximo de 5 Mb!');

        return;
      }

      setUserNewPhoto(event.target.files[0]);
    }
  };

  const handleSelectPhoto = () => fileInput.current?.click();

  const handleUpdate = async (newData: UserGeneralSchemaProps) => {
    setIsLoadingUpdate(true);

    try {
      await updateUser({
        variables: {
          avatar: userNewPhoto,
          updateUserId: data.user.id,
          userUpdate: {
            name: newData.name,
            role: newData.role,
            email: newData.email,
            username: newData.username,
          },
        },
      });

      toast.success(`Usuário atualizado com sucesso!`);
    } catch {
      toast.error('Erro ao atualizar o usuário!');
    } finally {
      setIsLoadingUpdate(false);
    }
  };

  const handleDelete = async () => {
    setIsLoadingDelete(true);

    try {
      await deleteUser({ deleteUserId: data.user.id });

      toast.success(`Usuário deletado com sucesso!`);
    } catch {
      toast.error('Erro ao deletar o usuário!');
    } finally {
      setIsLoadingDelete(false);
    }
  };

  return (
    <div
      className={twMerge(
        'flex flex-col gap-6 md:grid md:grid-cols-12',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="col-span-4 flex flex-col items-center justify-center gap-6 rounded-2xl border border-zumthor-100 bg-white-lilac-50 px-6 pb-10 pt-20 shadow-default transition-all dark:border-shark-950 dark:bg-smoke-950">
        <div className="relative flex size-36 items-center justify-center rounded-full border border-dashed border-dark-200 dark:border-shark-700">
          {!userNewPhoto && !!data.user?.avatar_url && (
            <Image
              alt="photo"
              aria-label="Current Photo"
              src={data.user.avatar_url}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="cursor-pointer rounded-full object-cover p-2"
              fill
              priority
            />
          )}

          {userNewPhoto ? (
            <Image
              alt="photo"
              aria-label="New Photo"
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

        <AlertDialog.Root>
          <AlertDialog.Trigger aria-label="Delete User" asChild>
            <Button
              size="small"
              color="danger"
              variant="label"
              aria-label="Delete Trigger"
              className="min-w-[9.18rem]"
              isLoading={isLoadingDelete}
              isDisabled={isLoadingDelete}
            >
              Deletar Usuário
            </Button>
          </AlertDialog.Trigger>

          <AlertDialog.Portal>
            <AlertDialog.Overlay className="fixed inset-0 z-30 animate-overlayShow bg-black/80 backdrop-blur-sm" />

            <AlertDialog.Content className="fixed left-1/2 top-1/2 z-40 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 animate-contentShow rounded-md bg-white-lilac-50 p-9 transition-all dark:bg-smoke-950">
              <AlertDialog.Title className="text-lg font-semibold text-shark-950 transition-all dark:text-white-lilac-50">
                Deletar Usuário?
              </AlertDialog.Title>

              <AlertDialog.Description className="mb-6 mt-3">
                Ao clicar em Deletar Usuário, todas as informações associadas
                serão permanentemente removidas. Tem certeza de que deseja
                prosseguir com esta ação?
              </AlertDialog.Description>

              <div className="mt-6 flex justify-end gap-3">
                <AlertDialog.Cancel asChild>
                  <Button color="secondary">Cancelar</Button>
                </AlertDialog.Cancel>

                <Button
                  type="button"
                  color="danger"
                  variant="label"
                  onClick={handleDelete}
                  aria-label="Delete User"
                  isLoading={isLoadingDelete}
                  className="min-w-[9.559rem]"
                  isDisabled={isLoadingDelete}
                >
                  Deletar Usuário
                </Button>
              </div>
              <AlertDialog.Cancel
                aria-label="Close"
                className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-2 text-primary-400 outline-primary-400"
              >
                <CloseIcon size={14} />
              </AlertDialog.Cancel>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </div>

      <form
        aria-label="Form"
        onSubmit={handleSubmit(handleUpdate)}
        className="col-span-8 flex flex-col justify-between gap-6 rounded-2xl border border-zumthor-100 bg-white-lilac-50 p-6 shadow-default transition-all dark:border-shark-950 dark:bg-smoke-950"
      >
        <div className="grid grid-cols-auto-fill gap-x-4 gap-y-10">
          <Input
            label="E-mail"
            aria-label="Email"
            defaultValue={data.user.email}
            isInvalid={!!errors.email?.message}
            errorMessage={errors.email?.message}
            required
            isFullWidth
            {...register('email')}
          />

          <Input
            label="Nome"
            aria-label="Name"
            defaultValue={data.user.name}
            isInvalid={!!errors.name?.message}
            errorMessage={errors.name?.message}
            required
            isFullWidth
            {...register('name')}
          />

          <Input
            aria-label="username"
            label="Nome de Usuário"
            defaultValue={data.user.username}
            isInvalid={!!errors.username?.message}
            errorMessage={errors.username?.message}
            required
            isFullWidth
            {...register('username')}
          />

          <Input
            aria-label="role"
            label="Tipo de Usuário"
            defaultValue={data.user.role}
            isInvalid={!!errors.role?.message}
            errorMessage={errors.role?.message}
            required
            isFullWidth
            {...register('role')}
          />

          <Input
            defaultValue={dayjs(data.user.created_at as string).format(
              'YYYY-MM-DD',
            )}
            type="date"
            label="Data de Criação"
            readOnly
            required
            isFullWidth
          />

          <Input
            defaultValue={dayjs(data.user.created_at as string).format(
              'YYYY-MM-DD',
            )}
            type="date"
            label="Data de Atualização"
            readOnly
            required
            isFullWidth
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            type="submit"
            color="success"
            variant="label"
            aria-label="Update User"
            isLoading={isLoadingUpdate}
            isDisabled={isLoadingUpdate}
            className="min-w-[12.404rem]"
          >
            Atualizar Colaborador
          </Button>
        </div>
      </form>
    </div>
  );
};

export const UserGeneral = forwardRef(UserGeneralRef);
