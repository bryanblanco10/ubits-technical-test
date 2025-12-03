import { Value } from "./style";

interface Props {
  children: React.ReactNode;
}

export const TextValue = ({ children }: Props) => {
  return <Value>{children}</Value>;
};