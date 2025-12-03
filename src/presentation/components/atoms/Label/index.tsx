import { StyledLabel } from "./style";

interface LabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

export const Label = ({ htmlFor, children }: LabelProps) => (
  <StyledLabel
    htmlFor={htmlFor}
  >
    {children}
  </StyledLabel>
);