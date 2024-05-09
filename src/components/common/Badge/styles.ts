import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { Colors } from '@/theme/colors';

function setBackgroundColor(text: string): string {
  if (text === 'efficiency') {
    return lighten(0.2, Colors.green);
  } else if (text === 'shift') {
    return lighten(0.2, Colors.orange);
  } else {
    return lighten(0.2, Colors.red);
  }
}

function setColor(text: string): string {
  if (text === 'efficiency') {
    return darken(0.2, Colors.green);
  } else if (text === 'shift') {
    return darken(0.3, Colors.orange);
  } else {
    return darken(0.4, Colors.red);
  }
}

export const StyledBadge = styled.p<{ $text: string }>`
  color: ${props => setColor(props.$text)};
  padding: 0.2rem;
  background-color: ${props => setBackgroundColor(props.$text)};
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
  text-transform: capitalize;
`;
