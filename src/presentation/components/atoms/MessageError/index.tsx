import { StyledMessageError } from "./style";

interface Props {
  children: React.ReactNode
}
export const MessageError = ({ children }: Props) => (
  <StyledMessageError>{children}</StyledMessageError>
);