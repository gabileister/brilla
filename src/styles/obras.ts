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
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 820px) {
    margin: 0;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ObrasCard = styled.div`
  position: relative;
  width: 49%;
  cursor: pointer;
  overflow: hidden;

  display: flex;
  flex-direction: column;
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
    inset: 0;
    background: rgba(255, 255, 255, 0.3); /* branco esbranquiçado */
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  @media (max-width: 1080px) {
    width: 47%;
  }

  @media (max-width: 820px) {
    width: 100%;
    &::after {
      display: none;
    }

    .title {
      opacity: 1 !important;
    }
  }
`;

export const ObrasImage = styled.img.attrs({ className: "image" })`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: filter 0.3s ease;
`;

export const ObrasCardTitle = styled.p.attrs({ className: "title" })`
  position: absolute;
  z-index: 2;
  font-family: var(--font-regular);
  font-size: 2rem;
  font-weight: 600;
  color: black;
  padding: 0.5rem 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
  background: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 820px) {
    position: static;
    transform: none;
    opacity: 1;
    margin-top: 1rem;
    font-size: 1.6rem;
    color: var(--color-text);
    text-align: center;
  }
`;
