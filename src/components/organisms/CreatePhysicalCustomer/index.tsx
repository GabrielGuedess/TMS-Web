'use client';

import { useRouter } from 'next/navigation';

import { useForm, Controller } from 'react-hook-form';
import {
  useState,
  useEffect,
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import {
  UfEnum,
  QueryMode,
  useGetAllNaturalPersonComboQuery,
  useCreatePhysicalCustomerMutation,
} from 'graphql/generated';

import clsx from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { Separator } from '@radix-ui/react-select';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { Select } from 'components/molecules/Select';
import { PlusIcon } from 'components/atoms/PlusIcon';
import { CloseIcon } from 'components/atoms/CloseIcon';
import { ComboBox } from 'components/molecules/Combobox';
import { DatePicker } from 'components/molecules/DatePicker';

import { createPhysicalCustomerSchema } from './schema';
import {
  type CreatePhysicalCustomerProps,
  type CreatePhysicalCustomerInputProps,
  type CreatePhysicalCustomerOutputProps,
} from './types';

const CreatePhysicalCustomerRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreatePhysicalCustomerProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearchNaturalPerson, setIsLoadingSearchNaturalPerson] =
    useState(false);

  const [searchNaturalPerson, setSearchNaturalPerson] = useState('');

  const router = useRouter();

  const [createPhysicalCustomer] = useCreatePhysicalCustomerMutation();

  const { data: dataNaturalPersons, refetch: refetchNaturalPersons } =
    useGetAllNaturalPersonComboQuery();

  const {
    watch,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePhysicalCustomerInputProps>({
    resolver: zodResolver(createPhysicalCustomerSchema),
    defaultValues: {
      branch: '',
      reference: 'auto',
      naturalPerson: {
        id: '',
        description: '',
      },
    },
  });

  const handleSearchNaturalPerson = async () => {
    setIsLoadingSearchNaturalPerson(true);

    try {
      await refetchNaturalPersons({
        where: {
          OR: [
            {
              cpf: {
                mode: QueryMode.Insensitive,
                contains: searchNaturalPerson,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Pessoas Física!');
    } finally {
      setIsLoadingSearchNaturalPerson(false);
    }
  };

  const handleCreate = async (data: CreatePhysicalCustomerOutputProps) => {
    setIsLoading(true);

    try {
      const PhysicalCustomer = await createPhysicalCustomer({
        variables: {
          data: {
            branch: data.branch,
            ...(watch('reference') === 'auto' && {
              natural_person_id: data?.naturalPerson?.id ?? '',
            }),
            ...(watch('reference') === 'manual' && {
              NaturalPerson: data.naturalPersonManual,
            }),
          },
        },
      });

      toast.success('Cliente Físico criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/physical-customers/${PhysicalCustomer.data?.createPhysicalCustomer.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Cliente Físico!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Cliente Físico!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchNaturalPerson !== '') {
        handleSearchNaturalPerson();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchNaturalPerson]);

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
                label="Ramo"
                value={value}
                aria-label="Brach"
                placeholder="Ramo"
                onChange={onChange}
                isInvalid={!!errors.branch?.message}
                errorMessage={errors.branch?.message}
                required
                isFullWidth
              />
            )}
            name="branch"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataNaturalPersons?.getAllNaturalPerson?.map(item => ({
                  id: item.id,
                  description: `${item.cpf}`,
                }))}
                value={value}
                label="Cliente Físico"
                search={searchNaturalPerson}
                setValue={item => onChange(item)}
                setSearch={setSearchNaturalPerson}
                isInvalid={!!errors.naturalPerson?.id}
                isLoading={isLoadingSearchNaturalPerson}
                placeholder="Selecione a Cliente Físico"
                isDisable={watch('reference') === 'manual'}
                emptyMessage="Cliente Físico não encontrado"
                className="bg-transparent dark:bg-transparent"
                errorMessage={errors.naturalPerson?.id?.message}
                placeholderCommand="Pesquise a Cliente Físico..."
              />
            )}
            control={control}
            name="naturalPerson"
          />
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Separator className="h-[1px] bg-gray-300 transition-all dark:bg-shark-950" />

          <span className="text-sm font-medium text-gray-700 transition-all dark:text-dark-300">
            Não possui nenhuma Pessoa Física? Crie abaixo
          </span>

          {watch('reference') === 'manual' && (
            <div className="grid grid-cols-auto-fill gap-x-4 gap-y-10">
              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    label="Nome"
                    value={value}
                    aria-label="Name"
                    placeholder="Nome"
                    onChange={onChange}
                    isInvalid={!!errors.naturalPersonManual?.name?.message}
                    errorMessage={errors.naturalPersonManual?.name?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="naturalPersonManual.name"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    type="email"
                    value={value}
                    label="E-Mail"
                    aria-label="email"
                    onChange={onChange}
                    placeholder="E-Mail"
                    isInvalid={!!errors.naturalPersonManual?.email?.message}
                    errorMessage={errors.naturalPersonManual?.email?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="naturalPersonManual.email"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    mask={[
                      /\d/,
                      /\d/,
                      '.',
                      /\d/,
                      /\d/,
                      /\d/,
                      '.',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                    ]}
                    label="RG"
                    value={value}
                    aria-label="RG"
                    placeholder="RG"
                    onChange={onChange}
                    isInvalid={!!errors.naturalPersonManual?.rg?.message}
                    errorMessage={errors.naturalPersonManual?.rg?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="naturalPersonManual.rg"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Select
                    value={value}
                    label="Gênero"
                    aria-label="Gênero"
                    placeholder="Gênero"
                    onValueChange={onChange}
                    className="p-3 dark:bg-smoke-950"
                    values={['Masculino', 'Feminino']}
                    isInvalid={!!errors.naturalPersonManual?.gender?.message}
                    errorMessage={errors.naturalPersonManual?.gender?.message}
                  />
                )}
                control={control}
                name="naturalPersonManual.gender"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    isInvalid={
                      !!errors.naturalPersonManual?.first_phone?.message
                    }
                    errorMessage={
                      errors.naturalPersonManual?.first_phone?.message
                    }
                    mask={[
                      '(',
                      /\d/,
                      /\d/,
                      ')',
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    value={value}
                    label="Celular"
                    onChange={onChange}
                    aria-label="Celular"
                    placeholder="Celular"
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="naturalPersonManual.first_phone"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    isInvalid={
                      !!errors.naturalPersonManual?.nationality?.message
                    }
                    errorMessage={
                      errors.naturalPersonManual?.nationality?.message
                    }
                    value={value}
                    onChange={onChange}
                    label="Nacionalidade"
                    aria-label="Nacionalidade"
                    placeholder="Nacionalidade"
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="naturalPersonManual.nationality"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    mask={[
                      /\d/,
                      /\d/,
                      /\d/,
                      '.',
                      /\d/,
                      /\d/,
                      /\d/,
                      '.',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                    ]}
                    label="CPF"
                    value={value}
                    aria-label="CPF"
                    placeholder="CPF"
                    onChange={onChange}
                    isInvalid={!!errors.naturalPersonManual?.cpf?.message}
                    errorMessage={errors.naturalPersonManual?.cpf?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="naturalPersonManual.cpf"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <DatePicker
                    isInvalid={
                      !!errors.naturalPersonManual?.date_birth?.message
                    }
                    errorMessage={
                      errors.naturalPersonManual?.date_birth?.message
                    }
                    date={value as Date}
                    label="Data de Nascimento"
                    setDate={item => onChange(item as Date)}
                  />
                )}
                control={control}
                name="naturalPersonManual.date_birth"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    label="CEP"
                    value={value}
                    aria-label="CEP"
                    placeholder="CEP"
                    onChange={onChange}
                    isInvalid={!!errors.naturalPersonManual?.cep?.message}
                    errorMessage={errors.naturalPersonManual?.cep?.message}
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="naturalPersonManual.cep"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    value={value}
                    label="Cidade"
                    aria-label="Cidade"
                    onChange={onChange}
                    placeholder="Cidade"
                    isInvalid={!!errors.naturalPersonManual?.city?.message}
                    errorMessage={errors.naturalPersonManual?.city?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="naturalPersonManual.city"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    isInvalid={
                      !!errors.naturalPersonManual?.neighborhood?.message
                    }
                    errorMessage={
                      errors.naturalPersonManual?.neighborhood?.message
                    }
                    value={value}
                    label="Bairro"
                    aria-label="Bairro"
                    onChange={onChange}
                    placeholder="Bairro"
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="naturalPersonManual.neighborhood"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    isInvalid={
                      !!errors.naturalPersonManual?.public_place?.message
                    }
                    errorMessage={
                      errors.naturalPersonManual?.public_place?.message
                    }
                    label="Rua"
                    value={value}
                    aria-label="Rua"
                    placeholder="Rua"
                    onChange={onChange}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="naturalPersonManual.public_place"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    isInvalid={
                      !!errors.naturalPersonManual?.address_number?.message
                    }
                    errorMessage={
                      errors.naturalPersonManual?.address_number?.message
                    }
                    value={value}
                    type="number"
                    label="Numero"
                    aria-label="Numero"
                    onChange={onChange}
                    placeholder="Numero"
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="naturalPersonManual.address_number"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Select
                    value={value}
                    label="Estado"
                    aria-label="State"
                    placeholder="Estado"
                    onValueChange={onChange}
                    values={Object.values(UfEnum)}
                    className="p-3 dark:bg-smoke-950"
                    isInvalid={!!errors.naturalPersonManual?.uf?.message}
                    errorMessage={errors.naturalPersonManual?.uf?.message}
                    hasHeight
                  />
                )}
                control={control}
                name="naturalPersonManual.uf"
              />
            </div>
          )}
        </div>

        <div className="flex w-full justify-center">
          <button
            onClick={() => {
              if (watch('reference') === 'auto') {
                setValue('reference', 'manual');

                return;
              }

              if (watch('reference') === 'manual') {
                setValue('reference', 'auto');
                reset();
              }
            }}
            className={clsx(
              'max-w-min cursor-pointer rounded-full border-2 border-gray-300 p-5 text-gray-300 transition-all dark:border-shark-950 dark:text-shark-950',
              {
                'hover:text-red-500 hover:dark:text-red-500 hover:bg-red-500/10':
                  watch('reference') === 'manual',
                'hover:text-blue-500 hover:dark:text-blue-500 hover:bg-primary-500/10':
                  watch('reference') === 'auto',
              },
            )}
            type="button"
            aria-label="Add"
          >
            {watch('reference') === 'auto' ? (
              <PlusIcon size={18} />
            ) : (
              <CloseIcon size={18} />
            )}
          </button>
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreatePhysicalCustomerOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update PhysicalCustomer"
          >
            Criar Cliente Físico
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreatePhysicalCustomer = forwardRef(CreatePhysicalCustomerRef);
