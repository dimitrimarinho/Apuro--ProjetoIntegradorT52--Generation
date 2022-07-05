interface User {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto?: string | null
    dataDeNascimento?: Date | null;
    cpf: string;
    endereco?: string | null;
    descricao?: string | null;
    produtos?: null
}

export default User;