import { Colors } from '@/theme/colors';
import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 5px;
  border: 1px solid ${Colors.gray};
  padding: 0.5rem 1rem 1rem 1rem;
`;

export const StyledCardContent = styled.div<{ $isChartCard: boolean }>`
  margin-top: 1rem;

  @media (min-width: 375px) and (max-width: 430px) {
    display: flex;
    justify-content: ${props =>
      props.$isChartCard ? 'center' : 'space-between'};
  }
`;

export const StyledH3 = styled.h3`
  font-size: 30px;

  @media (min-width: 375px) and (max-width: 430px) {
    font-size: 22px;
  }
`;
