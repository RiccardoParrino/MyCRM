import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { SaleComponent } from './sale/sale.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [

    {   path: '',
        redirectTo: 'login', 
        pathMatch: 'full' 
    },
    {
        path: 'login',
        component: LoginComponent,
        title: "Login Page",
    },
    {
        path:'registration',
        component: RegistrationComponent,
        title: "Registration Page"
    },
    {
        path: 'customers',
        component: CustomerComponent,
        title: "Customers Page",
        canActivate: [authGuard]
    },
    {
        path: 'products',
        component: ProductComponent,
        title: "Products Page",
        canActivate: [authGuard]
    },
    {
        path: 'sales',
        component: SaleComponent,
        title: "Sales Page",
        canActivate: [authGuard]
    },
    {
        path: 'settings',
        component: SettingComponent,
        title: "Settings Page",
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    }

];
