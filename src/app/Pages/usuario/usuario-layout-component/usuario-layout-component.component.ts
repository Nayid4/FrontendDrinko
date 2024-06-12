import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/components/encabezado/encabezado.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuario-layout',
  standalone: true,
  imports: [EncabezadoComponent, RouterModule],
  template: `
    <app-encabezado></app-encabezado>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UsuarioLayoutComponent {}
