import { Component, signal } from '@angular/core';
import { IMenuItem } from '../../interfaces/IMenu-item';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  public listMenuItems = signal<IMenuItem[]>([
    // {
    //   path: '',
    //   name: 'Home',
    //   icon: 'assets/icons/home.svg',
    //   active: true
    // },
    {
      path: 'clients',
      name: 'Clientes',
      icon: 'assets/icons/mdi--users.svg',
      active: false
    },
    {
      path: 'products',
      name: 'Produtos',
      icon: 'assets/icons/shopping-bag.svg',
      active: false
    } ,
    {
      path: 'suppliers',
      name: 'Fornecedores',
       icon: 'assets/icons/mdi--truck.svg',
      active: false
    },
    {
      path: 'employees',
      name: 'Funcionários',
       icon: 'assets/icons/mdi--briefcase.svg',
      active: false
    },
    {
      path: 'sales',
      name: 'Vendas',
       icon: 'assets/icons/mdi--credit-card.svg',
      active: false
    },
    {
      path: 'purchases',
      name: 'Compras',
       icon: 'assets/icons/mdi--shopping-cart.svg',
      active: false
    },
    {
      path: 'inventory',  
      name: 'Estoque',
       icon: 'assets/icons/mdi--box-outline.svg', 
      active: false
    },
    {
      path: 'reports',
      name: 'Relatórios',
       icon: 'assets/icons/mdi--chart-bar.svg',
      active: false
    },
    {
      path: 'settings',
      name: 'Configurações',
       icon: 'assets/icons/mdi--cog.svg',
      active: false
    }   
    
  ]); 


}
