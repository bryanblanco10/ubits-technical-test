import { BaseNotification } from "../../atoms";

export const WarningNotification = (props: { title: string; message: string }) => (
  <BaseNotification {...props} $color="#f59e0b" />
);
