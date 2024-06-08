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
  useCreateOwnDriverMutation,
  useGetAllNaturalPersonComboQuery,
} from 'graphql/generated';

import dayjs from 'dayjs';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { Select } from 'components/molecules/Select';
import { ComboBox } from 'components/molecules/Combobox';
import { DatePicker } from 'components/molecules/DatePicker';

import { onlyNumbers } from 'functions/onlyNumbers';

import { createOwnDriverSchema } from './schema';
import {
  type CreateOwnDriverProps,
  type CreateOwnDriverInputProps,
  type CreateOwnDriverOutputProps,
} from './types';

const CreateOwnDriverRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateOwnDriverProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearchNaturalPerson, setIsLoadingSearchNaturalPerson] =
    useState(false);

  const [searchNaturalPerson, setSearchNaturalPerson] = useState('');

  const router = useRouter();

  const [createOwnDriver] = useCreateOwnDriverMutation();

  const { data: dataNaturalPersons, refetch: refetchNaturalPersons } =
    useGetAllNaturalPersonComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOwnDriverInputProps>({
    resolver: zodResolver(createOwnDriverSchema),
    defaultValues: {
      cnh: '',
      cnh_category: '',
      course_mopp: 'Não',
      company_vehicle: 'Não',
      cnh_expiration: dayjs().toDate(),
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

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchNaturalPerson !== '') {
        handleSearchNaturalPerson();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchNaturalPerson]);

  const handleCreate = async (data: CreateOwnDriverOutputProps) => {
    setIsLoading(true);

    try {
      const ownDriver = await createOwnDriver({
        variables: {
          ownDriver: {
            cnh: onlyNumbers(data.cnh),
            course_mopp: data.course_mopp,
            cnh_category: data.cnh_category,
            cnh_expiration: data.cnh_expiration,
            company_vehicle: data.company_vehicle,
            natural_person_id: data.naturalPerson.id,
          },
        },
      });

      toast.success('Motorista Próprio criado com sucesso!');

      router.push(
        `/dashboard/own-drivers/${ownDriver.data?.createOwnDriver.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Motorista Próprio!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Motorista Próprio!');
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
                mask={[
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                ]}
                label="CNH"
                value={value}
                aria-label="CNH"
                placeholder="CNH"
                onChange={onChange}
                isInvalid={!!errors.cnh?.message}
                errorMessage={errors.cnh?.message}
                required
                isFullWidth
              />
            )}
            name="cnh"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Select
                value={value}
                placeholder="Categoria"
                label="Categoria da CNH"
                onValueChange={onChange}
                className="p-3 dark:bg-smoke-950"
                isInvalid={!!errors.cnh_category?.message}
                errorMessage={errors.cnh_category?.message}
                values={['A', 'B', 'C', 'D', 'E', 'A/B', 'A/C', 'A/D', 'A/E']}
              />
            )}
            control={control}
            name="cnh_category"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <DatePicker
                date={value as Date}
                label="Expiração de CNH"
                setDate={item => onChange(item as Date)}
                isInvalid={!!errors.cnh_expiration?.message}
                errorMessage={errors.cnh_expiration?.message}
              />
            )}
            control={control}
            name="cnh_expiration"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Select
                value={value}
                placeholder="Empresa?"
                values={['Sim', 'Não']}
                onValueChange={onChange}
                label="Veiculo da Empresa?"
                className="p-3 dark:bg-smoke-950"
                isInvalid={!!errors.company_vehicle?.message}
                errorMessage={errors.company_vehicle?.message}
              />
            )}
            control={control}
            name="company_vehicle"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Select
                value={value}
                label="Curso MOOP"
                values={['Sim', 'Não']}
                placeholder="Curso MOOP"
                onValueChange={onChange}
                className="p-3 dark:bg-smoke-950"
                isInvalid={!!errors.course_mopp?.message}
                errorMessage={errors.course_mopp?.message}
              />
            )}
            control={control}
            name="course_mopp"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataNaturalPersons?.getAllNaturalPerson?.map(item => ({
                  id: item.id,
                  description: `${item.cpf} - ${item.name}`,
                }))}
                value={value}
                label="Pessoa Física"
                search={searchNaturalPerson}
                setValue={item => onChange(item)}
                setSearch={setSearchNaturalPerson}
                isInvalid={!!errors.naturalPerson?.id}
                placeholder="Selecione a Pessoa Física"
                isLoading={isLoadingSearchNaturalPerson}
                emptyMessage="Pessoa Física não encontrado"
                className="bg-transparent dark:bg-transparent"
                errorMessage={errors.naturalPerson?.id?.message}
                placeholderCommand="Pesquise a Pessoa Física..."
              />
            )}
            control={control}
            name="naturalPerson"
          />
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateOwnDriverOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            aria-label="Update OwnDriver"
            className="min-w-[12.404rem]"
          >
            Criar Motorista Próprio
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateOwnDriver = forwardRef(CreateOwnDriverRef);
