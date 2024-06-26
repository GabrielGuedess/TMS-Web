'use client';

import { useForm, Controller } from 'react-hook-form';
import {
  useState,
  useEffect,
  forwardRef,
  type ElementRef,
  type ForwardRefRenderFunction,
} from 'react';

import {
  QueryMode,
  useGetAllLegalPersonComboQuery,
  useUpdateMaintenanceCompanyMutation,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { maintenanceCompanyGeneralSchema } from './schema';
import {
  type MaintenanceCompanyGeneralProps,
  type MaintenanceCompanyGeneralInputProps,
  type MaintenanceCompanyGeneralOutputProps,
} from './types';

const MaintenanceCompanyGeneralRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  MaintenanceCompanyGeneralProps
> = ({ data, className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingSearchLegalPerson, setIsLoadingSearchLegalPerson] =
    useState(false);

  const [searchLegalPerson, setSearchLegalPerson] = useState('');

  const [updateMaintenanceCompany] = useUpdateMaintenanceCompanyMutation();

  const { data: dataLegalPersons, refetch: refetchLegalPersons } =
    useGetAllLegalPersonComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MaintenanceCompanyGeneralInputProps>({
    resolver: zodResolver(maintenanceCompanyGeneralSchema),
    defaultValues: {
      specialty_maintenance:
        data?.getMaintenanceCompanyModel?.specialty_maintenance ?? '',
      legalPerson: {
        id: data?.getMaintenanceCompanyModel?.legal_person_id,
        description: `${data?.getMaintenanceCompanyModel?.LegalPerson.cnpj} - ${data?.getMaintenanceCompanyModel?.LegalPerson?.fantasy_name}`,
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

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchLegalPerson !== '') {
        handleSearchLegalPerson();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchLegalPerson]);

  const handleCreate = async (
    newData: MaintenanceCompanyGeneralOutputProps,
  ) => {
    setIsLoading(true);

    try {
      await updateMaintenanceCompany({
        variables: {
          updateMaintenanceCompanyId: data.getMaintenanceCompanyModel.id,
          maintenancecompanyInput: {
            LegalPerson: {},
            specialty_maintenance: newData.specialty_maintenance,
          },
        },
      });

      toast.success('Marca de Veiculo atualizado com sucesso!');
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar Marca de Veiculo!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar Marca de Veiculo!');
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

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const update = values as MaintenanceCompanyGeneralOutputProps;

              handleCreate(update);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update MaintenanceCompany"
          >
            Atualizar Marca de Veiculo
          </Button>
        </div>
      </form>
    </div>
  );
};

export const MaintenanceCompanyGeneral = forwardRef(
  MaintenanceCompanyGeneralRef,
);
