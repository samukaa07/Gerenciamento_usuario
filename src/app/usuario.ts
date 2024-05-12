export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;  // Incluir somente se for seguro
    categoriaUsuario?: string;  
    tipoDeUsuarioId: number;
  }
  