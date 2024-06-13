import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { EncabezadoComponent } from '../../../shared/components/encabezado/encabezado.component';

@Component({
  selector: 'app-carrito-de-compras',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './carrito-de-compras.component.html',
  styleUrl: './carrito-de-compras.component.css'
})
export class CarritoDeComprasComponent {

}
