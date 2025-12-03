import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError"
})<InputProps>`
  width: 100%;
  padding: 1.25rem 1rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ hasError }) =>
    hasError ? "#FF3B30" : "var(--color-primary)"};
  outline: none;

  &::placeholder {
    color: #949494;
    font-size: 1rem;
  }

  &:focus {
    border-color: var(--color-primary);
  }
`;