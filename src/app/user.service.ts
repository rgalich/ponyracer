import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject , Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { JwtInterceptorService } from './jwt-interceptor.service';

import { UserModel } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userEvents = new BehaviorSubject<UserModel>(undefined);

  constructor(private http: HttpClient, private jwtInterceptorService: JwtInterceptorService) {
  }

  register(login: string, password: string, birthYear: number): Observable<UserModel> {
    const body = { login, password, birthYear };
    return this.http.post<UserModel>(`${environment.baseUrl}/api/users`, body);
  }

  authenticate(credentials: { login: string; password: string }): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.baseUrl}/api/users/authentication`, credentials).pipe(
      tap((user: UserModel) => this.storeLoggedInUser(user))
    );
  }

  storeLoggedInUser(user: UserModel) {
    window.localStorage.setItem('rememberMe', JSON.stringify(user));
    this.userEvents.next(user);
    this.jwtInterceptorService.setJwtToken(user.token);
  }

  retrieveUser() {
    const userString = window.localStorage.getItem('rememberMe');
    if (userString) {
      const user: UserModel = JSON.parse(userString);
      this.jwtInterceptorService.setJwtToken(user.token);
      this.userEvents.next(user);
    }
  }

  logout() {
    window.localStorage.removeItem('rememberMe');
    this.jwtInterceptorService.removeJwtToken();
    this.userEvents.next(null);
  }

}
