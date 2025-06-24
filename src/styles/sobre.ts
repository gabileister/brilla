import styled from "styled-components";

export const AboutContainer = styled.section`
  scroll-margin-top: 100px;
  padding: 4rem 1rem;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 60%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Name = styled.h1`
  font-weight: 600;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
`;

export const InfoText = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

export const Bio = styled.p`
  margin-top: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;

  width: 70%;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
