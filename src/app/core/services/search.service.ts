// search.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private busquedaActualSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  busquedaActual$: Observable<string> = this.busquedaActualSubject.asObservable();

  constructor() {}

  actualizarBusqueda(busqueda: string): void {
    this.busquedaActualSubject.next(busqueda);
  }

  obtenerBusquedaActual(): Observable<string> {
    return this.busquedaActual$;
  }
}
