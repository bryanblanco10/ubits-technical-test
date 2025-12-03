import { Input, Label, MessageError } from "@/presentation/components";
import type { InputForm } from "@/presentation/interfaces";
import { validationNumber, validationPhone } from "@/presentation/utils";
import { ErrorMessage } from "@hookform/error-message";
import { Container } from "./style";

export const InputNumber = ({
  label,
  required,
  name: nameField,
  register,
  errors,
  isDisabled,
  setValue,
  type,
}: InputForm) => {
  const validation = type === "cellphone" ? validationPhone : validationNumber;
  const requiredField = required
    ? {
        ...validation,
        required: { value: true, message: "Campo requerido" },
      }
    : validation;
  const { name, onBlur, onChange, ref } = register(nameField, requiredField);
  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value.replace(/[^0-9]/g, ""); // Solo números
    setValue(nameField, value, {
      shouldValidate: true,
    });
  };

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
        onInput={onInput}
        inputMode="numeric"
        pattern="[0-9]*"
        type="text"
      />

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <MessageError>{message}</MessageError>}
      />
    </Container>
  );
};
