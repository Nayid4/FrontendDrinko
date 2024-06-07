import { Routes } from '@angular/router'
import { InicioComponent } from './inicio/inicio.component'
import { ProductosComponent } from './productos/productos.component'
import { DetallesDeProductoComponent } from './detalles-de-producto/detalles-de-producto.component'
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component'
import { ResenasComponent } from './resenas/resenas.component'
import { ContactoComponent } from './contacto/contacto.component'
import { PerfilComponent } from './perfil/perfil.component'

export const USUARIO_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'detalles-de-producto', component: DetallesDeProductoComponent },
    { path: 'sobre-nostros', component: SobreNosotrosComponent },
    { path: 'resenas', component: ResenasComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'perfil', component: PerfilComponent },
]