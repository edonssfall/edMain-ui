import {ThemeService} from "../../services/theme.service";
import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(public themeService: ThemeService,
              private eRef: ElementRef) {
  }

  toggleTheme() {
    this.themeService.changeTheme(!this.themeService.currentTheme.isDark)
    document.body.classList.toggle('dark-theme', !this.themeService.currentTheme.isDark);
    this.sidenav.close();
  }

  changeLanguage(language: string) {
    // Implement language change logic here
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (this.sidenav.opened && !this.eRef.nativeElement.contains(event.target)) {
      this.sidenav.close();
    }
  }
}
