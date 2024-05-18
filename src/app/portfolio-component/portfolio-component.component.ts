import { Component } from '@angular/core';
import {HomeComponentComponent} from "./home-component/home-component.component";
import {AboutComponentComponent} from "./about-component/about-component.component";
import {ProjectsComponentComponent} from "./projects-component/projects-component.component";

@Component({
  selector: 'app-portfolio-component',
  standalone: true,
  imports: [
    HomeComponentComponent,
    AboutComponentComponent,
    ProjectsComponentComponent
  ],
  templateUrl: './portfolio-component.component.html',
  styleUrl: './portfolio-component.component.css'
})
export class PortfolioComponentComponent {

}
