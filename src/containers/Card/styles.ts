import { Colors } from '@/theme/colors';
import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const StyledParagraph = styled.p`
  font-size: 16px;
  margin-top: 0.4rem;
`;

export const StyledSpan = styled.span<{
  $value: number | string;
  $category: string;
}>`
  color: ${props =>
    props.$category === 'downtime' || Number(props.$value) < 0
      ? Colors.red
      : Colors.green};
  font-weight: bold;
  font-size: 22px;
`;
