import Home        from './views/Home'
import Productos   from './views/Productos'
import Producto    from './views/Producto'
import Exportacion from './views/Exportacion'
import Produccion  from './views/Produccion' 
import Contacto    from './views/Contacto'

export default {
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/productos',
            name: 'productos',
            component: Productos
        },
        {
            path: '/productos/:name',
            name: 'producto',
            component: Producto
        },
        {
            path: '/exportacion',
            name: 'exportacion',
            component: Exportacion
        },
        {
            path: '/produccion',
            name: 'produccion',
            component: Produccion
         },
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto
        },
    ]
}
