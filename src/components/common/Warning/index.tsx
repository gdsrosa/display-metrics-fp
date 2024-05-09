import { StyledWarning } from './styles';

type WarningProps = {
  message: string;
};

export function Warning({ message }: WarningProps) {
  return <StyledWarning>{message}</StyledWarning>;
}
