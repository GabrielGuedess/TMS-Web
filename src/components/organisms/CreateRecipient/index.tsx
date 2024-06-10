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
  useCreateRecipientMutation,
  useGetAllLegalPersonComboQuery,
  useGetAllNaturalPersonComboQuery,
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

import { createRecipientSchema } from './schema';
import {
  type CreateRecipientProps,
  type CreateRecipientInputProps,
  type CreateRecipientOutputProps,
} from './types';

const CreateRecipientRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateRecipientProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchNaturalPerson, setIsLoadingSearchNaturalPerson] =
    useState(false);
  const [isLoadingSearchLegalPerson, setIsLoadingSearchLegalPerson] =
    useState(false);

  const [searchLegalPerson, setSearchLegalPerson] = useState('');
  const [searchNaturalPerson, setSearchNaturalPerson] = useState('');

  const router = useRouter();

  const [createRecipient] = useCreateRecipientMutation();

  const { data: dataNaturalPersons, refetch: refetchNaturalPersons } =
    useGetAllNaturalPersonComboQuery();
  const { data: dataLegalPersons, refetch: refetchLegalPersons } =
    useGetAllLegalPersonComboQuery();

  const {
    watch,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRecipientInputProps>({
    resolver: zodResolver(createRecipientSchema),
    defaultValues: {
      type: 'Física',
      reference: 'auto',
      legalPerson: {
        id: '',
        description: '',
      },
      naturalPerson: {
        id: '',
        description: '',
      },
    },
  });

  const handleSearchLegalPerson = async () => {
    setIsLoadingSearchLegalPerson(true);

    try {
      await refetchLegalPersons({
        where: {
          OR: [
            {
              cnpj: {
                contains: searchLegalPerson,
                mode: QueryMode.Insensitive,
              },
            },
            {
              fantasy_name: {
                contains: searchLegalPerson,
                mode: QueryMode.Insensitive,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Pessoas Jurídicas!');
    } finally {
      setIsLoadingSearchLegalPerson(false);
    }
  };

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
            {
              name: {
                mode: QueryMode.Insensitive,
                contains: searchNaturalPerson,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Pessoa Física!');
    } finally {
      setIsLoadingSearchNaturalPerson(false);
    }
  };

  const handleCreate = async (data: CreateRecipientOutputProps) => {
    setIsLoading(true);

    try {
      const Recipient = await createRecipient({
        variables: {
          recipient: {
            ...(data.type === 'Física' &&
              data.reference === 'manual' && {
                NaturalPerson: data.naturalPersonManual,
              }),
            ...(data.type === 'Jurídica' &&
              data.reference === 'manual' && {
                LegalPerson: data.legalPersonManual,
              }),
            ...(data.type === 'Física' &&
              data.reference === 'auto' && {
                natural_person_id: data.naturalPerson.id,
              }),
            ...(data.type === 'Jurídica' &&
              data.reference === 'auto' && {
                legal_person_id: data.legalPerson.id,
              }),
          },
        },
      });

      toast.success('Remetente criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/recipients/${Recipient.data?.createRecipient.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Remetente!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Remetente!');
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

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchLegalPerson !== '') {
        handleSearchLegalPerson();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchLegalPerson]);

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
              <Select
                value={value}
                onValueChange={onChange}
                label="Física ou Jurídica?"
                values={['Física', 'Jurídica']}
                className="p-3 dark:bg-smoke-950"
                placeholder="Empresa ou Jurídica?"
                isInvalid={!!errors.type?.message}
                errorMessage={errors.type?.message}
              />
            )}
            name="type"
            control={control}
          />

          {watch('type') === 'Física' ? (
            <Controller
              render={({ field: { value, onChange } }) => (
                <ComboBox
                  values={dataNaturalPersons?.getAllNaturalPerson?.map(
                    item => ({
                      id: item.id,
                      description: `${item.cpf} - ${item.name}`,
                    }),
                  )}
                  value={value}
                  label="Pessoa Física"
                  search={searchNaturalPerson}
                  setValue={item => onChange(item)}
                  setSearch={setSearchNaturalPerson}
                  isInvalid={!!errors.naturalPerson?.id}
                  placeholder="Selecione a Pessoa Física"
                  isLoading={isLoadingSearchNaturalPerson}
                  isDisable={watch('reference') === 'manual'}
                  emptyMessage="Pessoa Física não encontrado"
                  className="bg-transparent dark:bg-transparent"
                  errorMessage={errors.naturalPerson?.id?.message}
                  placeholderCommand="Pesquise a Pessoa Física..."
                />
              )}
              control={control}
              name="naturalPerson"
            />
          ) : (
            <Controller
              render={({ field: { value, onChange } }) => (
                <ComboBox
                  values={dataLegalPersons?.getAllLegalPerson?.map(item => ({
                    id: item.id,
                    description: `${item.cnpj} - ${item.fantasy_name}`,
                  }))}
                  value={value}
                  label="Empresa"
                  search={searchLegalPerson}
                  setSearch={setSearchLegalPerson}
                  setValue={item => onChange(item)}
                  placeholder="Selecione a Empresa"
                  isInvalid={!!errors.legalPerson?.id}
                  emptyMessage="Empresa não encontrado"
                  isLoading={isLoadingSearchLegalPerson}
                  placeholderCommand="Pesquise a Empresa..."
                  isDisable={watch('reference') === 'manual'}
                  errorMessage={errors.legalPerson?.id?.message}
                  className="bg-transparent dark:bg-transparent"
                />
              )}
              control={control}
              name="legalPerson"
            />
          )}
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Separator className="h-[1px] bg-gray-300 transition-all dark:bg-shark-950" />

          <span className="text-sm font-medium text-gray-700 transition-all dark:text-dark-300">
            Não possui nenhuma{' '}
            {watch('type') === 'Física' ? 'Pessoa Física' : 'Empresa'}? Crie
            abaixo
          </span>

          {watch('reference') === 'manual' && watch('type') === 'Física' && (
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

          {watch('reference') === 'manual' && watch('type') === 'Jurídica' && (
            <div className="grid grid-cols-auto-fill gap-x-4 gap-y-10">
              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    isInvalid={
                      !!errors.legalPersonManual?.fantasy_name?.message
                    }
                    errorMessage={
                      errors.legalPersonManual?.fantasy_name?.message
                    }
                    value={value}
                    onChange={onChange}
                    label="Nome Fantasia"
                    aria-label="Nome Fantasia"
                    placeholder="Nome Fantasia"
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="legalPersonManual.fantasy_name"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    isInvalid={
                      !!errors.legalPersonManual?.corporate_name?.message
                    }
                    errorMessage={
                      errors.legalPersonManual?.corporate_name?.message
                    }
                    value={value}
                    onChange={onChange}
                    label="Nome Corporativo"
                    aria-label="Nome Corporativo"
                    placeholder="Nome Corporativo"
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="legalPersonManual.corporate_name"
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
                    isInvalid={!!errors.legalPersonManual?.email?.message}
                    errorMessage={errors.legalPersonManual?.email?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="legalPersonManual.email"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    errorMessage={
                      errors.legalPersonManual?.first_phone?.message
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
                    isInvalid={!!errors.legalPersonManual?.first_phone?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="legalPersonManual.first_phone"
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
                      '/',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                    ]}
                    label="CNPJ"
                    value={value}
                    aria-label="CNPJ"
                    placeholder="CNPJ"
                    onChange={onChange}
                    isInvalid={!!errors.legalPersonManual?.cnpj?.message}
                    errorMessage={errors.legalPersonManual?.cnpj?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="legalPersonManual.cnpj"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    label="CEP"
                    value={value}
                    aria-label="CEP"
                    placeholder="CEP"
                    onChange={onChange}
                    isInvalid={!!errors.legalPersonManual?.cep?.message}
                    errorMessage={errors.legalPersonManual?.cep?.message}
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="legalPersonManual.cep"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    value={value}
                    label="Cidade"
                    aria-label="Cidade"
                    onChange={onChange}
                    placeholder="Cidade"
                    isInvalid={!!errors.legalPersonManual?.city?.message}
                    errorMessage={errors.legalPersonManual?.city?.message}
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="legalPersonManual.city"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    isInvalid={
                      !!errors.legalPersonManual?.neighborhood?.message
                    }
                    errorMessage={
                      errors.legalPersonManual?.neighborhood?.message
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
                name="legalPersonManual.neighborhood"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    isInvalid={
                      !!errors.legalPersonManual?.public_place?.message
                    }
                    errorMessage={
                      errors.legalPersonManual?.public_place?.message
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
                name="legalPersonManual.public_place"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    isInvalid={
                      !!errors.legalPersonManual?.address_number?.message
                    }
                    errorMessage={
                      errors.legalPersonManual?.address_number?.message
                    }
                    value={value}
                    label="Numero"
                    aria-label="Numero"
                    onChange={onChange}
                    placeholder="Numero"
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="legalPersonManual.address_number"
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
                    isInvalid={!!errors.legalPersonManual?.uf?.message}
                    errorMessage={errors.legalPersonManual?.uf?.message}
                    hasHeight
                  />
                )}
                control={control}
                name="legalPersonManual.uf"
              />

              <Controller
                render={({ field: { value, onChange } }) => (
                  <Input
                    isInvalid={
                      !!errors.legalPersonManual?.state_registration?.message
                    }
                    errorMessage={
                      errors.legalPersonManual?.state_registration?.message
                    }
                    value={value}
                    onChange={onChange}
                    label="Registrado no Estado"
                    aria-label="Registrado no Estado"
                    placeholder="Registrado no Estado"
                    required
                    isFullWidth
                  />
                )}
                control={control}
                name="legalPersonManual.state_registration"
              />
            </div>
          )}

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
                <PlusIcon />
              ) : (
                <CloseIcon size={18} />
              )}
            </button>
          </div>
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateRecipientOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            aria-label="Update Recipient"
            className="min-w-[12.404rem]"
          >
            Criar Remetente
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateRecipient = forwardRef(CreateRecipientRef);
