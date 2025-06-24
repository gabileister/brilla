import { Composicao } from "./composicao";

export interface Obra {
    id: number;
    titulo: string;
    descricao: string;
    // tituloTraduzido: string | null;
    // descricaoTraduzida: string | null;
    imagem: string;
    ano: number;
    composicoes: Composicao[];
}
