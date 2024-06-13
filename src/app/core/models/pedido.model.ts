export interface Pedido {
    id: string;
    usuarioId: string;
    direccionId: string,
    productosPedido: ProductoPedido[];
  }
  
  export interface ProductoPedido{
    id: string;
    pedidoId: string;
    productoId: string;
    imagen: string;
    cantidad: number;
    precio: number;
  }
  