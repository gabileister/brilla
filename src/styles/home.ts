import styled from "styled-components";

export const Home = styled.div`
  scroll-margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;

  transform: translateY(40px);
  transition: all 0.8s ease;

  &.visible {
    transform: translateY(0);
  }
`;

export const BrillaTitle = styled.h1`
  font-family: var(--font-primary);
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 1rem;
  text-align: center;

  animation: fadeIn 2s ease;

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
