import { BaseNotification } from "../../atoms";

export const SuccessNotification = (props: { title: string; message: string }) => (
  <BaseNotification {...props} $color="#22c55e" />
);