import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service.service';
import { authGuard } from './auth-guard.guard';

describe('authGuard', () => {
  let router: jasmine.SpyObj<Router>;
  let authService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    // Criar spies para Router e AuthService
    router = jasmine.createSpyObj('Router', ['navigate']);
    authService = jasmine.createSpyObj('AuthService', ['isAuthenticated']);

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: router },
        { provide: AuthService, useValue: authService }
      ]
    });
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should allow access when user is authenticated', () => {
    authService.isAuthenticated.and.returnValue(true);
    
    const result = authGuard({} as any, {} as any);
    
    expect(result).toBeTrue();
    expect(router.navigate).not.toHaveBeenCalled();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('should redirect to login and return false when user is not authenticated', () => {
    authService.isAuthenticated.and.returnValue(false);
    
    const result = authGuard({} as any, {} as any);
    
    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});