import { HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = localStorage.getItem('mycrm-jwt-token');

  const authReq = token ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    }
  }) : req;

  
  return next(authReq).pipe(
    catchError( err => {
      if (err.status === 403) {
        authService.logout();
        router.navigate(['/login']);
      }

      return throwError(() => err);
    })
  );
};