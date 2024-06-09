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
  WhoIsPay,
  QueryMode,
  FormPayment,
  TypeMerchandise,
  KindOfServicerOrder,
  useGetAllSenderComboQuery,
  useGetAllRecipientComboQuery,
  useCreateLegalClientQuoteTableMutation,
} from 'graphql/generated';

import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { ApolloError } from '@apollo/client';
import { Separator } from '@radix-ui/react-select';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from 'components/atoms/Input';
import { Button } from 'components/atoms/Button';
import { Select } from 'components/molecules/Select';
import { ComboBox } from 'components/molecules/Combobox';

import { createLegalClientQuoteTableSchema } from './schema';
import {
  type CreateLegalClientQuoteTableProps,
  type CreateLegalClientQuoteTableInputProps,
  type CreateLegalClientQuoteTableOutputProps,
} from './types';

const CreateLegalClientQuoteTableRef: ForwardRefRenderFunction<
  ElementRef<'div'>,
  CreateLegalClientQuoteTableProps
> = ({ className, ...props }, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearchSender, setIsLoadingSearchSender] = useState(false);
  const [isLoadingSearchRecipient, setIsLoadingSearchRecipient] =
    useState(false);

  const [searchSender, setSearchSender] = useState('');
  const [searchRecipient, setSearchRecipient] = useState('');

  const router = useRouter();

  const [createLegalClientQuoteTable] =
    useCreateLegalClientQuoteTableMutation();

  const { data: dataSenders, refetch: refetchSenders } =
    useGetAllSenderComboQuery();
  const { data: dataRecipients, refetch: refetchRecipients } =
    useGetAllRecipientComboQuery();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLegalClientQuoteTableInputProps>({
    resolver: zodResolver(createLegalClientQuoteTableSchema),
    defaultValues: {
      mass: 0,
      amount: 0,
      volume: 0,
      nf_value: 0,
      nf_serie: '',
      nf_number: '',
      description: '',
      who_pays: WhoIsPay.Sender,
      sender: { id: '', description: '' },
      formPayment: FormPayment.PaymentByPix,
      recipient: { id: '', description: '' },
      typeMerchandise: TypeMerchandise.ConsumerGoods,
      kindService: KindOfServicerOrder.HazardousCargo,
      adressOrigin: {
        city: '',
        street: '',
        postalCod: '',
        uf: UfEnum.Sp,
        complement: '',
        neighborhood: '',
        address_number: '',
      },
      adressDestiny: {
        city: '',
        street: '',
        postalCod: '',
        uf: UfEnum.Sp,
        complement: '',
        neighborhood: '',
        address_number: '',
      },
    },
  });

  const handleSearchSender = async () => {
    setIsLoadingSearchSender(true);

    try {
      await refetchSenders({
        where: {
          OR: [
            {
              LegalPerson: {
                cnpj: {
                  contains: searchSender,
                  mode: QueryMode.Insensitive,
                },
              },
            },
            {
              NaturalPerson: {
                cpf: {
                  contains: searchSender,
                  mode: QueryMode.Insensitive,
                },
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Pessoa Física!');
    } finally {
      setIsLoadingSearchSender(false);
    }
  };

  const handleSearchRecipient = async () => {
    setIsLoadingSearchRecipient(true);

    try {
      await refetchRecipients({
        where: {
          OR: [
            {
              LegalPerson: {
                cnpj: {
                  contains: searchRecipient,
                  mode: QueryMode.Insensitive,
                },
              },
            },
            {
              NaturalPerson: {
                cpf: {
                  contains: searchRecipient,
                  mode: QueryMode.Insensitive,
                },
              },
            },
          ],
        },
      });
    } catch {
      toast.error('Erro ao carregar os Pessoa Física!');
    } finally {
      setIsLoadingSearchRecipient(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchSender !== '') {
        handleSearchSender();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchSender]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchRecipient !== '') {
        handleSearchRecipient();
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchRecipient]);

  const handleCreate = async (data: CreateLegalClientQuoteTableOutputProps) => {
    setIsLoading(true);

    try {
      const LegalClientQuoteTable = await createLegalClientQuoteTable({
        variables: {
          legalClientQuoteTableInput: {
            mass: data.mass,
            amount: data.amount,
            volume: data.volume,
            nf_serie: data.nf_serie,
            nf_value: data.nf_value,
            who_pays: data.who_pays,
            senderId: data.sender.id,
            nf_number: data.nf_number,
            description: data.description,
            formPayment: data.formPayment,
            kindService: data.kindService,
            recipientId: data.recipient.id,
            adressOrigin: data.adressOrigin,
            adressDestiny: data.adressDestiny,
            typeMerchandise: data.typeMerchandise,
          },
        },
      });

      toast.success('Cotação criado com sucesso!');

      router.refresh();

      router.push(
        `/dashboard/own-drivers/${LegalClientQuoteTable.data?.createLegalClientQuoteTable.id}/general`,
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao criar Cotação!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao criar Cotação!');
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
                label="Massa"
                value={value}
                aria-label="Mass"
                placeholder="Massa"
                onChange={onChange}
                isInvalid={!!errors.mass?.message}
                errorMessage={errors.mass?.message}
                required
                isFullWidth
              />
            )}
            name="mass"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                label="Volume"
                aria-label="Volume"
                onChange={onChange}
                placeholder="Volume"
                isInvalid={!!errors.volume?.message}
                errorMessage={errors.volume?.message}
                required
                isFullWidth
              />
            )}
            name="volume"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                placeholder="Valor"
                onChange={onChange}
                aria-label="nf_value"
                label="Valor da Nota Fiscal"
                isInvalid={!!errors.nf_value?.message}
                errorMessage={errors.nf_value?.message}
                required
                isFullWidth
              />
            )}
            name="nf_value"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                placeholder="Serie"
                onChange={onChange}
                aria-label="nf_value"
                label="Serie da Nota Fiscal"
                isInvalid={!!errors.nf_serie?.message}
                errorMessage={errors.nf_serie?.message}
                required
                isFullWidth
              />
            )}
            name="nf_serie"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                onChange={onChange}
                placeholder="Numero"
                aria-label="nf_value"
                label="Numero da Nota Fiscal"
                isInvalid={!!errors.nf_number?.message}
                errorMessage={errors.nf_number?.message}
                required
                isFullWidth
              />
            )}
            name="nf_number"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                value={value}
                label="Descrição"
                onChange={onChange}
                placeholder="Descrição"
                aria-label="description"
                isInvalid={!!errors.description?.message}
                errorMessage={errors.description?.message}
                required
                isFullWidth
              />
            )}
            control={control}
            name="description"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Input
                label="Valor"
                value={value}
                aria-label="amount"
                placeholder="Valor"
                onChange={onChange}
                isInvalid={!!errors.amount?.message}
                errorMessage={errors.amount?.message}
                required
                isFullWidth
              />
            )}
            name="amount"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Select
                value={value}
                label="Quem Pagou"
                placeholder="Quem Pagou"
                onValueChange={onChange}
                values={Object.values(WhoIsPay)}
                className="p-3 dark:bg-smoke-950"
                isInvalid={!!errors.who_pays?.message}
                errorMessage={errors.who_pays?.message}
                hasHeight
              />
            )}
            name="who_pays"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Select
                value={value}
                onValueChange={onChange}
                label="Forma de Pagamento"
                placeholder="Forma de Pagamento"
                className="p-3 dark:bg-smoke-950"
                values={Object.values(FormPayment)}
                isInvalid={!!errors.formPayment?.message}
                errorMessage={errors.formPayment?.message}
                hasHeight
              />
            )}
            control={control}
            name="formPayment"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Select
                value={value}
                label="Tipo de Serviço"
                onValueChange={onChange}
                placeholder="Tipo de Serviço"
                className="p-3 dark:bg-smoke-950"
                isInvalid={!!errors.kindService?.message}
                errorMessage={errors.kindService?.message}
                values={Object.values(KindOfServicerOrder)}
                hasHeight
              />
            )}
            control={control}
            name="kindService"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <Select
                value={value}
                onValueChange={onChange}
                label="Tipo de Mercadoria"
                placeholder="Tipo de Mercadoria"
                className="p-3 dark:bg-smoke-950"
                values={Object.values(TypeMerchandise)}
                isInvalid={!!errors.typeMerchandise?.message}
                errorMessage={errors.typeMerchandise?.message}
                hasHeight
              />
            )}
            control={control}
            name="typeMerchandise"
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataSenders?.getAllSender?.map(item => ({
                  id: item.id,
                  description: `${item?.LegalPerson?.cnpj ?? item?.NaturalPerson?.cpf} - ${item?.LegalPerson?.fantasy_name ?? item?.NaturalPerson?.name}`,
                }))}
                value={value}
                label="Remetente"
                search={searchSender}
                setSearch={setSearchSender}
                isInvalid={!!errors.sender?.id}
                setValue={item => onChange(item)}
                isLoading={isLoadingSearchSender}
                placeholder="Selecione a Remetente"
                emptyMessage="Remetente não encontrado"
                errorMessage={errors.sender?.id?.message}
                placeholderCommand="Pesquise a Remetente..."
                className="bg-transparent dark:bg-transparent"
              />
            )}
            name="sender"
            control={control}
          />

          <Controller
            render={({ field: { value, onChange } }) => (
              <ComboBox
                values={dataRecipients?.getAllRecipient?.map(item => ({
                  id: item.id,
                  description: `${item?.LegalPerson?.cnpj ?? item?.NaturalPerson?.cpf} - ${item?.LegalPerson?.fantasy_name ?? item?.NaturalPerson?.name}`,
                }))}
                value={value}
                label="Destinatário"
                search={searchRecipient}
                setSearch={setSearchRecipient}
                setValue={item => onChange(item)}
                isInvalid={!!errors.recipient?.id}
                isLoading={isLoadingSearchRecipient}
                placeholder="Selecione a Destinatário"
                emptyMessage="Destinatário não encontrado"
                errorMessage={errors.recipient?.id?.message}
                className="bg-transparent dark:bg-transparent"
                placeholderCommand="Pesquise a Destinatário..."
              />
            )}
            name="recipient"
            control={control}
          />
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Separator className="h-[1px] bg-gray-300 transition-all dark:bg-shark-950" />

          <span className="text-sm font-medium text-gray-700 transition-all dark:text-dark-300">
            Endereço de Destino
          </span>

          <div className="grid grid-cols-auto-fill gap-x-4 gap-y-10">
            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  label="CEP"
                  value={value}
                  placeholder="CEP"
                  onChange={onChange}
                  aria-label="Postal Code"
                  isInvalid={!!errors.adressOrigin?.postalCod?.message}
                  errorMessage={errors.adressOrigin?.postalCod?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressOrigin.postalCod"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  label="Cidade"
                  aria-label="City"
                  onChange={onChange}
                  placeholder="Cidade"
                  isInvalid={!!errors.adressOrigin?.city?.message}
                  errorMessage={errors.adressOrigin?.city?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressOrigin.city"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  label="Bairro"
                  onChange={onChange}
                  placeholder="Bairro"
                  aria-label="Neighborhood"
                  isInvalid={!!errors.adressOrigin?.neighborhood?.message}
                  errorMessage={errors.adressOrigin?.neighborhood?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressOrigin.neighborhood"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  label="Rua"
                  value={value}
                  placeholder="Rua"
                  aria-label="Street"
                  onChange={onChange}
                  isInvalid={!!errors.adressOrigin?.street?.message}
                  errorMessage={errors.adressOrigin?.street?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressOrigin.street"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  label="Numero"
                  aria-label="Number"
                  onChange={onChange}
                  placeholder="Numero"
                  isInvalid={!!errors.adressOrigin?.address_number?.message}
                  errorMessage={errors.adressOrigin?.address_number?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressOrigin.address_number"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Select
                  value={value}
                  label="Estado"
                  aria-label="state"
                  placeholder="Estado"
                  onValueChange={onChange}
                  values={Object.values(UfEnum)}
                  className="p-3 dark:bg-smoke-950"
                  isInvalid={!!errors?.adressOrigin?.uf?.message}
                  errorMessage={errors?.adressOrigin?.uf?.message}
                  hasHeight
                />
              )}
              control={control}
              name="adressOrigin.uf"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  label="Complemento"
                  onChange={onChange}
                  aria-label="Complement"
                  placeholder="Complemento"
                  isInvalid={!!errors.adressOrigin?.complement?.message}
                  errorMessage={errors.adressOrigin?.complement?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressOrigin.complement"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <Separator className="h-[1px] bg-gray-300 transition-all dark:bg-shark-950" />

          <span className="text-sm font-medium text-gray-700 transition-all dark:text-dark-300">
            Endereço de Destino
          </span>

          <div className="grid grid-cols-auto-fill gap-x-4 gap-y-10">
            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  label="CEP"
                  value={value}
                  placeholder="CEP"
                  onChange={onChange}
                  aria-label="Postal Code"
                  isInvalid={!!errors.adressDestiny?.postalCod?.message}
                  errorMessage={errors.adressDestiny?.postalCod?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressDestiny.postalCod"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  label="Cidade"
                  aria-label="City"
                  onChange={onChange}
                  placeholder="Cidade"
                  isInvalid={!!errors.adressDestiny?.city?.message}
                  errorMessage={errors.adressDestiny?.city?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressDestiny.city"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  label="Bairro"
                  onChange={onChange}
                  placeholder="Bairro"
                  aria-label="Neighborhood"
                  isInvalid={!!errors.adressDestiny?.neighborhood?.message}
                  errorMessage={errors.adressDestiny?.neighborhood?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressDestiny.neighborhood"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  label="Rua"
                  value={value}
                  placeholder="Rua"
                  aria-label="Street"
                  onChange={onChange}
                  isInvalid={!!errors.adressDestiny?.street?.message}
                  errorMessage={errors.adressDestiny?.street?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressDestiny.street"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  label="Numero"
                  aria-label="Number"
                  onChange={onChange}
                  placeholder="Numero"
                  isInvalid={!!errors.adressDestiny?.address_number?.message}
                  errorMessage={errors.adressDestiny?.address_number?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressDestiny.address_number"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Select
                  value={value}
                  label="Estado"
                  aria-label="state"
                  placeholder="Estado"
                  onValueChange={onChange}
                  values={Object.values(UfEnum)}
                  className="p-3 dark:bg-smoke-950"
                  isInvalid={!!errors?.adressDestiny?.uf?.message}
                  errorMessage={errors?.adressDestiny?.uf?.message}
                  hasHeight
                />
              )}
              control={control}
              name="adressDestiny.uf"
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <Input
                  value={value}
                  label="Complemento"
                  onChange={onChange}
                  aria-label="Complement"
                  placeholder="Complemento"
                  isInvalid={!!errors.adressDestiny?.complement?.message}
                  errorMessage={errors.adressDestiny?.complement?.message}
                  required
                  isFullWidth
                />
              )}
              control={control}
              name="adressDestiny.complement"
            />
          </div>
        </div>

        <div className="flex w-full justify-center sm:justify-end">
          <Button
            onClick={handleSubmit((values: unknown) => {
              const data = values as CreateLegalClientQuoteTableOutputProps;

              handleCreate(data);
            })}
            type="button"
            color="success"
            variant="label"
            isLoading={isLoading}
            isDisabled={isLoading}
            className="min-w-[12.404rem]"
            aria-label="Update LegalClientQuoteTable"
          >
            Criar Cotação
          </Button>
        </div>
      </form>
    </div>
  );
};

export const CreateLegalClientQuoteTable = forwardRef(
  CreateLegalClientQuoteTableRef,
);
