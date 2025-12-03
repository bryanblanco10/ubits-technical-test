import { FormLogin } from "@/presentation/components/organisms/forms";
import { Card, Container, LogoWrapper, Title } from "./style";

export const LoginPage = () => {
  return (
    <Container>
      <Card>
        <LogoWrapper>
          <img src="/logo.png" alt="Ubits" />
        </LogoWrapper>

        <Title>¡Mejora tus habilidades profesionales!</Title>

        <FormLogin />
      </Card>
    </Container>
  );
};
