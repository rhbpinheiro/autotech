import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSidebarComponent } from "./modules/autotech/components/nav-sidebar/nav-sidebar.component";
import { HeaderComponent } from "./modules/autotech/components/header/header.component";
import { FooterComponent } from "./modules/autotech/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ],
  template: `<router-outlet></router-outlet>`,

})
export class AppComponent {
  title = 'Autotech';
}
