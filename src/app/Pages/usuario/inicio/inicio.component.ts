import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/components/encabezado/encabezado.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';
import { TarjetaDeProductoComponent } from '../../../shared/components/tarjeta-de-producto/tarjeta-de-producto.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    EncabezadoComponent, 
    SlickCarouselModule, 
    CommonModule,
    TarjetaDeProductoComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Ruta de las imágenes

  slickCarouselConfig = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
}
