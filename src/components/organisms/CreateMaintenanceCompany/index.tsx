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
  useGetAllLegalPersonComboQuery,
  useCreateMaintenanceCompanyMutation,
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

import { createMaintenanceCompanySchema } from './schema';
import {
  type CreateMaintenanceCompanyProps,
  type CreateMaintenanceCompanyInputProps,
  type CreateMaintenanceCompanyOutputProps,
} from './types';

const CreateMaintenanceCompanyRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateMaintenanceCompanyProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchLegalPerson, setIsLoadingSearchLegalPerson] =
    useState(false);

  const [searchLegalPerson, setSearchLegalPerson] = useState('');

  const router = useRouter();

  const [createMaintenanceCompany] = useCreateMaintenanceCompanyMutation();

  const { data: dataLegalPersons, refetch: refetchLegalPersons } =
    useGetAllLegalPersonComboQuery();

  const {
    watch,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateMaintenanceCompanyInputProps>({
    resolver: zodResolver(createMaintenanceCompanySchema),
    defaultValues: {
      reference: 'auto',
      specialty_maintenance: '',
      legalPerson: { id: '', description: '' },
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

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchLegalPerson !== '') {
        handleSearchLegalPerson();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchLegalPerson]);

  const handleCreate = async (data: CreateMaintenanceCompanyOutputProps) => {
    setIsLoading(true);

    try {
      const MaintenanceCompany = await createMaintenanceCompany({
        variables: {
          maintenancecompanyInput: {
            ...(watch('reference') === 'auto' && {
              legal_person_id: data.legalPerson.id,
            }),
            ...(watch('reference') === 'manual' && {
              LegalPerson: data.legalPersonManual,
            }),
            specialty_maintenance: data.specialty_maintenance,
          },
        },
      });

      toast.success('Empresa criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/maintenance-companies/${MaintenanceCompany.data?.createMaintenanceCompany.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Empresa!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Empresa!');
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
                value={value}
                onChange={onChange}
                aria-label="Specialty Maintenance"
                label="Manutenção Especializada Em"
                placeholder="manutenção especializada"
                isInvalid={!!errors.specialty_maintenance?.message}
                errorMessage={errors.specialty_maintenance?.message}
                required
                isFullWidth
              />
            )}
            control={control}
            name="specialty_maintenance"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataLegalPersons?.getAllLegalPerson?.map(item => ({
                  id: item.id,
                  description: `${item.cnpj} - ${item.fantasy_name}`,
                }))}
                value={value}
                label="Pessoa Jurídica"
                search={searchLegalPerson}
                setSearch={setSearchLegalPerson}
                setValue={item => onChange(item)}
                isInvalid={!!errors.legalPerson?.id}
                isLoading={isLoadingSearchLegalPerson}
                placeholder="Selecione a Pessoa Jurídica"
                isDisable={watch('reference') === 'manual'}
                emptyMessage="Pessoa Jurídica não encontrado"
                errorMessage={errors.legalPerson?.id?.message}
                className="bg-transparent dark:bg-transparent"
                placeholderCommand="Pesquise a Pessoa Jurídica..."
              />
            )}
            control={control}
            name="legalPerson"
          />
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Separator className="h-[1px] bg-gray-300 transition-all dark:bg-shark-950" />

          <span className="text-sm font-medium text-gray-700 transition-all dark:text-dark-300">
            Não possui nenhuma Pessoa Jurídica? Crie abaixo
          </span>

          {watch('reference') === 'manual' && (
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
              const data = values as CreateMaintenanceCompanyOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update MaintenanceCompany"
          >
            Criar Empresa
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateMaintenanceCompany = forwardRef(CreateMaintenanceCompanyRef);
