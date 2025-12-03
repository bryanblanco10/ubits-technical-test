import type { InputForm } from "@/presentation/interfaces";
import { ErrorMessage } from "@hookform/error-message";
import { Container } from "./style";
import { validationText } from "@/presentation/utils";
import { Label, Input, MessageError } from "@/presentation/components";


export const InputText = ({
  label,
  required,
  name: nameField,
  register,
  errors,
  isDisabled,
}: InputForm) => {
  const requiredField = required ? validationText : undefined;
  const { name, onBlur, onChange, ref } = register(nameField, requiredField);

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>

      <Input
        name={name}
        ref={ref}
        onBlur={onBlur}
        onChange={onChange}
        disabled={isDisabled}
        placeholder={label}
        hasError={!!errors[name]}
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <MessageError>{message}</MessageError>}
      />
    </Container>
  );
};
