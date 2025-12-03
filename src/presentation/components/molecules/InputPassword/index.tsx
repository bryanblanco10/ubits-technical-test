import { Input, Label, MessageError } from "@/presentation/components";
import type { InputForm } from "@/presentation/interfaces";
import { ErrorMessage } from "@hookform/error-message";
import { Container } from "./style";

export const InputPassword = ({
  label,
  name: nameField,
  register,
  errors,
  isDisabled,
}: InputForm) => {
  const requiredField = {
    required: { value: true, message: "Debe ingresar una contraseña" },
  };
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
        type="password"
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <MessageError>{message}</MessageError>}
      />
    </Container>
  );
};
