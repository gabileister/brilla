import { useParams } from "react-router-dom";
import {
  ComposicaoCard,
  ComposicaoImagem,
  ComposicaoTitulo,
  ComposicaoVideo,
  ComposicoesGrid,
  ObraDescricao,
  ObraDetalheContainer,
  ObraTitulo,
} from "../styles/obra";
import { useEffect, useState } from "react";
import { Obra as ObraType } from "../types/obra";
import { resolveSrc } from "../utils/image-source";

export function Obra() {
  const { id } = useParams<{ id: string }>();

  const [obras, setObras] = useState<ObraType[]>([]);

  useEffect(() => {
    fetch("/dados.json")
      .then((res) => res.json())
      .then((data) => setObras(data.obras as ObraType[]));
  }, []);

  const obra = obras.find((o) => o.id === Number(id));

  if (!obra) return <p>Obra não encontrada.</p>;

  return (
    <>
      <ObraDetalheContainer>
        <ObraTitulo>
          {obra.titulo} {obra.ano ? `(${obra.ano})` : ""}
        </ObraTitulo>

        <ObraDescricao>{obra.descricao}</ObraDescricao>

        <ComposicoesGrid>
          {obra.composicoes.map((comp, index) => (
            <>
              {comp.imagem ? (
                <ComposicaoCard key={index}>
                  <ComposicaoImagem
                    src={resolveSrc(comp.imagem)}
                    alt={comp.titulo ?? "Sem título"}
                  />
                  <ComposicaoTitulo>
                    {comp.titulo ? <>{comp.titulo}</> : "Sem título"}
                  </ComposicaoTitulo>
                </ComposicaoCard>
              ) : (
                <ComposicaoVideo
                  key={index}
                  src={`https://www.youtube.com/embed/${comp.video}`}
                  title={comp.titulo ?? "Sem título"}
                  allowFullScreen
                />
              )}
            </>
          ))}
        </ComposicoesGrid>
      </ObraDetalheContainer>
    </>
  );
}
