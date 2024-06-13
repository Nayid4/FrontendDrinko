import { Component } from '@angular/core';
import { EncabezadoComponent } from "../../../shared/components/encabezado/encabezado.component";
import { Resena } from '../../../core/models/resena.model';
import { TarjetaDeResenaComponent } from '../../../shared/components/tarjeta-de-resena/tarjeta-de-resena.component';

@Component({
    selector: 'app-resenas',
    standalone: true,
    templateUrl: './resenas.component.html',
    styleUrl: './resenas.component.css',
    imports: [EncabezadoComponent, TarjetaDeResenaComponent]
})
export class ResenasComponent {
    resenas: Resena[] = [
        {
            id: 1,
            imagen: "",
            titulo: "Alex Gonzalez",
            descripcion: "¡La mejor licorería de Valledupar! Siempre encuentro lo que busco y el personal es muy amable."
        },
        {
            id: 2,
            imagen: "",
            titulo: "Steven Molina",
            descripcion: "Me encanta la amplia selección de vinos y licores que ofrecen. Siempre encuentro algo nuevo para probar."
        },
        {
            id: 3,
            imagen: "",
            titulo: "Kevin Perez",
            descripcion: "Realicé mi pedido online y llegó en menos de 24 horas. ¡Impresionante servicio de entrega!"
        },
    ]
}
