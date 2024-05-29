import {LanguageService} from "../../../../core/services/language.service";
import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {ScrollService} from "../../services/scroll.service";
import {ThemeService} from "../../services/theme.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private languageService: LanguageService,
              public themeService: ThemeService,
              private eRef: ElementRef,
              public scrollService: ScrollService) {
  }

  toggleTheme() {
    this.themeService.changeTheme(!this.themeService.currentTheme.isDark)
    document.body.classList.toggle('dark-theme', !this.themeService.currentTheme.isDark);
    this.sidenav.close();
  }

  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
    this.sidenav.close();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (this.sidenav.opened && !this.eRef.nativeElement.contains(event.target)) {
      this.sidenav.close();
    }
  }

  protected readonly scroll = scroll;
}
