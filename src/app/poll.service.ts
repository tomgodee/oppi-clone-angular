import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ADMIN_ACCESS_TOKEN } from '../constants/localStorage';
import { PollListInterface, PollResultInterface, PollRow } from '../types/types';

interface Query {
  search: string;
}

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private BASE_URL = 'https://dev.oppi.live';

  constructor(
    private http: HttpClient) { }

  getPollList(query?: Query): Observable<PollListInterface> {
    const adminAccessToken = localStorage.getItem(ADMIN_ACCESS_TOKEN);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${adminAccessToken}`
      }),
    };
    return this.http.get<PollListInterface>(
      `${this.BASE_URL}/api/admin/v1/polls?offset=0&limit=10&direction=desc&search=${query?.search || ''}`,
      httpOptions
    );
  }

  getPollResult(id: number): Observable<PollResultInterface> {
    const adminAccessToken = localStorage.getItem(ADMIN_ACCESS_TOKEN);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${adminAccessToken}`
      }),
    };
    return this.http.get<PollResultInterface>(
      `${this.BASE_URL}/api/admin/v1/polls/${id}/result`,
      httpOptions
    );
  }

  updatePollDetail(id: number, data: any): Observable<PollRow> {
    const adminAccessToken = localStorage.getItem(ADMIN_ACCESS_TOKEN);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${adminAccessToken}`
      }),
    };
    return this.http.put<PollRow>(
      `${this.BASE_URL}/api/admin/v1/polls/${id}`,
      Object.assign(
        data, {
          _method: "put",
          hero_image_id: 0,
          is_public_result: true,
          is_require_email: true,
          type: "public"
        }
      ),
      httpOptions,
    );
  }
}
