import { Login } from "@/core/domain";
import { ButtonPrimary, InputNumber, InputPassword } from "@/presentation/components";
import { useLogin } from "@/presentation/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
const defaultValues: Login = {
  username: "",
  password: "",
};
export const FormLogin = () => {
  const { handleLogin } = useLogin();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Login>({
    mode: "all",
    defaultValues: defaultValues,
    values: undefined,
  });

  const onSubmit: SubmitHandler<Login> = (data, e) => {
    e?.preventDefault();
    console.log('data', data);
    handleLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <InputNumber
        name="username"
        label="Usuario"
        register={register}
        setValue={setValue}
        required={true}
        errors={errors}
        isDisabled={false}
        type="number"
      />
      <InputPassword
        name="password"
        label="Contraseña"
        register={register}
        errors={errors}
        isDisabled={false}
      />
      <div className="mb-4 mt-10">
        <ButtonPrimary text="Ingresar" type="submit" />
      </div>
    </form>
  );
};
