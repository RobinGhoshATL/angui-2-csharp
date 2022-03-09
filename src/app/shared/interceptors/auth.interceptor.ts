import {
    HTTP_INTERCEPTORS,
    HttpEvent,
    HttpErrorResponse,
    HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from "@angular/common/http";
import { AuthService } from "../services/auth/auth.service";
import { Observable, throwError } from "rxjs";
import { map, catchError, mergeMap, flatMap } from "rxjs/operators";
import { Router } from "@angular/router";

const TOKEN_HEADER_KEY = "Authorization";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    user: any;
    constructor(private auth: AuthService, private router: Router) {
        this.user = this.auth.getLoggedInUser();
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // acquire and inject token
        return next.handle(request);
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];