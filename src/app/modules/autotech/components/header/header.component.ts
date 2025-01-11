import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  #authService = inject(AuthService);

  public user = this.#authService.getUser();
}
