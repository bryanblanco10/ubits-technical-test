import { NotificationType } from "@/presentation/types";

export interface NotificationProps {
  title: string;
  message: string;
  type: NotificationType;
}