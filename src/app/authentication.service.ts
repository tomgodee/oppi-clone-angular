import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ADMIN_ACCESS_TOKEN } from '../constants/localStorage';
import { SigninInterface, UserInterface } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private BASE_URL = 'https://dev.oppi.live';

  constructor(
    private http: HttpClient) { }

  signin(email: string, password: string): Observable<SigninInterface> {
    return this.http.post<SigninInterface>(`${this.BASE_URL}/api/admin/v1/auth/signin`, {
      email,
      password,
    });
  }

  getCurrentUserInfo():  Observable<UserInterface> {
    const adminAccessToken = localStorage.getItem(ADMIN_ACCESS_TOKEN);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${adminAccessToken}`
      }),
    };
    return this.http.get<UserInterface>(`${this.BASE_URL}/api/admin/v1/me`, httpOptions);
  }
}
