import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ILoginResponse } from '../../modules/autotech/interfaces/ILogin-response';
import { Router } from '@angular/router';
import { EndpointsUsers } from '../../endpoints/endpoint';
import { IUser } from '../../modules/autotech/interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  #http = inject(HttpClient);
  #router = inject(Router);
  #url = environment.baseUrl;

  // Reactive state using BehaviorSubject
  #currentUserSubject = new BehaviorSubject<IUser | null>(null);
  currentUser$ = this.#currentUserSubject.asObservable(); // Observable for components to subscribe

  #tokenSubject = new BehaviorSubject<string | null>(null);
  token$ = this.#tokenSubject.asObservable(); // Observable for components to subscribe

  constructor() {
    // Initialize the authentication state
    this.initializeAuthState();
  }

  ngOnInit(): void {
  
  }

  private initializeAuthState(): void {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;

    if (storedToken) {
      this.#tokenSubject.next(storedToken);
    }

    if (parsedUser) {
      this.#currentUserSubject.next(parsedUser);
    }
  }

  login(credentials: { email: string; password: string }): Observable<ILoginResponse> {
    const payload = {
      email: credentials.email,
      senha: credentials.password, // Adjust to match your backend
    };

    return this.#http
      .post<ILoginResponse>(`${this.#url}${EndpointsUsers.loginUsuario}`, payload)
      .pipe(
        tap((response) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.usuario));
            this.#tokenSubject.next(response.token); // Update the reactive token state
            this.#currentUserSubject.next(response.usuario); // Update the reactive user state
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.#tokenSubject.next(null); // Clear the token state
    this.#currentUserSubject.next(null); // Clear the user state
    this.#router.navigate(['/login']); // Redirect to login page
  }

  isAuthenticated(): boolean {
    // Check if the user is logged in
    return this.#tokenSubject.value !== null;
  }

  getToken(): string | null {
    return this.#tokenSubject.value;
  }

  getUser(): IUser | null {
    return this.#currentUserSubject.value;
  }

  setUser(user: IUser): void {
    this.#currentUserSubject.next(user); // Update the user state reactively
  }
}
