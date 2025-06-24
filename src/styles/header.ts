import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;
  background: white;
  position: sticky;
  top: 0;
  z-index: 999;

  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-80px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Logo = styled.h1`
  font-family: "Inspiration", cursive;
  font-weight: 400;
  letter-spacing: 1rem;
  font-size: 2rem;
  margin: 0;
`;

export const Nav = styled.nav<{ open: boolean }>`
  list-style: none;
  style: none;
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    background: white;
    padding: 1rem 0;
    gap: 1.5rem;
    display: ${({ open }) => (open ? "flex" : "none")};

    animation: fadeIn 0.2s ease;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-80px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

export const NavItem = styled.a`
  cursor: pointer;
  border: none;
  padding: 5px;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-weight: 400;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;

  &:hover,
  &.active {
    border-color: black;
  }
`;

export const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: black;
  }
`;
