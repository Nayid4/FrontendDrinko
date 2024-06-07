import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/components/encabezado/encabezado.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
