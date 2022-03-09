import { Routes } from "@angular/router";
import { DefaultDashboardComponent } from "./default-dashboard/default-dashboard.component";
import { UserRoleGuard } from "./../../shared/guards/user-role.guard";

export const DashboardRoutes: Routes = [
  {
    path: "",
    component: DefaultDashboardComponent,
    data: { title: "Default", breadcrumb: "Default" }
  }, 
];
