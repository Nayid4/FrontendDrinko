import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from '../../../core/models/producto.model';
import { ProductoService } from '../../../core/services/producto.service';
import { EncabezadoComponent } from "../../../shared/components/encabezado/encabezado.component";

@Component({
    selector: 'app-detalles-de-producto',
    standalone: true,
    templateUrl: './detalles-de-producto.component.html',
    styleUrl: './detalles-de-producto.component.css',
    imports: [EncabezadoComponent]
})
export class DetallesDeProductoComponent implements OnInit {
  productoId: string = '';
  producto: Producto = {} as Producto;

  constructor(private route: ActivatedRoute, private productoService: ProductoService ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.productoId = params['productoId'];
      if (this.productoId) {
        this.obtenerProducto(); // Llama a obtenerProductos() si hay una categoría ID
      }
    });
  }

  obtenerProducto(){
    this.productoService.obtenerProductoPorId(this.productoId).subscribe(
      (producto: Producto) => {
        this.producto = producto;
        console.log(this.producto);
      },
      (error: any) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }
}
