import { NotificationFactory } from "@/presentation/factories";
import { NotificationProps } from "@/presentation/interfaces";

interface Props {
  items: NotificationProps[];
}

export const NotificationList = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {items.map((item, index) => {
        const Component = NotificationFactory.getComponent(item.type);
        if (!Component) return null;

        return (
          <Component key={index} title={item.title} message={item.message} />
        );
      })}
    </div>
  );
};
