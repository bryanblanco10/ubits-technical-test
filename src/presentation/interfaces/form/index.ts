import type { FieldErrors, UseFormRegister } from "react-hook-form";

export interface InputForm {
  label?: string;
  required?: boolean;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  isDisabled?: boolean;
  setValue?: any;
  type?: string;
}

export interface Option {
  value: string | undefined | number;
  label: string;
}
