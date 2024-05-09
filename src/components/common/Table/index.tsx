import { flexRender, Row, HeaderGroup } from '@tanstack/react-table';
import { StyledTHead, StyledTable, StyledTh, StyledTr } from './styles';
import { Metrics } from '@/types/API';
import { useContext } from 'react';
import { ChartLabelContext } from '@/context/ChartContext';

type TableProps<T> = {
  headers: HeaderGroup<T>[];
  rows: Row<T>[];
};

export default function Table({ headers, rows }: TableProps<Metrics>) {
  const { label } = useContext(ChartLabelContext);

  return (
    <StyledTable>
      <StyledTHead>
        {headers.map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <StyledTh key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </StyledTh>
            ))}
          </tr>
        ))}
      </StyledTHead>
      <tbody>
        {rows.map(row => (
          <StyledTr
            $isHighlighted={row.getValue('label') === label}
            key={row.id}
          >
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
}
