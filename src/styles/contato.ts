import styled from "styled-components";

export const ContatoSection = styled.section`
  scroll-margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 0 1rem;
  font-family: var(--font-regular);

  margin-top: 10rem;

  min-height: 80vh;

  transform: translateY(-40px);
  transition: all 0.8s ease;

  &.visible {
    transform: translateY(0);
  }
`;

export const Titulo = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  text-align: center;
`;

export const InstagramIcon = styled.a`
  color: black;
  margin: 1rem 0;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Ou = styled.p`
  font-style: italic;
  margin-bottom: 2rem;
`;

export const Subtitulo = styled.h3`
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;
  max-width: 600px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  margin: 0.5rem 0 0.2rem;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #333;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #333;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  margin: 1.5rem 0;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: none;
  border: none;
  color: black;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
`;
