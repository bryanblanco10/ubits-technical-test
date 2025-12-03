import { NotificationList } from "@/presentation/components";
import { useNotificationStore } from "@/presentation/store";

export const HomePage = () => {
  const { notifications } = useNotificationStore();
  return (
    <div className="p-8">
      <NotificationList items={notifications} />
    </div>
  );
};
