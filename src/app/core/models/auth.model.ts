import { Usuario } from "./usuario.model";

export interface InicioDeSesionDTO {
    correo: string;
    clave: string;
  }
  
  export interface AuthResponse {
    token: string;
    usuario: Usuario;
  }
  