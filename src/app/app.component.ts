import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PortfolioComponentComponent} from "./portfolio-component/portfolio-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, PortfolioComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  darkTheme = false;

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    document.body.classList.toggle('dark-theme', this.darkTheme);
  }

  toggleLanguage() {
    // Implement language toggle logic here
  }
}
