import { Colors } from '@/theme/colors';
import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin-top: 2rem;

  td {
    border-bottom: 1px solid ${Colors.gray};
    padding: 0.5rem;
  }
`;

export const StyledTHead = styled.thead`
  background-color: ${Colors.blue};
  color: ${Colors.offWhite};
  text-align: left;
`;

export const StyledTh = styled.th`
  padding: 0.25rem;
  font-size: 14px;

  &:first-child {
    border-top-left-radius: 5px;
  }

  &:last-child {
    border-top-right-radius: 5px;
  }
`;

export const StyledTr = styled.tr<{ $isHighlighted: boolean }>`
  font-size: 14px;
  background-color: ${props =>
    props.$isHighlighted ? Colors.orange : 'inherit'};
`;
