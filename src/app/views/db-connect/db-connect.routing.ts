import { Routes } from '@angular/router';
import { DbConnectComponent } from './db-connect/db-connect.component';


export const DBConnectRoutes: Routes = [
    {
        path: '', 
        component: DbConnectComponent, 
        data: { title: 'DB Connect', breadcrumb: 'DB Connect'}
      },
]