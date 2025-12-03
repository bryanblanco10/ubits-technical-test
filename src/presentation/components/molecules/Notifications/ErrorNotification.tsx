import { BaseNotification } from "../../atoms";

export const ErrorNotification = (props: { title: string; message: string }) => (
  <BaseNotification {...props} $color="#ef4444" />
);
