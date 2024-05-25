'use client';

import 'dayjs/locale/pt-br';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { useMemo, useState, useEffect } from 'react';

import {
  useGetAllVehicleBrandQuery,
  type VehicleBrandWhereInput,
  type VehicleBrandUpdateManyInput,
  useDeleteManyVehicleBrandsMutation,
  useUpdateManyVehicleBrandsMutation,
} from 'graphql/generated';

import clsx from 'clsx';
import dayjs from 'dayjs';
import { toast } from 'sonner';
import { AgGridReact } from 'ag-grid-react';
import { ApolloError } from '@apollo/client';
import * as Dialog from '@radix-ui/react-dialog';
import * as Popover from '@radix-ui/react-popover';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import {
  type ColDef,
  type RowClassRules,
  type ITextFilterParams,
  type ValueSetterParams,
  type FilterChangedEvent,
  type SelectionChangedEvent,
} from 'ag-grid-community';

import { Button } from 'components/atoms/Button';
import { Select } from 'components/molecules/Select';
import { PreLoader } from 'components/atoms/PreLoader';
import { CloseIcon } from 'components/atoms/CloseIcon';
import { TrashIcon } from 'components/atoms/TrashIcon';
import { CustomError } from 'components/molecules/CustomError';
import { PageIndicator } from 'components/molecules/PageIndicator';
import { CloseCircleIcon } from 'components/atoms/CloseCircleIcon';
import { MinusCircleIcon } from 'components/atoms/MinusCircleIcon';
import { ProfileSearchIcon } from 'components/atoms/ProfileSearchIcon';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

import {
  type FilterProps,
  type EditRowProps,
  type VehicleBrandProps,
  type VehicleBrandKeyProps,
  type DataTableVehicleBrandsProps,
} from './types';

dayjs.locale('pt-br');
dayjs.extend(LocalizedFormat);

export const DataTableVehicleBrands = ({
  ...props
}: DataTableVehicleBrandsProps) => {
  const [isFetchingVehicleBrands, setIsFetchingVehicleBrands] = useState(false);
  const [isFetchingUpdateVehicleBrands, setIsFetchingUpdateVehicleBrands] =
    useState(false);
  const [isFetchingDeleteVehicleBrands, setIsFetchingDeleteVehicleBrands] =
    useState(false);

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);

  const [rowData, setRowData] = useState<VehicleBrandProps[]>([]);

  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [isOpenDiscardChanges, setIsOpenDiscardChanges] = useState(false);

  const [selectedRows, setSelectedRows] = useState<VehicleBrandProps[]>([]);
  const [editedRows, setEditedRows] = useState<EditRowProps>({
    newData: [],
    oldData: [],
  } as EditRowProps);

  const [update] = useUpdateManyVehicleBrandsMutation();
  const [deleteVehicleBrands] = useDeleteManyVehicleBrandsMutation();

  const {
    refetch,
    fetchMore,
    loading: isLoading,
    data: dataVehicleBrands,
  } = useGetAllVehicleBrandQuery();

  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: { search: '' },
  });

  const filterParametersText: ITextFilterParams = {
    filterPlaceholder: 'Filtro',
    filterOptions: [
      {
        displayName: 'Contém',
        displayKey: 'contains',
        predicate: ([filterValue]: string[], cellValue: string) =>
          cellValue == null || cellValue.includes(filterValue),
      },
      {
        displayKey: 'notContains',
        displayName: 'Não contém',
        predicate: ([filterValue]: string[], cellValue: string) =>
          cellValue == null || !cellValue.includes(filterValue),
      },
      {
        displayKey: 'equals',
        displayName: 'É Igual',
        predicate: ([filterValue]: string[], cellValue: string) =>
          cellValue == null || cellValue === filterValue,
      },
      {
        displayKey: 'notEquals',
        displayName: 'Não é igual',
        predicate: ([filterValue]: string[], cellValue: string) =>
          cellValue == null || cellValue !== filterValue,
      },
      {
        displayKey: 'startsWith',
        displayName: 'Começa com',
        predicate: ([filterValue]: string[], cellValue: string) =>
          cellValue == null || cellValue.startsWith(filterValue),
      },
      {
        displayKey: 'endsWith',
        displayName: 'Termina com',
        predicate: ([filterValue]: string[], cellValue: string) =>
          cellValue == null || cellValue.endsWith(filterValue),
      },
    ],
  };

  const valueSetter = (parameters: ValueSetterParams<VehicleBrandProps>) => {
    const { id } = parameters.data;
    const column = parameters.column.getId() as VehicleBrandKeyProps;

    if (parameters.data[column] !== parameters.newValue) {
      const newData: VehicleBrandProps = {
        ...parameters.data,
        [column]: parameters.newValue as string,
      };

      const currentEdit = editedRows.newData?.find(item => item.id === id);

      const newEditData: OptionalWithIdProps<VehicleBrandUpdateManyInput> = {
        id,
        ...(currentEdit && { ...currentEdit }),
        [column]: parameters.newValue as string,
      };

      const newRow = rowData.filter(item => item.id !== id);
      const newEdit = editedRows.newData?.filter(item => item.id !== id) ?? [];

      setRowData([newData, ...newRow]);
      setEditedRows({
        newData: [newEditData, ...newEdit],
        oldData: rowData.filter(item => item.id === id),
      });
    }

    return true;
  };

  const colDefs = useMemo<ColDef<VehicleBrandProps>[]>(
    () => [
      {
        field: 'id',
        filter: true,
        headerName: 'ID',
        filterParams: filterParametersText,
      },
      {
        filter: true,
        field: 'name',
        editable: true,
        headerName: 'Nome',
        filterParams: filterParametersText,
      },
      {
        filter: true,
        editable: true,
        field: 'created_by',
        headerName: 'Criado por',
        filterParams: filterParametersText,
      },
      {
        filter: true,
        editable: true,
        field: 'updated_by',
        headerName: 'Atualizado por',
        filterParams: filterParametersText,
      },
    ],
    [rowData],
  );

  const handleSearch = async ({ search }: { search: string }) => {
    setIsFetchingVehicleBrands(true);
    setSelectedRows([]);

    const { data: result } = await refetch({
      limit: pageSize,
      offset: pageSize * page,
      where: { name: { contains: search } },
    });

    setRowData(result.getAllVehicleBrand ?? []);
    setIsFetchingVehicleBrands(false);
  };

  const handleCancelAllUpdate = async () => {
    const { oldData, newData } = editedRows;

    const updatedIds = new Set(newData!.map(item => item.id));

    const newRowData = rowData.filter(row => !updatedIds.has(row.id));

    setRowData([...oldData, ...newRowData]);
    setEditedRows({ oldData: [], newData: [] });

    setIsOpenDiscardChanges(false);
  };

  const handleCancelUpdate = async (id: string) => {
    const { oldData, newData } = editedRows;

    const newRowData = rowData.filter(row => row.id !== id);

    setRowData(newRowData);
    setEditedRows({
      oldData: oldData.filter(item => item.id !== id),
      newData: newData?.filter(item => item.id !== id),
    });
  };

  const handleFetchMoreSize = async (currentSize: number) => {
    setIsFetchingVehicleBrands(true);

    await fetchMore({
      variables: {
        offset: currentSize * page,
        limit: currentSize || pageSize,
      },
      updateQuery: (previous, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previous;

        setRowData(fetchMoreResult.getAllVehicleBrand ?? []);

        return {
          ...fetchMoreResult,
          VehicleBrands: [
            ...(previous.getAllVehicleBrand ?? []),
            ...(fetchMoreResult.getAllVehicleBrand ?? []),
          ],
        };
      },
    });

    setPageSize(currentSize);
    setIsFetchingVehicleBrands(false);
  };

  const handleFetchMorePage = async (currentPage: number) => {
    setIsFetchingVehicleBrands(true);

    await fetchMore({
      variables: {
        limit: pageSize,
        offset: pageSize * currentPage,
      },
      updateQuery: (previous, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previous;

        setRowData(fetchMoreResult.getAllVehicleBrand ?? []);

        return {
          ...fetchMoreResult,
          VehicleBrands: [
            ...(previous.getAllVehicleBrand ?? []),
            ...(fetchMoreResult.getAllVehicleBrand ?? []),
          ],
        };
      },
    });

    setPage(currentPage);
    setIsFetchingVehicleBrands(false);
  };

  const handleUpdateVehicleBrands = async () => {
    setIsFetchingUpdateVehicleBrands(true);

    try {
      const { data } = await update({
        variables: {
          updateManyVehicleBrands: editedRows.newData!,
        },
      });

      const isPlural =
        data?.updateManyVehicleBrands &&
        data.updateManyVehicleBrands.length > 1;

      toast.success(
        `Marca de Veículo${isPlural ? 's' : ''} atualizado${
          isPlural ? 's' : ''
        } com sucesso!`,
      );

      setEditedRows({ oldData: [], newData: [] });
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao atualizar a Marca de Veículo!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao atualizar a Marca de Veículo!');
    } finally {
      setIsOpenUpdate(false);
      setIsFetchingUpdateVehicleBrands(false);
    }
  };

  const handleDeleteVehicleBrands = async () => {
    setIsFetchingDeleteVehicleBrands(true);

    try {
      const ids = selectedRows.map(item => item.id);

      const { data } = await deleteVehicleBrands({
        variables: { deleteManyVehicleBrands: ids },
      });

      const isPlural =
        data?.deleteManyVehicleBrands &&
        data?.deleteManyVehicleBrands.length > 1;

      toast.success(
        `Marca de Veículo${isPlural ? 's' : ''} deletado${
          isPlural ? 's' : ''
        } com sucesso!`,
      );

      setSelectedRows([]);

      setRowData(previousState =>
        previousState.filter(item => !ids.includes(item.id)),
      );
    } catch (error) {
      if (error instanceof ApolloError) {
        toast.error('Erro ao deletar a Marca de Veículo!', {
          description: error.message,
        });

        return;
      }

      toast.error('Erro ao deletar a Marca de Veículo!');
    } finally {
      setIsOpenDelete(false);
      setIsFetchingDeleteVehicleBrands(false);
    }
  };

  const onSelectionChanged = (
    event: SelectionChangedEvent<VehicleBrandProps>,
  ) => {
    setSelectedRows(event.api.getSelectedRows());
  };

  const onFilterChanged = async (
    event: FilterChangedEvent<VehicleBrandProps>,
  ) => {
    const filter = event.api.getFilterModel() as FilterProps;

    const where = {} as VehicleBrandWhereInput;
    const keys = Object.keys(filter) as VehicleBrandKeyProps[];

    keys.forEach(item => {
      const currentFilter = filter[item];

      if (currentFilter?.operator && !where[currentFilter.operator]) {
        where[currentFilter.operator] = [];
      }

      if (currentFilter?.type?.includes('not') && !where.NOT) {
        where.NOT = [];
      }

      if (currentFilter?.filter && currentFilter.type.includes('not')) {
        const name = currentFilter.type.replaceAll('not', '').toLowerCase();

        where.NOT?.push({ [item]: { [name]: currentFilter.filter } });

        return;
      }

      if (
        currentFilter.type &&
        currentFilter.filterBrand === 'number' &&
        !currentFilter?.filter &&
        currentFilter.type.includes('not')
      ) {
        const name = currentFilter.type.replaceAll('not', '').toLowerCase();

        where.NOT?.push({ [item]: { [name]: true } });

        return;
      }

      if (
        currentFilter.type &&
        currentFilter.filterBrand === 'number' &&
        currentFilter?.filter === undefined
      ) {
        where[item as keyof Omit<VehicleBrandProps, '__typename'>] = {
          [currentFilter.type]: true,
        };

        return;
      }

      if (currentFilter?.filter) {
        where[item as keyof Omit<VehicleBrandProps, '__typename'>] = {
          [currentFilter.type]: currentFilter.filter,
        };

        return;
      }

      if (currentFilter?.dateFrom && currentFilter.type.includes('not')) {
        const name = currentFilter.type.replaceAll('not', '').toLowerCase();

        if (name === 'equals') {
          const initHours = new Date(
            new Date(currentFilter.dateFrom).setHours(0, 0, 0, 0),
          ).toISOString();

          const lastHours = new Date(
            new Date(currentFilter.dateFrom).setHours(24, 0, 0, 0),
          ).toISOString();

          where.NOT?.push({
            AND: [{ [item]: { gt: initHours } }, { [item]: { lt: lastHours } }],
          });

          return;
        }

        where.NOT?.push({
          [item]: { [name]: new Date(currentFilter.dateFrom).toISOString() },
        });

        return;
      }

      if (currentFilter?.dateFrom) {
        if (currentFilter.type === 'equals') {
          const initHours = new Date(
            new Date(currentFilter.dateFrom).setHours(0, 0, 0, 0),
          ).toISOString();

          const lastHours = new Date(
            new Date(currentFilter.dateFrom).setHours(24, 0, 0, 0),
          ).toISOString();

          where.AND = [
            { [item]: { gt: initHours } },
            { [item]: { lt: lastHours } },
          ];

          return;
        }

        where[item as keyof Omit<VehicleBrandProps, '__typename'>] = {
          [currentFilter.type]: new Date(currentFilter.dateFrom).toISOString(),
        };

        return;
      }

      if (currentFilter?.operator) {
        where[currentFilter.operator] = currentFilter.conditions?.map(
          condition => {
            if (condition.type && condition.type.includes('not')) {
              const name = condition.type.replaceAll('not', '').toLowerCase();

              return {
                NOT: [{ [item]: { [name]: condition.filter } }],
              };
            }

            if (condition?.dateFrom) {
              return {
                [item]: {
                  [condition.type]: new Date(condition.dateFrom).toISOString(),
                },
              };
            }

            return {
              [item]: {
                [condition.type]: condition.filter,
              },
            };
          },
        );
      }
    });

    const { data } = await refetch({
      where,
      limit: pageSize,
      offset: pageSize * page,
    });

    setRowData(data.getAllVehicleBrand ?? []);
  };

  const rowClassRules: RowClassRules<VehicleBrandProps> = {
    '!bg-danger-500/10': parameters =>
      (parameters.data &&
        editedRows.newData?.some(item =>
          item.id?.includes(parameters.data!.id),
        )) ??
      false,
  };

  const noRowsOverlayComponentParameters = useMemo(
    () => ({
      noRowsMessageFunc: () => 'Nenhum registro encontrado!',
    }),
    [],
  );

  const Grid = useMemo(
    () => (
      <AgGridReact
        rowData={rowData}
        editType="fullRow"
        cellFadeDelay={500}
        columnDefs={colDefs}
        cellFlashDelay={2000}
        rowSelection="multiple"
        className="!transition-all"
        rowClassRules={rowClassRules}
        defaultColDef={{ valueSetter }}
        onFilterChanged={onFilterChanged}
        noRowsOverlayComponent={CustomError}
        onSelectionChanged={onSelectionChanged}
        noRowsOverlayComponentParams={noRowsOverlayComponentParameters}
        animateRows
        enableCellChangeFlash
        {...props}
      />
    ),
    [rowData],
  );

  useEffect(() => {
    if (dataVehicleBrands?.getAllVehicleBrand ?? []) {
      setRowData(dataVehicleBrands?.getAllVehicleBrand ?? []);
    }
  }, [isLoading]);

  return (
    <div className="relative overflow-x-auto shadow-default sm:rounded">
      <div className="flex flex-col">
        <div className="relative flex flex-wrap-reverse items-center justify-between gap-2 bg-white-lilac-50 p-4 transition-all dark:bg-smoke-950 md:flex-row md:flex-wrap md:space-y-0">
          <div className="flex items-center gap-2">
            <Select
              onValueChange={item => {
                setPageSize(Number(item));
                handleFetchMoreSize(Number(item));
              }}
              defaultValue="25"
              placeholder="Action"
              values={[10, 25, 50]}
              value={String(pageSize)}
            />

            <Dialog.Root open={isOpenUpdate} onOpenChange={setIsOpenUpdate}>
              <Dialog.Trigger
                className={clsx(
                  'flex items-center rounded-lg border border-zumthor-100 bg-white-lilac-50 px-3 py-1.5 text-sm font-medium text-comet-500 transition-all hover:bg-porcelain-50 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-shark-950 dark:bg-shark-950 dark:text-dark-300 dark:hover:opacity-60 dark:focus:ring-gray-700',
                  {
                    'opacity-0 pointer-events-none':
                      editedRows?.newData?.length === 0,
                    'opacity-1 pointer-events-auto':
                      editedRows?.newData?.length &&
                      editedRows?.newData?.length > 0,
                  },
                )}
                type="button"
              >
                <span>
                  Linhas alteradas:{' '}
                  <span className="text-primary-400">
                    {editedRows?.newData?.length}
                  </span>
                </span>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-30 animate-overlayShow bg-black/80 backdrop-blur-sm" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-40 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 animate-contentShow rounded-md bg-white-lilac-50 p-9 transition-all dark:bg-smoke-950">
                  <Dialog.Title className="text-lg font-semibold text-shark-950 transition-all dark:text-white-lilac-50">
                    Editar Cadastros
                  </Dialog.Title>

                  <Dialog.Description className="mb-6 mt-3">
                    Veja os cadastros alterados aqui. Clique em salvar quando
                    terminar.
                  </Dialog.Description>

                  <div className="flex flex-col gap-1">
                    {editedRows?.newData?.map(row => (
                      <div key={row.id} className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Remove Edit"
                          onClick={() => handleCancelUpdate(row.id)}
                          className="cursor-pointer p-1 text-danger-500 outline-danger-500 transition-all hover:rotate-180 focus:rotate-180"
                        >
                          <MinusCircleIcon size={17} />
                        </button>

                        <span className="flex text-sm">ID: {row.id}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-end">
                    <Button
                      type="button"
                      variant="label"
                      color="success"
                      className="min-w-[10.564rem]"
                      onClick={handleUpdateVehicleBrands}
                      isLoading={isFetchingUpdateVehicleBrands}
                      isDisabled={isFetchingUpdateVehicleBrands}
                    >
                      Salvar alterações
                    </Button>
                  </div>
                  <Dialog.Close
                    aria-label="Close"
                    className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full p-2 text-primary-400 outline-primary-400"
                  >
                    <CloseIcon size={14} />
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>

            <AlertDialog.Root
              open={isOpenDiscardChanges}
              onOpenChange={setIsOpenDiscardChanges}
            >
              <AlertDialog.Trigger
                className={clsx(
                  'p-1 text-primary-400 outline-primary-400 transition-all hover:rotate-180 focus:rotate-180',
                  {
                    'opacity-0 pointer-events-none':
                      editedRows?.newData?.length === 0,
                    'opacity-1 pointer-events-auto':
                      editedRows?.newData?.length &&
                      editedRows?.newData?.length > 0,
                  },
                )}
                type="button"
                aria-label="Clear Edit"
              >
                <CloseCircleIcon size={18} />
              </AlertDialog.Trigger>

              <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed inset-0 z-30 animate-overlayShow bg-black/80 backdrop-blur-sm" />

                <AlertDialog.Content className="fixed left-1/2 top-1/2 z-40 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 animate-contentShow rounded-md bg-white-lilac-50 p-9 transition-all dark:bg-smoke-950">
                  <AlertDialog.Title className="text-lg font-semibold text-shark-950 transition-all dark:text-white-lilac-50">
                    Descartar Alterações?
                  </AlertDialog.Title>

                  <AlertDialog.Description className="mb-6 mt-3">
                    Ao clicar em Descartar, todas as modificações abaixo serão
                    perdidas. Deseja prosseguir?
                  </AlertDialog.Description>

                  <div className="flex flex-col gap-1">
                    {editedRows?.newData?.map(row => (
                      <div key={row.id} className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Remove Edit"
                          onClick={() => handleCancelUpdate(row.id)}
                          className="cursor-pointer p-1 text-danger-500 outline-danger-500 transition-all hover:rotate-180 focus:rotate-180"
                        >
                          <MinusCircleIcon size={17} />
                        </button>

                        <span className="flex text-sm">ID: {row.id}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-end gap-3">
                    <AlertDialog.Cancel asChild>
                      <Button color="secondary">Cancelar</Button>
                    </AlertDialog.Cancel>

                    <Button
                      type="button"
                      color="danger"
                      variant="label"
                      onClick={handleCancelAllUpdate}
                      isLoading={isFetchingUpdateVehicleBrands}
                      isDisabled={isFetchingUpdateVehicleBrands}
                    >
                      Descartar
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

          <div className="relative flex flex-1 gap-3 md:flex-initial">
            <Link href="/dashboard/vehicle-types/new">
              <Button variant="label">Adicionar Marca de Veículo</Button>
            </Link>

            <form
              onSubmit={handleSubmit(handleSearch)}
              className="relative flex flex-1 md:flex-initial"
            >
              <button
                type="submit"
                aria-label="search"
                className="absolute inset-y-0 start-0 flex cursor-pointer items-center ps-3 text-comet-500 transition-all hover:text-primary-400 focus:text-primary-400 dark:text-dark-300 dark:hover:text-primary-400 dark:focus:text-primary-400"
              >
                <svg
                  fill="none"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="size-4 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeWidth="2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Pesquisar"
                className="flex flex-1 rounded-lg border border-zumthor-100 bg-gray-50 p-2 ps-10 text-sm text-shark-900 outline-primary-400 transition-all focus:border-primary-400 focus:ring-primary-400 dark:border-shark-950 dark:bg-shark-950 dark:text-white-lilac-50 dark:placeholder:text-dark-300 dark:focus:border-primary-400 dark:focus:ring-primary-400 md:w-80 md:flex-initial"
                {...register('search')}
              />
            </form>
          </div>
        </div>

        {isLoading && (
          <div className="flex animate-pulse flex-col gap-4 pb-4">
            <div className="flex h-8 w-full rounded bg-porcelain-50 transition-all dark:bg-shark-950" />

            {Array.from({ length: 14 }).map((_, index) => (
              <div key={index} className="flex h-4 gap-4 px-4">
                <div className="mb-4 flex h-4 flex-1 rounded bg-dark-100 transition-all dark:bg-shark-950" />
                <div className="mb-4 flex h-4 flex-1 rounded bg-dark-100 transition-all dark:bg-shark-950" />
                <div className="mb-4 flex h-4 flex-1 rounded bg-dark-100 transition-all dark:bg-shark-950" />
                <div className="mb-4 flex h-4 flex-1 rounded bg-dark-100 transition-all dark:bg-shark-950" />
                <div className="mb-4 flex h-4 flex-1 rounded bg-dark-100 transition-all dark:bg-shark-950" />
                <div className="mb-4 flex h-4 flex-1 rounded bg-dark-100 transition-all dark:bg-shark-950" />
              </div>
            ))}

            <div className="flex h-16 w-full items-center rounded bg-porcelain-50 px-4 transition-all dark:bg-shark-950">
              <div className="h-5 w-1/5 rounded bg-dark-100 transition-all dark:bg-shark-950" />
            </div>
          </div>
        )}

        {dataVehicleBrands && !isLoading && (
          <>
            <div className="ag-theme-quartz relative h-[31.25rem]">
              <div
                className={clsx(
                  'absolute inset-0 z-30 flex items-center justify-center bg-white-lilac-50/80 transition-all dark:bg-smoke-950/80',
                  {
                    'opacity-1 pointer-events-auto': isFetchingVehicleBrands,
                    'opacity-0 pointer-events-none': !isFetchingVehicleBrands,
                  },
                )}
              >
                <PreLoader />
              </div>

              {Grid}

              <Popover.Root>
                <Popover.Trigger
                  className={clsx(
                    'absolute !bottom-6 left-1/2 flex -translate-x-1/2 items-center rounded border border-zumthor-100 bg-white-lilac-50 p-2 shadow-default transition-all hover:bg-porcelain-50 dark:border-shark-950 dark:bg-smoke-950 hover:dark:opacity-80 md:bottom-20',
                    {
                      'opacity-1 pointer-events-auto': selectedRows?.length > 0,
                      'opacity-0 pointer-events-none':
                        selectedRows?.length === 0,
                    },
                  )}
                >
                  <span className="text-sm text-comet-500 transition-all dark:text-dark-300">
                    <span className="text-primary-400">
                      {selectedRows?.length}
                    </span>{' '}
                    Selecionado
                    {selectedRows?.length > 1 ? 's' : ''}
                  </span>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    side="top"
                    sideOffset={5}
                    align="center"
                    className="flex gap-2 rounded-lg border bg-white-lilac-50 px-4 py-2 shadow-default data-[state='open']:animate-slideDownAndFade dark:border-shark-950 dark:bg-shark-950"
                  >
                    {selectedRows.length === 1 && (
                      <Link
                        href={`/dashboard/vehicle-types/${selectedRows[0].id}/general`}
                        className="p-1 text-comet-500 outline-primary-400 transition-all hover:text-primary-400 dark:text-dark-300 hover:dark:text-primary-400"
                      >
                        <ProfileSearchIcon size={20} />
                      </Link>
                    )}
                    <AlertDialog.Root
                      onOpenChange={setIsOpenDelete}
                      open={isOpenDelete && selectedRows.length > 0}
                    >
                      <AlertDialog.Trigger
                        type="button"
                        aria-label="Remove Selected"
                        className="p-1 text-comet-500 outline-primary-400 transition-all hover:text-primary-400 dark:text-dark-300 hover:dark:text-primary-400"
                      >
                        <TrashIcon size={20} />
                      </AlertDialog.Trigger>

                      <AlertDialog.Portal>
                        <AlertDialog.Overlay className="fixed inset-0 z-30 animate-overlayShow bg-black/80 backdrop-blur-sm" />

                        <AlertDialog.Content className="fixed left-1/2 top-1/2 z-40 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 animate-contentShow rounded-md bg-white-lilac-50 p-9 transition-all dark:bg-smoke-950">
                          <AlertDialog.Title className="text-lg font-semibold text-shark-950 transition-all dark:text-white-lilac-50">
                            Deletar Selecionados?
                          </AlertDialog.Title>

                          <AlertDialog.Description className="mb-6 mt-3">
                            Ao clicar em Deletar, todos os selecionados abaixo
                            serão deletados. Deseja prosseguir?
                          </AlertDialog.Description>

                          <div className="flex max-h-32 flex-col gap-1 overflow-y-auto">
                            {selectedRows?.map(row => (
                              <div
                                key={row.id}
                                className="flex items-center gap-2"
                              >
                                <button
                                  onClick={() =>
                                    setSelectedRows(previousState =>
                                      previousState.filter(
                                        item => item.id !== row.id,
                                      ),
                                    )
                                  }
                                  type="button"
                                  aria-label="Remove Edit"
                                  className="cursor-pointer p-1 text-danger-500 outline-danger-500 transition-all hover:rotate-180 focus:rotate-180"
                                >
                                  <MinusCircleIcon size={17} />
                                </button>

                                <span className="flex text-sm">
                                  ID: {row.id}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-6 flex justify-end gap-3">
                            <AlertDialog.Cancel asChild>
                              <Button color="secondary">Cancelar</Button>
                            </AlertDialog.Cancel>

                            <Button
                              type="button"
                              color="danger"
                              variant="label"
                              className="min-w-[5.806rem]"
                              onClick={handleDeleteVehicleBrands}
                              isLoading={isFetchingDeleteVehicleBrands}
                              isDisabled={isFetchingDeleteVehicleBrands}
                            >
                              Deletar
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

                    <Popover.Arrow className="fill-white-lilac-50 transition-all dark:fill-shark-950" />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </div>

            <div className="mt-4 flex flex-col items-center justify-between gap-4 p-4 md:mt-0 md:flex-row">
              <span className="text-[0.813rem] text-comet-500 transition-all dark:text-dark-300">
                {`Mostrando ${page + 1} de ${Math.ceil(
                  dataVehicleBrands.totalVehicleBrands / pageSize,
                )} página${
                  Math.ceil(dataVehicleBrands.totalVehicleBrands / pageSize) > 1
                    ? 's'
                    : ''
                } e ${dataVehicleBrands?.totalVehicleBrands} registro${
                  dataVehicleBrands?.totalVehicleBrands > 1 ? 's' : ''
                }`}
              </span>

              <PageIndicator
                length={Math.ceil(
                  dataVehicleBrands.totalVehicleBrands / pageSize,
                )}
                hasEdited={
                  editedRows.newData &&
                  (editedRows.newData?.length > 0 ?? false)
                }
                activeIndex={page}
                isLoading={isFetchingVehicleBrands}
                onChangeIndex={handleFetchMorePage}
                onChangeWithEdited={() => setIsOpenDiscardChanges(true)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
