import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  private token: string;

  setJwtToken(token: string) {
    this.token = token;
  }

  removeJwtToken() {
    this.token = null;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone({ setHeaders: { 'Authorization': `Bearer ${this.token}` } });
    return this.token ? next.handle(clone) : next.handle(req);
  }
}
