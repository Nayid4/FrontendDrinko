import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario, UsuarioRegistro } from '../models/usuario.model';
import { InicioDeSesionDTO, AuthResponse } from '../models/auth.model';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7248'; // URL base de tu API

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  private obtenerLocalStorage(): Storage | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage;
    }
    return null;
  }

  private obtenerItemLocalStorage(key: string): string | null {
    const localStorage = this.obtenerLocalStorage();
    return localStorage ? localStorage.getItem(key) : null;
  }

  private setItemLocalStorage(key: string, value: string): void {
    const localStorage = this.obtenerLocalStorage();
    if (localStorage) {
      localStorage.setItem(key, value);
    }
  }

  private removeItemLocalStorage(key: string): void {
    const localStorage = this.obtenerLocalStorage();
    if (localStorage) {
      localStorage.removeItem(key);
    }
  }

  registrarUsuario(usuario: UsuarioRegistro): Observable<UsuarioRegistro> {
    return this.http.post<UsuarioRegistro>(`${this.apiUrl}/registrarse`, usuario);
  }

  iniciarSesion(credentials: InicioDeSesionDTO): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/iniciar-sesion`, credentials).pipe(
      tap(response => {
        this.guardarToken(response.token);
      })
    );
  }

  guardarToken(token: string): void {
    this.setItemLocalStorage('token', token);
  }

  obtenerToken(): string | null {
    return this.obtenerItemLocalStorage('token');
  }

  obtenerRolUsuario(): string | null {
    const token = this.obtenerToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || null;
    }
    return null;
  }

  cerrarSesion(): void {
    this.removeItemLocalStorage('token');
  }
}
