import { Wrapper } from "./style";

interface Props {
  children: React.ReactNode;
}

export const CardContainer = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};