import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, delay, of, switchMap } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer YourAuthTokenHere'),
      url: `http://localhost:5000${request.url}`,
    });

    // return next.handle(modifiedRequest);
    return of(null).pipe(
      delay(1000),
      switchMap(() => next.handle(modifiedRequest))
    );
  }
}
