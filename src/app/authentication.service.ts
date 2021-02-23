import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface SigninInterface {
  email: string;
  id: number;
  token: string;
}

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
}
