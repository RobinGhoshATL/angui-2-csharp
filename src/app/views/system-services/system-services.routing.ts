import { Routes } from '@angular/router';
import { SystemServicesListingComponent } from './system-services-listing/system-services-listing.component';

export const SystemServiceRoutes: Routes = [

    {
    path: '', 
    component: SystemServicesListingComponent, 
    data: { title: 'Default', breadcrumb: 'Default'}
  },

]