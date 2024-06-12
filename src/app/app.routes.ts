import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./Pages/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'usuario',
        loadChildren: () => import('./Pages/usuario/usuario.routes').then(m => m.USUARIO_ROUTES)
    },
    {
        path: 'administrador',
        loadChildren: () => import('./Pages/administrador/administrador.routes').then(m => m.ADMINISTRADOR_ROUTES)
    },
    {
        path: 'inicio', // Redirigir '/inicio' a '/usuario/inicio'
        redirectTo: 'usuario/inicio',
        pathMatch: 'full'
    }
];
