import { CommonModule, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IMenuItem } from '../../interfaces/IMenu-item';
import { MenuItemComponent } from "../menu-item/menu-item.component";

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './nav-sidebar.component.html',
  styleUrl: './nav-sidebar.component.scss'
})
export class NavSidebarComponent {
  public showSidebar = signal(false)



}
