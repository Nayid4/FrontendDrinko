import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../core/models/producto.model';
import { ProductoService } from '../../../core/services/producto.service';
import { TarjetaDeProductoComponent } from '../../../shared/components/tarjeta-de-producto/tarjeta-de-producto.component';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from '../../../shared/components/encabezado/encabezado.component';

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
  images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Ruta de las imágenes
  productos: Producto[] = [];

  slickCarouselConfig = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.obtenerProductos().subscribe(
      (productos: Producto[]) => {
        this.productos = productos;
      },
      (error: any) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }
}
