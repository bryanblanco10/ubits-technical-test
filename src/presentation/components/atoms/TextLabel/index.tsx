import { Label } from "../Label";

interface Props {
  children: React.ReactNode;
}

export const TextLabel = ({ children }: Props) => {
  return <Label>{children}</Label>;
};