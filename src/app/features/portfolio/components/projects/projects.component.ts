import {ThemeService} from "../../services/theme.service";
import {Component} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(public themeService: ThemeService) {
  }
  dataSource = [
    {image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', title: 'Project 3', year: '2024', description: 'Description 3'},
    {image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', title: 'Project 2', year: '2024', description: 'Description 2'},
    {image: 'https://material.angular.io/assets/img/examples/shiba2.jpg', title: 'Project 1', year: '2023', description: 'Description 1'},
  ]
}
