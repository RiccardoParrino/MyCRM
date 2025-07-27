import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { SaleComponent } from './sale/sale.component';
import { SettingComponent } from './setting/setting.component';

export const routes: Routes = [

    {
        path: 'customers',
        component: CustomerComponent,
        title: "Customers Page"
    },
    {
        path: 'products',
        component: ProductComponent,
        title: "Products Page"
    },
    {
        path: 'sales',
        component: SaleComponent,
        title: "Sales Page"
    },
    {
        path: 'settings',
        component: SettingComponent,
        title: "Settings Page"
    }

];
