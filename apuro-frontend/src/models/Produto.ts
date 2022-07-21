import Categorias from "./Categorias";
import User from "./User";

interface Produto {
    id: number;
    nome: string;
    descricao?: string;
    quantidade: number;
    preco: number;
    foto?: string;
    sustentabilidade: number;
    regiao: string;
    categorias: Categorias | undefined;
    usuario?: User | undefined
}

export default Produto;