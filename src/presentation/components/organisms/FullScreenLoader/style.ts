import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const loadingProgress = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export const LoaderContainer = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const LogoBox = styled.div`
  background: rgba(255, 255, 255, 0.5);
  padding: 1.5rem;
  padding-bottom: 0.25rem;
  border-radius: 10px;
`;

export const Logo = styled.img`
  width: 11rem;
  animation: ${bounce} 1.5s infinite;
`;

export const Message = styled.p<{ $visible: boolean }>`
  color: white;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
  height: 1.5rem;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const ProgressBar = styled.div`
  width: 16rem;
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
`;

export const ProgressFill = styled.div`
  position: absolute;
  inset: 0;
  background: var(--color-primary);
  border-radius: inherit;
  animation: ${loadingProgress} 1.5s linear infinite;
`;

export const ProgressGlow = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: ${loadingProgress} 1.5s linear infinite;
`;
