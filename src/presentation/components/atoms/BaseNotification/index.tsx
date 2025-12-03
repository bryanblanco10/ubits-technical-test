import { Wrapper, Title, Message } from "./style";

export const BaseNotification = ({
  title,
  message,
  $color,
}: {
  title: string;
  message: string;
  $color: string;
}) => (
  <Wrapper $color={$color}>
    <Title>{title}</Title>
    <Message>{message}</Message>
  </Wrapper>
);