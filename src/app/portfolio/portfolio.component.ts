import { Component } from '@angular/core';
import {NgxParallaxModule} from "@yoozly/ngx-parallax";
import {NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ProjectsComponent} from "./projects/projects.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-portfolio-component',
  standalone: true,
  imports: [
    NgxParallaxModule,
    NgClass,
    MatIcon,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    MatButton
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  darkTheme = false;

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    document.body.classList.toggle('dark-theme', this.darkTheme);
  }

  toggleLanguage() {
    // Implement language toggle logic here
  }
}
