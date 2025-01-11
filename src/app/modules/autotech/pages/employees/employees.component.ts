import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../../../services/users/user-service.service';
import { IUser } from '../../interfaces/IUser';
import { TableComponentComponent } from '../../components/table-component/table-component.component';

@Component({
  selector: 'app-employees',
  standalone: true, 
  imports: [TableComponentComponent],
  template: `
    <div class="employees-container">
      <h1>Funcionários</h1>
      <app-data-table
      [data]="userList()"
      [columns]="columns">
      ></app-data-table>
    </div>
  `,
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {

  columns = [
    { key: 'id', label: 'ID', suffix: 'id'  },
    { key: 'nome', label: 'Nome', suffix: 'nome'  },
    { key: 'email', label: 'Email', suffix: 'email' },
    { key: 'cargo', label: 'Cargo', suffix: 'cargo' },
    { key: 'cpf', label: 'CPF', suffix: 'cpf' },
  ];
  #userService = inject(UserService);
  public userList = signal<IUser[]>([]);

  // Configuração dinâmica das colunas


  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers() {
    this.#userService.getUsers().subscribe({
      next: (response) => {
        this.userList.set(response);
        console.log(this.userList());
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
