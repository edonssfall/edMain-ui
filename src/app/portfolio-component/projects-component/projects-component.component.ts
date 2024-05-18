import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-projects-component',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './projects-component.component.html',
  styleUrl: './projects-component.component.css'
})
export class ProjectsComponentComponent {
  projects = [
    { name: 'Project One', description: 'Description of project one', link: 'http://link-to-project-one.com' },
    { name: 'Project Two', description: 'Description of project two', link: 'http://link-to-project-two.com' },
    // Add more projects as needed
  ];
}
