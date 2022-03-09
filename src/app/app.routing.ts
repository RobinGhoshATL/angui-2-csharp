import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { AuthGuard } from "./shared/services/auth/auth.guard";
import { MsalGuard } from "@azure/msal-angular";
import { UserRoleGuard } from "./shared/guards/user-role.guard";

export const rootRouterConfig: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
    },
    {
        path: "",
        component: AuthLayoutComponent,
        children: [
            {
                path: "sessions",
                loadChildren: () =>
                    import("./views/sessions/sessions.module").then(
                        (m) => m.SessionsModule
                    ),
                data: { title: "Session" },
            },
        ],
    },
    {
        path: "",
        component: AdminLayoutComponent,
        canActivate: [MsalGuard],
        children: [
            {
                path: "dashboard",
                children: [
                    {
                        path: "",
                        redirectTo: "default",
                        pathMatch: "full",
                    },
                    {
                        path: "default",
                        loadChildren: () =>
                            import("./views/dashboard/dashboard.module").then(
                                (m) => m.DashboardModule
                            ),
                        data: { title: "Dashboard", breadcrumb: "DASHBOARD" },
                    },
                    {
                        path: "profile",
                        loadChildren: () =>
                            import("./views/profile/profile.module").then(
                                (m) => m.ProfileModule
                            ),
                        data: { title: "Profile", breadcrumb: "PROFILE" },
                    },
                     
                    {
                        path: "system-services",
                        loadChildren: () =>
                            import("./views/system-services/system-services.module").then(
                                (m) => m.SystemServicesModule
                            ),
                        data: {
                            title: "System Services",
                            breadcrumb: "System Services",
                            roles: ["admin", "user"],
                        },
                    },                   
                    {
                        path: "ps-scripts",
                        loadChildren: () =>
                            import("./views/ps-scripts/ps-scripts.module").then(
                                (m) => m.PsScriptsModule
                            ),
                        data: {
                            title: "PS Scripts",
                            breadcrumb: "PS Scripts",
                            roles: ["admin", "user"],
                        },
                    },                   
                    {
                        path: "db-connect",
                        loadChildren: () =>
                            import("./views/db-connect/db-connect.module").then(
                                (m) => m.DbConnectModule
                            ),
                        data: {
                            title: "DB Connect",
                            breadcrumb: "DB Connect",
                            roles: ["admin", "user"],
                        },
                    },                    
                   
                ],
            },
        ],
    },

    {
        path: "**",
        redirectTo: "sessions/404",
    },
];
