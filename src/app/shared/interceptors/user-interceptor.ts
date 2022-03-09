import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Router } from "@angular/router";
import { from, Observable } from 'rxjs';
import { AuthService } from "../services/auth/auth.service";
import { mergeMap } from 'rxjs/operators';
/** Pass untouched request through to the next request handler. */
@Injectable()
export class UserInterceptor implements HttpInterceptor {
  user: any;

      constructor(
      private auth:AuthService,
      private router: Router
  ) { 
     this.user = this.auth.getLoggedInUser().name;
  }

 intercept(req: HttpRequest<any>, next: HttpHandler) {
    // convert promise to observable using 'from' operator
    return from(this.handle(req, next))
  }

   async handle(req: HttpRequest<any>, next: HttpHandler) {
   const token =  await this.auth.getToken();
   let authorizedRequest = req;
     if (req.url.match(/api\//)) {
          let role = "default";

          if (this.router.url.match(/migrations\//)){
            role = "migration";
         }
         if (this.router.url.match(/clients/)) {
             role = "clients";
         }
          authorizedRequest = authorizedRequest.clone({
              setHeaders: {
                'Authorization':'Bearer ' + token,
                "User": this.user,
                  "Role": role,
                  "Content-Type": "application/json; charset=utf-8"
              }
            });
        }
    // Important: Note the .toPromise()
    return next.handle(authorizedRequest).toPromise()
  }     
}