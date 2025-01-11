import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth-service.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  #authService = inject(AuthService)
  #router = inject(Router)
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  login() {

    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      console.log(credentials);
      
      if (credentials.email && credentials.password) {
        const result = this.#authService.login({ email: credentials.email, password: credentials.password }).subscribe({
          next: (response) => {
            console.log(response);
            this.#router.navigate(['/home']);
          },
          error: (error) => {
            console.log(error);
          }
        });
      } else {
        console.error('Email e senha são obrigatórios');
      }
    }

  }
}
