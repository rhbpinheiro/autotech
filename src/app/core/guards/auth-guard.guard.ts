import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    // Redireciona para a página home se o usuário já estiver logado
    router.navigate(['/home']);
    return false; // Não permite a ativação da rota atual (login)
  }

  // Permite acesso à página de login se o usuário não estiver autenticado
  return true;
};