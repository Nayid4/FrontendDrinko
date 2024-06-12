import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = 'https://localhost:7248/carrito-de-compras'; // URL base de tu API

  constructor(private http: HttpClient) { }

  obtenerCarritos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtenerCarritoPorId(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  crearCarrito(carrito: any): Observable<any> {
    return this.http.post(this.apiUrl, carrito);
  }

  actualizarCarrito(id: string, carrito: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, carrito);
  }

  eliminarCarrito(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  agregarProducto(carritoId: string, producto: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregar-producto`, { idCarrito: carritoId, ...producto });
  }

  eliminarProducto(carritoId: string, productoCarritoId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/eliminar-producto`, { carritoId, productoCarritoId });
  }
}
