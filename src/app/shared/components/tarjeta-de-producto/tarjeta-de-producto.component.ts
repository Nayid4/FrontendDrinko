import { Component, Input } from '@angular/core';
import { Producto } from '../../../core/models/producto.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-tarjeta-de-producto',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './tarjeta-de-producto.component.html',
  styleUrl: './tarjeta-de-producto.component.css'
})
export class TarjetaDeProductoComponent {
  @Input() producto: Producto = {} as Producto; // Asignación de valor por defecto
}
