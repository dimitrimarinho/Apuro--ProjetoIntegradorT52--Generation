import Categorias from "./Categorias";
import User from "./User";

interface Produto {
    id: number;
    nome: string;
    descricao?: string | undefined;
    quantidade?: number | null;
    preco?: number | null;
    foto?: string | undefined;
    sustentabilidade?: number | null;
    regiao: string;
    categorias?: Categorias | undefined;
    usuario?: User | undefined
}

export default Produto;