import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 28rem; /* 448px */
  
  @media (min-width: 768px) {
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 1rem; /* Rounded-2xl */
  }

  padding: 2rem;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 2rem;
  border-radius: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem; /* text-xl */
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-primary);
`;
