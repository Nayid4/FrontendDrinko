export interface Carrito {
    id: string;
    usuarioId: string;
    productoCarritos: ProductoCarrito[];
  }
  
  export interface ProductoCarrito {
    id: string;
    carritoDeComprasId: string;
    productoId: string;
    cantidad: number;
    precio: number;
  }
  