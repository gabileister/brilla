import { useEffect, useState } from "react";
import {
  AboutContainer,
  InfoContainer,
  Name,
  Bio,
  Image,
  InfoText,
} from "../styles/sobre";
import { Sobre as SobreType } from "../types/sobre";
import { resolveSrc } from "../utils/image-source";

export function Sobre() {
  const [sobre, setSobre] = useState<SobreType>();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}dados.json`)
      .then((res) => res.json())
      .then((data) => setSobre(data.sobre as SobreType));
  }, []);

  return (
    <AboutContainer id="sobre">
      <InfoContainer>
        <div style={{ alignSelf: "start" }}>
          <Name>Gabriela Leister Chinchila</Name>
          <div style={{ marginTop: "100px" }}>
            {sobre?.resumo.split("(pula)").map((info, index) => {
              return (
                <InfoText key={index}>
                  {info.trim()}
                </InfoText>
              );
            })}
            <InfoText></InfoText>
          </div>
        </div>
        <Image src={resolveSrc(sobre?.imagem ?? "gabriel.png")} alt="Gabriela Leister Chinchila" />
      </InfoContainer>
      <Bio>{sobre?.biografia}</Bio>
    </AboutContainer>
  );
}
