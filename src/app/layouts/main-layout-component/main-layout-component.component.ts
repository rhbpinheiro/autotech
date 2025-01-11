import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FooterComponent } from '../../modules/autotech/components/footer/footer.component';
import { HeaderComponent } from '../../modules/autotech/components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { NavSidebarComponent } from '../../modules/autotech/components/nav-sidebar/nav-sidebar.component';
import { AuthService } from '../../services/auth/auth-service.service';
import { IUser } from '../../modules/autotech/interfaces/IUser';

@Component({
  selector: 'app-main-layout-component',
  standalone: true,
  imports: [ RouterOutlet, NavSidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './main-layout-component.component.html',
  styleUrl: './main-layout-component.component.scss'
})
export class MainLayoutComponentComponent {
  
}
