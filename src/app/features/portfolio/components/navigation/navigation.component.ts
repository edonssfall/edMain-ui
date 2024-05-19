import {ThemeService} from "../../services/theme.service";
import {Component} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(public themeService: ThemeService) {
  }

  toggleTheme() {
    const isDarkTheme = !this.themeService.currentTheme.isDark;
    this.themeService.changeTheme(isDarkTheme)
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }

  changeLanguage(language: string) {
    // Implement language change logic here
  }
}
