import { NotificationList } from "@/presentation/components";
import { NotificationProps } from "@/presentation/interfaces";

const notifications: NotificationProps[] = [
  { type: "success", title: "Customer Success", message: "Nos preocupamos por ti y por el éxito de nuestros módulos en tu organización. Dispones de un equipo disponible 24/7 para alcanzar los objetivos propuestos." },
  { type: "error", title: "APIs", message: "Nuestro catálogo de APIs ofrece la flexibilidad para integrar UBITS con otras plataformas." },
  { type: "warning", title: "Powered by AI", message: "Todos nuestros módulos cuentan con AI para ayudarte acelerar con diferentes procesos, como sintetizar resultados, recomendación de contenidos y mucho más." },
  // { type: "info", title: "Info", message: "Nuevo mensaje" },
];
export const HomePage = () => {
  return (
    <div className="p-8">
      <NotificationList items={notifications} />
    </div>
  );
};
