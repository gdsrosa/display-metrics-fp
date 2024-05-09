import { Colors } from '@/theme/colors';
import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 375px) and (max-width: 430px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 16px;
  margin-top: 0.4rem;

  @media (min-width: 375px) and (max-width: 430px) {
    font-size: 14px;
  }
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

  @media (min-width: 375px) and (max-width: 430px) {
    font-size: 20px;
  }
`;
