import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
} from '@tanstack/react-table';

import Table from '@/components/common/Table';
import useFetch from '@/hooks/useFetch';
import { Metrics } from '@/types/API';

import { capitalize } from '@/utils/strings/capitalize';
import { useMemo } from 'react';
import Badge from '@/components/common/Badge';

export default function TableContainer() {
  const { data } = useFetch();

  const columnHelper = createColumnHelper<Metrics>();
  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        cell: prop => <span>{prop.getValue()}</span>,
        header: () => <p>ID</p>,
      }),
      columnHelper.accessor('label', {
        cell: prop => <p>{capitalize(prop.getValue())}</p>,
        header: () => <p>Label</p>,
      }),
      columnHelper.accessor('description', {
        cell: prop => <span>{prop.getValue()}</span>,
        header: () => <p>Description</p>,
      }),
      columnHelper.accessor('value', {
        cell: prop => <span>{prop.getValue()}</span>,
        header: () => <p>Value</p>,
      }),
      columnHelper.accessor('type', {
        cell: prop => <span>{prop.getValue()}</span>,
        header: () => <p>Type</p>,
      }),
      columnHelper.accessor('category', {
        cell: prop => <Badge text={prop.getValue()} />,
        header: () => <p>Category</p>,
      }),
    ],
    [columnHelper],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div data-testid="table">
      <Table
        headers={table.getHeaderGroups()}
        rows={table.getRowModel().rows}
      />
    </div>
  );
}
