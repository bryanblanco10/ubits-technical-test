import { BaseNotification } from "../../atoms";

export const InfoNotification = (props: { title: string; message: string }) => (
  <BaseNotification {...props} $color="#3b82f6" />
);
