import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { CategoriesListComponent } from './pages/categories/categories-list.component/categories-list.component';
import { BrandsListComponent } from './pages/brands/brands-list.component/brands-list.component';
import { BrandsCreateComponent } from './pages/brands/brands-create.component/brands-create.component';
import { ProductsListComponent } from './pages/products/products-list.component/products-list.component';
import { ProductsCreateComponent } from './pages/products/products-create.component/products-create.component';
import { ProductsUpdateComponent } from './pages/products/products-update.component/products-update.component';
import { ProductsDeleteComponent } from './pages/products/products-delete.component/products-delete.component';

export const routes: Routes = [
    {
        path: 'home',
        component: Home // Aquí se especifica el componente que se mostrará cuando la ruta sea 'home'
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'categories',
        component: CategoriesListComponent
    },
    {
        path: 'brands',
        component: BrandsListComponent
    },
    {
        path: 'brands/create',
        component: BrandsCreateComponent
    },
    {
        path: 'products',
        component: ProductsListComponent
    },
    {
        path: 'products/create',
        component: ProductsCreateComponent
    },
    {
        path: 'products/update/:id',
        component: ProductsUpdateComponent
    },
    {
        path: 'products/delete/:id',
        component: ProductsDeleteComponent
    },

    {
        path:'', //Ruta raiz
        redirectTo: 'home', //Redirigir a la ruta home
        pathMatch: 'full' //Hacer que la ruta sea exacta
    },
];
