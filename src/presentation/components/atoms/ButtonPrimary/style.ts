import styled, { css } from "styled-components";
export type Variant = "primary" | "secondary" | "outline";

const buttonStyles = {
  primary: css`
    background: var(--color-primary);
    color: #fff;
    &:hover {
      opacity: 0.9;
    }
  `,
  secondary: css`
    background: var(--color-secondary);
    color: #fff;
    &:hover {
      opacity: 0.9;
    }
  `,
  outline: css`
    background: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `,
};

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "variant",
})<{ variant: Variant }>`
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: 0.2s ease-in-out;

  ${({ variant }) => buttonStyles[variant]}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
