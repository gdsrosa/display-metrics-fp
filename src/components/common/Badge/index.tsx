import { StyledBadge } from './styles';

type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return <StyledBadge $text={text}>{text}</StyledBadge>;
}
