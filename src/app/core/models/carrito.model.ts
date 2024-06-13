
export interface Carrito {
    id: string;
    usuarioId: string;
    productosCarrito: ProductoCarrito[];
  }
  
  export interface ProductoCarrito {
    id: string;
    carritoId: string,
    productoId: string;
    imagen: string;
    cantidad: number;
    precio: number;
  }
  