import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { HomeComponent } from './components/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrl: './app.scss'
})
export class App {
  title = 'My Portfolio';

  ngOnInit() {
    // Import and initialize cursor effect
    import('./cursor-effect').then(({ initCursorEffect }) => {
      initCursorEffect();
    });
  }
}
