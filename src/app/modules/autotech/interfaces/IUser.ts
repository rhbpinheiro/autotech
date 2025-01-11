  export interface IUser {
    imagem_usuario: File  | null; 
    id: string | null;
    nome: string;
    cargo: string;
    cpf: string;
    datacontratacao: Date | null;
    email: string;
    nivel_acesso: string;
    senha: string;
    codigo: number;
    created_at: Date | null;
    updated_at: Date | null;
  }