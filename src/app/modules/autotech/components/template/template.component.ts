import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { NavSidebarComponent } from "../nav-sidebar/nav-sidebar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavSidebarComponent, FooterComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

}
