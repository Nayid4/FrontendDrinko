export interface Pedido {
    id: string;
    usuarioId: string;
    direccionId: string,
    productos: ProductoPedido[];
  }
  
  export interface ProductoPedido{
    id: string;
    productoId: string;
    imagen: string;
    cantidad: number;
    precio: number;
  }
  