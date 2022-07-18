import Produto from "./Produto";

interface User {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto?: string | undefined;
    dataDeNascimento?: string | undefined;
    cpf: string;
    endereco?: string | undefined;
    descricao?: string | undefined;
    produtos?: Produto | undefined
}

export default User;