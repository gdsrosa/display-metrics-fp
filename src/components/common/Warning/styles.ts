import styled from 'styled-components';
import { darken } from 'polished';
import { Colors } from '@/theme/colors';

export const StyledWarning = styled.span`
  color: ${darken(0.5, Colors.yellow)};
  background-color: ${Colors.yellow};
  padding: 0.75rem;
  display: none;

  @media (min-width: 375px) and (max-width: 430px) {
    display: block;
  }
`;
