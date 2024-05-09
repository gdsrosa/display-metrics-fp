import { StyledCard, StyledCardContent, StyledH3 } from './styles';

type CardProps = {
  title?: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <StyledCard data-testid="card">
      <StyledH3>{title}</StyledH3>
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  );
}
