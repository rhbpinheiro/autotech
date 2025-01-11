// import { TestBed } from '@angular/core/testing';
// import { AuthService } from './auth-service.service';


// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { environment } from '../../../environments/environment';
// import { ILoginResponse } from '../../modules/autotech/interfaces/ILogin-response';


// describe('AuthService', () => {
//   let service: AuthService;
//   let httpMock: HttpTestingController;
//   const baseUrl = environment.baseUrl;

//   beforeEach(() => {
//     // Limpa o localStorage antes de cada teste
//     localStorage.clear();

//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [AuthService]
//     });

//     service = TestBed.inject(AuthService);
//     httpMock = TestBed.inject(HttpTestingController);
//   });

//   afterEach(() => {
//     // Verifica se não há requisições pendentes após cada teste
//     httpMock.verify();
//     localStorage.clear();
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   describe('login', () => {
//     it('should authenticate user and store token', () => {
//       const credentials = {
//         email: 'testuser',
//         password: 'testpass'
//       };

//       const mockResponse: ILoginResponse = {
//         token: 'fake-jwt-token',
//         usuario: {
//           id: '1',
//           nome: 'Test User',
//           cargo: 'Developer',
//           cpf: '123.456.789-00',
//           datacontratacao: new Date(),
//           email: 'test@example.com',
//           nivel_acesso: 'admin',
//           senha: '',
//           codigo: 123,
//           created_at: new Date(),
//           updated_at: new Date(),
//           imagem_usuario: null
//         }
//       };

//       // service.login(credentials).subscribe(response => {
//       //   expect(response).toEqual(mockResponse);
//       //   expect(service.isAuthenticated()).toBeTrue();
//       //   expect(service.getToken()).toBe('fake-jwt-token');
//       //   expect(localStorage.getItem('token')).toBe('fake-jwt-token');
//       // });

//       const req = httpMock.expectOne(`${baseUrl}/login`);
//       expect(req.request.method).toBe('POST');
//       expect(req.request.body).toEqual(credentials);
//       req.flush(mockResponse);
//     });

//     it('should handle login error', () => {
//       const credentials = {
//         email: 'testuser',
//         password: 'wrong-password'
//       };

//       // service.login(credentials).subscribe({
//       //   error: error => {
//       //     expect(error.status).toBe(401);
//       //     expect(service.isAuthenticated()).toBeFalse();
//       //     expect(service.getToken()).toBeNull();
//       //     expect(localStorage.getItem('token')).toBeNull();
//       //   }
//       // });

//       const req = httpMock.expectOne(`${baseUrl}/login`);
//       req.flush('Invalid credentials', { 
//         status: 401, 
//         statusText: 'Unauthorized'
//       });
//     });
//   });

//   describe('logout', () => {
//     it('should clear token and authentication state', () => {
//       // Primeiro simula um login
//       localStorage.setItem('token', 'fake-jwt-token');
//       service['token'].set('fake-jwt-token');
//       service['isLoggedIn'].set(true);

//       // Executa logout
//       service.logout();

//       // Verifica se tudo foi limpo
//       expect(service.isAuthenticated()).toBeFalse();
//       expect(service.getToken()).toBeNull();
//       expect(localStorage.getItem('token')).toBeNull();
//     });
//   });

//   describe('isAuthenticated', () => {
//     it('should return true when user is logged in', () => {
//       service['isLoggedIn'].set(true);
//       expect(service.isAuthenticated()).toBeTrue();
//     });

//     it('should return false when user is not logged in', () => {
//       service['isLoggedIn'].set(false);
//       expect(service.isAuthenticated()).toBeFalse();
//     });
//   });

//   describe('constructor', () => {
//     it('should restore authentication state from localStorage', () => {
//       // Simula um token existente no localStorage
//       localStorage.setItem('token', 'existing-token');

//       // Cria uma nova instância do serviço
//       const newService = TestBed.inject(AuthService);

//       // Verifica se o estado foi restaurado corretamente
//       expect(newService.isAuthenticated()).toBeTrue();
//       expect(newService.getToken()).toBe('existing-token');
//     });

//     it('should start unauthenticated when no token in localStorage', () => {
//       // Garante que não há token no localStorage
//       localStorage.clear();

//       // Cria uma nova instância do serviço
//       const newService = TestBed.inject(AuthService);

//       // Verifica se o estado inicial está correto
//       expect(newService.isAuthenticated()).toBeFalse();
//       expect(newService.getToken()).toBeNull();
//     });
//   });
// });