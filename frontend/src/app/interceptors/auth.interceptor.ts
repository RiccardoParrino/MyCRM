import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, catchError, filter, finalize, switchMap, take, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);
  let accesstoken = authService.getAccessToken();
  const tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  let isRefreshing = false;

  const authReq = accesstoken ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${accesstoken}`,
    }
  }) : req;

  
  return next(authReq).pipe(
    catchError( (error) => {
      if ( error.status === 403 ) {
        accesstoken = null;
        localStorage.removeItem('mycrm-jwt-token');
        localStorage.removeItem('mycrm-refresh-token');
        router.navigate(['login']);
        // return handle403Error(error);
      }
      return throwError(()=>error);
    })
  );

  function handle403Error(error:any) {
    if (!authService.isRefreshing) {
      isRefreshing = true;
      tokenSubject.next(null);

      return authService.refreshToken().pipe(
        switchMap( (tokens:any) => {
          console.log(tokens);
          if (tokens) {
            tokenSubject.next(tokens.accessToken);
            return next(addToken(req, tokens.accessToken));
          }
          return throwError(() => new Error('No access token in refresh response'));
        } ),
        catchError(err => {
          return throwError( () => err )
        }),
        finalize( () => {
          isRefreshing = false;
        } )
      )
    } else {
      return tokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next(addToken(req, token!));
        })
      );
    }
  }

  function addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
};