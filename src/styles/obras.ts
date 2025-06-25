import styled from "styled-components";

export const ObrasSection = styled.div`
  scroll-margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  min-height: 100vh;
  transform: translateY(40px);
  transition: all 0.8s ease;
  width: 100%;

  &.visible {
    transform: translateY(0);
  }
`;

export const ObrasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
    align-items: center;
  }
`;

export const ObrasCard = styled.div`
  position: relative;
  padding: 1rem;
  width: 50rem;
  height: 42rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover .title {
    opacity: 1;
  }

  &:hover::after {
    opacity: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2); /* ← branco semitransparente */
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    &::after {
      display: none;
    }

    .title {
      opacity: 1 !important;
    }
  }

  @media (max-width: 480px) {
    height: 20rem;
  }
`;

export const ObrasImage = styled.img.attrs({ className: "image" })`
  width: 100%;
  height: 35rem;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: filter 0.3s ease;

  @media (max-width: 480px) {
    height: 20rem;
  }
`;

export const ObrasCardTitle = styled.p.attrs({ className: "title" })`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  font-family: var(--font-regular);
  font-size: 2rem;
  font-weight: 700;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: none;
  width: 70%;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    opacity: 1;
    position: static;
    transform: none;
    background: none;
    color: var(--color-text);
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
