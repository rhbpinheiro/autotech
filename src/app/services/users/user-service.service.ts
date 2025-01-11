import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { IUser } from '../../modules/autotech/interfaces/IUser';
import { map, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EndpointsUsers } from '../../endpoints/endpoint';
import { AuthService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  #http = inject(HttpClient);
  #authService = inject(AuthService);
  #url = environment.baseUrl;
  #token = this.#authService.getToken();

  getUsers(): Observable<IUser[]> {
    return this.#http.get<IUser[]>(`${this.#url}${EndpointsUsers.listarUsuarios}`, {
      headers: {
        Authorization: `Bearer ${this.#token}`,
      },
    }).pipe(
      tap((response) => {

        return response

      })
    );

  }
}
