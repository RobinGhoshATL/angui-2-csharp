import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "../services/auth/auth.service";

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private router: Router, 
    private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userRoles = this.authService.getRoles();
    if (route.data.roles.some((role) => userRoles.includes(role))) {
      return true;
    } else {
      this.router.navigate(['sessions/access-denied']);
      return false;
    }
  }
}
