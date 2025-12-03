import { StyledButton, type Variant } from "./style";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  variant?: Variant;
  onClick?: () => void;
}
export const ButtonPrimary = ({
  text,
  type = "button",
  onClick,
  disabled,
  variant = "primary",
}: Props) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >
      <span>{text}</span>
    </StyledButton>
  );
};
