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
  QueryMode,
  useGetAllVehiclesComboQuery,
  useCreateMaintenanceMutation,
  useGetAllTypeOfMaintenanceComboQuery,
  useGetAllMaintenanceCompanyComboQuery,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from 'components/atoms/Button';
import { ComboBox } from 'components/molecules/Combobox';

import { createMaintenanceSchema } from './schema';
import {
  type CreateMaintenanceProps,
  type CreateMaintenanceInputProps,
  type CreateMaintenanceOutputProps,
} from './types';

const CreateMaintenanceRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateMaintenanceProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const [
    isLoadingSearchTypeOfMaintenance,
    setIsLoadingSearchTypeOfMaintenance,
  ] = useState(false);
  const [isLoadingSearchVehicle, setIsLoadingSearchVehicle] = useState(false);
  const [
    isLoadingSearchMaintenanceCompany,
    setIsLoadingSearchMaintenanceCompany,
  ] = useState(false);

  const [searchMaintenanceCompany, setSearchMaintenanceCompany] = useState('');
  const [searchTypeOfMaintenance, setSearchTypeOfMaintenance] = useState('');
  const [searchVehicle, setSearchVehicle] = useState('');

  const router = useRouter();

  const [createMaintenance] = useCreateMaintenanceMutation();

  const { data: dataTypeOfMaintenances, refetch: refetchTypeOfMaintenances } =
    useGetAllTypeOfMaintenanceComboQuery();

  const { data: dataVehicles, refetch: refetchVehicles } =
    useGetAllVehiclesComboQuery();

  const {
    data: dataMaintenanceCompanies,
    refetch: refetchMaintenanceCompanies,
  } = useGetAllMaintenanceCompanyComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateMaintenanceInputProps>({
    resolver: zodResolver(createMaintenanceSchema),
    defaultValues: {
      type: { id: '', description: '' },
      vehicle: { id: '', description: '' },
      maintenanceCompany: { id: '', description: '' },
    },
  });

  const handleSearchTypeOfMaintenance = async () => {
    setIsLoadingSearchTypeOfMaintenance(true);

    try {
      await refetchTypeOfMaintenances({
        where: {
          OR: [
            {
              typeMaintenance: {
                mode: QueryMode.Insensitive,
                contains: searchTypeOfMaintenance,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Tipos de Manutenção!');
    } finally {
      setIsLoadingSearchTypeOfMaintenance(false);
    }
  };

  const handleSearchVehicle = async () => {
    setIsLoadingSearchVehicle(true);

    try {
      await refetchVehicles({
        where: {
          OR: [
            {
              plate: {
                contains: searchVehicle,
                mode: QueryMode.Insensitive,
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Veiculos!');
    } finally {
      setIsLoadingSearchVehicle(false);
    }
  };

  const handleSearchMaintenanceCompany = async () => {
    setIsLoadingSearchMaintenanceCompany(true);

    try {
      await refetchMaintenanceCompanies({
        where: {
          OR: [
            {
              LegalPerson: {
                cnpj: {
                  mode: QueryMode.Insensitive,
                  contains: searchMaintenanceCompany,
                },
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Empresas de Manutenção!');
    } finally {
      setIsLoadingSearchMaintenanceCompany(false);
    }
  };

  const handleCreate = async (data: CreateMaintenanceOutputProps) => {
    setIsLoading(true);

    try {
      const maintenance = await createMaintenance({
        variables: {
          data: {
            vehicle_id: data.vehicle.id,
            type_of_maintenance_id: data.type.id,
            maintenance_company_id: data.maintenanceCompany.id,
          },
        },
      });

      toast.success('Manutenção criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/maintenances/${maintenance.data?.createMaintenance.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Manutenção!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Manutenção!');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTypeOfMaintenance !== '') {
        handleSearchTypeOfMaintenance();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchTypeOfMaintenance]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchVehicle !== '') {
        handleSearchVehicle();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchVehicle]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchMaintenanceCompany !== '') {
        handleSearchMaintenanceCompany();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchMaintenanceCompany]);

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
              <ComboBox
                values={dataTypeOfMaintenances?.getAllTypeOfMaintenance?.map(
                  item => ({
                    id: item.id,
                    description: `${item.typeMaintenance}`,
                  }),
                )}
                value={value}
                label="Tipo de Manuteção"
                isInvalid={!!errors.type?.id}
                search={searchTypeOfMaintenance}
                setValue={item => onChange(item)}
                setSearch={setSearchTypeOfMaintenance}
                errorMessage={errors.type?.id?.message}
                placeholder="Selecione a Tipo de Manuteção"
                isLoading={isLoadingSearchTypeOfMaintenance}
                className="bg-transparent dark:bg-transparent"
                emptyMessage="Tipo de Manuteção não encontrado"
                placeholderCommand="Pesquise a Tipo de Manuteção..."
              />
            )}
            name="type"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataVehicles?.getAllVehicles?.map(item => ({
                  id: item.id,
                  description: `${item.VehicleModel.name} - ${item.plate}`,
                }))}
                value={value}
                label="Veiculo"
                search={searchVehicle}
                setSearch={setSearchVehicle}
                isInvalid={!!errors.vehicle?.id}
                setValue={item => onChange(item)}
                placeholder="Selecione o Veiculo"
                isLoading={isLoadingSearchVehicle}
                emptyMessage="Veiculo não encontrado"
                placeholderCommand="Pesquise o Veiculo..."
                errorMessage={errors?.vehicle?.id?.message}
                className="bg-transparent dark:bg-transparent"
              />
            )}
            name="vehicle"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataMaintenanceCompanies?.getAllMaintenanceCompany?.map(
                  item => ({
                    id: item.id,
                    description: `${item.LegalPerson.cnpj}`,
                  }),
                )}
                value={value}
                label="Empresa de Manutenção"
                search={searchMaintenanceCompany}
                setValue={item => onChange(item)}
                setSearch={setSearchMaintenanceCompany}
                isInvalid={!!errors.maintenanceCompany?.id}
                isLoading={isLoadingSearchMaintenanceCompany}
                className="bg-transparent dark:bg-transparent"
                placeholder="Selecione o Empresa de Manutenção"
                emptyMessage="Empresa de Manutenção não encontrado"
                errorMessage={errors?.maintenanceCompany?.id?.message}
                placeholderCommand="Pesquise o Empresa de Manutenção..."
              />
            )}
            control={control}
            name="maintenanceCompany"
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateMaintenanceOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update Maintenance"
          >
            Criar Manutenção
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateMaintenance = forwardRef(CreateMaintenanceRef);
