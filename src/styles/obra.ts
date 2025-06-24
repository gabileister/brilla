import styled from "styled-components";

export const ObraDetalheContainer = styled.div`
  scroll-margin-top: 100px;
  padding: 4rem 2rem;
  font-family: var(--font-regular);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

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

export const ObraTitulo = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.1rem;
  font-weight: 300;
  text-align: center;
  font-family: var(--font-regular);
`;

export const ObraDescricao = styled.p`
  max-width: 800px;
  font-size: 1.5rem;
  font-weight: 100;
  text-align: center;
  margin-bottom: 2rem;
  font-family: var(--font-regular);
`;

export const ObraImagem = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin: 2rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ComposicoesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  margin-top: 3rem;
`;

export const ComposicaoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50rem;
  height: 42rem;
`;

export const ComposicaoVideo = styled.iframe`
  width: 100%;
  height: 30rem;
`;

export const ComposicaoImagem = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 35rem;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    height: 25rem;
  }
`;

export const ComposicaoTitulo = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
`;
