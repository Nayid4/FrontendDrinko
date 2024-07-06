import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch,HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthService } from './core/services/auth.service';
import { CarritoService } from './core/services/carrito.service';
import { ProductoService } from './core/services/producto.service'; // Importa ProductoService
import { CategoriaService } from './core/services/categoria.service'; // Importa CategoriaService
import { UsuarioService } from './core/services/usuario.service'; // Importa UsuarioService

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    HttpClientModule,
    provideHttpClient(), 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideAnimationsAsync(),
    AuthService,
    CarritoService,
    ProductoService, // Agrega ProductoService
    CategoriaService, // Agrega CategoriaService
    UsuarioService // Agrega UsuarioService
  ]
};
