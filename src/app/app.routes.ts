import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard.guard';
import { MainLayoutComponentComponent } from './layouts/main-layout-component/main-layout-component.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./modules/autotech/pages/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
 
  },
  {
    path: '',
    component: MainLayoutComponentComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./modules/autotech/pages/home/home.component')
          .then(m => m.HomeComponent)
      },
      {
        path: '',
        title: 'Home',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'clients',
        title: 'Clientes',
        loadComponent: () => import('./modules/autotech/pages/clients/clients.component')
          .then(m => m.ClientsComponent)
      },
      {
        path: 'products',
        title: 'Produtos',
        loadComponent: () => import('./modules/autotech/pages/products/products.component')
          .then(m => m.ProductsComponent)
      },
      {
        path: 'purchases',
        title: 'Compras',
        loadComponent: () => import('./modules/autotech/pages/purchases/purchases.component')
          .then(m => m.PurchasesComponent)
      },
      {
        path: 'sales',
        title: 'Vendas',
        loadComponent: () => import('./modules/autotech/pages/sales/sales.component')
          .then(m => m.SalesComponent)
      },
      {
        path: 'settings',
        title: 'Configurações',
        loadComponent: () => import('./modules/autotech/pages/settings/settings.component')
          .then(m => m.SettingsComponent)
      },
      {
        path: 'suppliers',
        title: 'Fornecedores',
        loadComponent: () => import('./modules/autotech/pages/suppliers/suppliers.component')
          .then(m => m.SuppliersComponent)
      },
      {
        path: 'employees',
        title: 'Funcionários',
        loadComponent: () => import('./modules/autotech/pages/employees/employees.component')
          .then(m => m.EmployeesComponent)
      },
      {
        path: 'inventory',
        title: 'Estoque',
        loadComponent: () => import('./modules/autotech/pages/inventory/inventory.component')
          .then(m => m.InventoryComponent)
      },
      {
        path: 'reports',
        title: 'Relatorios',
        loadComponent: () => import('./modules/autotech/pages/reports/reports.component')
          .then(m => m.ReportsComponent)
      },
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./modules/autotech/pages/not-found/not-found.component')
      .then(m => m.NotFoundComponent)
  },

];