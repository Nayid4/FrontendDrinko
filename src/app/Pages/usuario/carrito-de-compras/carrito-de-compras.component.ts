import { Component, OnInit } from '@angular/core';
import { EncabezadoComponent } from '../../../shared/components/encabezado/encabezado.component';
import { TarjetaDeProductoDeCarritoComponent } from '../../../shared/components/tarjeta-de-producto-de-carrito/tarjeta-de-producto-de-carrito.component';
import { AuthService } from '../../../core/services/auth.service';
import { Carrito, ProductoCarrito } from '../../../core/models/carrito.model';
import { AuthResponse } from '../../../core/models/auth.model';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'app-carrito-de-compras',
  standalone: true,
  imports: [EncabezadoComponent, TarjetaDeProductoDeCarritoComponent],
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {

  productosCarrito: ProductoCarrito[] = []
  usuario: AuthResponse | null = {} as AuthResponse
  carrito: Carrito = {} as Carrito
  total: number = 0

  constructor(private authService: AuthService, private carritoService: CarritoService){}

  ngOnInit(): void {
    this.usuario = this.authService.obtenerDatosUsuario()
    if (this.usuario == null){
      return;
    }

    this.cargarProductosCarrito()
  }

  cargarProductosCarrito() : void{
    this.carritoService.obtenerCarritoPorIdDeUsuario(this.usuario!.usuarioId).subscribe(
      (carrito) => {
        this.carrito = carrito
        this.productosCarrito = carrito.productos
        this.actualizarTotal()
      },
      error => {
        console.log("Se ha presentado un error al cargar los productos: ",error)
      }
    );
  }

  actualizarTotal(): void {
    this.total = this.productosCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)
  }

  vaciarCarrito(): void {
    // Implementar lógica para vaciar el carrito
  }

  comprar(): void {
    // Implementar lógica para proceder con la compra
  }

  onProductoEliminado(): void {
    this.cargarProductosCarrito();
  }

  onCantidadActualizada(): void {
    this.actualizarTotal();
  }
}
