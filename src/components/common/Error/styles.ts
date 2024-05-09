import styled from 'styled-components';
import { darken } from 'polished';

import { Colors } from '@/theme/colors';

export const StyledErrorContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledErrorContent = styled.div`
  font-size: 22px;
`;
export const StyledH2 = styled.h2`
  font-size: 40px;
`;

export const StyledButton = styled.button`
  border: 1px solid ${Colors.blue};
  border-radius: 5px;
  background-color: ${Colors.blue};
  padding: 0.5rem;
  color: ${Colors.offWhite};
  outline: none;
  cursor: pointer;
  font-size: 18px;
  width: 100%;

  &:hover {
    background-color: ${darken(0.1, Colors.blue)};
    border: 1px solid ${darken(0.1, Colors.blue)};
  }
`;
