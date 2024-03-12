import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent],
  template: `
    <router-outlet />
    <app-login />
  `,
})
export class AppComponent {
  title = 'App';
}

//<router-outlet />
