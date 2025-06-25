import { useInViewSection } from "../hooks/visibility";
import {
  ObrasCard,
  ObrasContainer,
  ObrasImage,
  ObrasSection,
  ObrasCardTitle,
} from "../styles/obras";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Obra } from "../types/obra";
import { resolveSrc } from "../utils/image-source";

export const Obras: React.FC<{ id: string }> = ({ id }) => {
  const { ref, visible } = useInViewSection();

  const [obras, setObras] = useState<Obra[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}dados.json`)
      .then((res) => res.json())
      .then((data) => setObras(data.obras as Obra[]));
  }, []);

  const navigate = useNavigate();

  return (
    <ObrasSection id={id} ref={ref} className={visible ? "visible" : ""}>
      <ObrasContainer>
        {obras.map((obra) => (
          <ObrasCard
            onClick={() => {
              navigate(`/obra/${obra.id}`);
            }}
            key={obra.titulo}
          >
            <ObrasImage src={resolveSrc(obra.imagem)}></ObrasImage>
            <ObrasCardTitle>{obra.titulo}</ObrasCardTitle>
          </ObrasCard>
        ))}
      </ObrasContainer>
    </ObrasSection>
  );
};
