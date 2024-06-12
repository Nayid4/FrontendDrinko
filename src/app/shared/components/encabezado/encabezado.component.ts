import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  loggedIn = false;
  toggleUserMenu = false;
  toggleCategories = false;

  constructor(private authService: AuthService) {}

  toggleUserActions(): void {
    this.toggleUserMenu = !this.toggleUserMenu;
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    this.loggedIn = false;
    this.toggleUserMenu = false; // Asegúrate de cerrar el menú de usuario al cerrar la sesión
  }

  ngOnInit(): void {
    // Verificar si el usuario está autenticado al cargar el componente
    this.loggedIn = this.authService.obtenerToken() !== null;
  }
}
