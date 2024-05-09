import { StyledGrid } from './styles';

type GridProps = {
  children: React.ReactNode;
};

export default function Grid({ children }: GridProps) {
  return <StyledGrid>{children}</StyledGrid>;
}
