import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserModel } from './models/user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userEvents = new Subject<UserModel>();

  constructor(private http: HttpClient) { }

  register(login: string, password: string, birthYear: number): Observable<any> {
    const body = {
      login,
      password,
      birthYear
    };

    const baseUrl = 'http://ponyracer.ninja-squad.com';

    return this.http.post(`${baseUrl}/api/users`, body);
  }

  authenticate(credentials: { login: string; password: string }): Observable<UserModel> {
    return this.http.post<UserModel>('http://ponyracer.ninja-squad.com/api/users/authentication', credentials).pipe(
      tap((user: UserModel) => this.userEvents.next(user))
    );
  }
}
