import { StyledInput } from "./style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  hasError: boolean;
  ref?: React.Ref<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  placeholder?: string;
}

export const Input = ({ hasError, ...props }: InputProps) => (
  <StyledInput hasError={hasError} {...props} />
);
