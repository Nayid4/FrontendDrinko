import { Injectable } from '@angular/core';
import { CanMatch, Router, UrlSegment, Route, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanMatch {

  constructor(private authService: AuthService, private router: Router) {}

  canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree {
    const token = this.authService.obtenerToken();

    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        const rol = decodedToken.Rol; // Ajusta esto según la clave exacta en el token

        if (rol === 'Administrador') {
          return true;
        } else {
          return this.router.parseUrl('/inicio-sesion');
        }
      } catch (error) {
        console.error('Error al decodificar el token', error);
        return this.router.parseUrl('/inicio-sesion');
      }
    } else {
      return this.router.parseUrl('/inicio-sesion');
    }
  }
}
