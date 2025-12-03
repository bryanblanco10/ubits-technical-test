import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;

  position: sticky;
  top: 0;
  z-index: 50;
`;

export const Logo = styled.img`
  height: 40px;
  object-fit: contain;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 32px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-primary);
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #1d4ed8;
  }
`;
