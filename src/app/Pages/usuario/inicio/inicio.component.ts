import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../core/models/producto.model';
import { ProductoService } from '../../../core/services/producto.service';
import { TarjetaDeProductoComponent } from '../../../shared/components/tarjeta-de-producto/tarjeta-de-producto.component';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from '../../../shared/components/encabezado/encabezado.component';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,
    EncabezadoComponent,
    TarjetaDeProductoComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];

  constructor(private productoService: ProductoService, private searchService: SearchService) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.escucharCambiosDeBusqueda();
  }

  obtenerProductos(): void {
    this.productoService.obtenerProductos().subscribe(
      (productos: Producto[]) => {
        this.productos = productos;
        this.productosFiltrados = [...productos]; // Inicialmente todos los productos
      },
      (error: any) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  escucharCambiosDeBusqueda(): void {
    this.searchService.obtenerBusquedaActual().subscribe(busqueda => {
      if (busqueda.trim() === '') {
        this.productosFiltrados = [...this.productos]; // Restaurar productos originales si la búsqueda está vacía
      } else {
        const filtro = busqueda.trim().toLowerCase();
        this.productosFiltrados = this.productos.filter(producto =>
          producto.nombre.toLowerCase().includes(filtro)
        );
      }
    });
  }

  trackByFn(index: number, producto: Producto): string {
    return producto.id; // Asegúrate de devolver un identificador único aquí
  }
}