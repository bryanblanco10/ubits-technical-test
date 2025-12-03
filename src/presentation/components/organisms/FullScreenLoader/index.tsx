import { useEffect, useState } from "react";
import {
  LoaderContainer,
  LoaderWrapper,
  LogoBox,
  Logo,
  Message,
  ProgressBar,
  ProgressFill,
  ProgressGlow,
} from "./style";

export const FullScreenLoader = () => {
  const loadingMessages = [
    "Iniciando los motores",
    "Ya casi estamos listos",
    "Últimos ajustes",
    "Un momento más, por favor",
    "Casi todo listo",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIsMessageVisible(false);
      setTimeout(() => {
        setCurrentMessageIndex((prev) =>
          prev === loadingMessages.length - 1 ? 0 : prev + 1
        );
        setIsMessageVisible(true);
      }, 300);
    }, 3000);

    document.body.style.overflow = "hidden";

    return () => {
      clearInterval(messageInterval);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <LoaderContainer>
      <LoaderWrapper>
        <LogoBox>
          <Logo src="/logo.png" alt="Logo" />
        </LogoBox>

        <Message $visible={isMessageVisible}>
          {loadingMessages[currentMessageIndex]}
        </Message>

        <ProgressBar>
          <ProgressFill />
          <ProgressGlow />
        </ProgressBar>
      </LoaderWrapper>
    </LoaderContainer>
  );
};
