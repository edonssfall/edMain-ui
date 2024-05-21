import {IProjects} from "../../interfaces/projects.interface";
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

  dataSource: IProjects[] = [
    {
      image: './assets/portfolio/images/angular-17.svg',
      title: 'Angular Portfolio',
      subTitel: 'Front-end Angular TypeScript',
      description: 'Description 1',
      github: 'https://github.com/edonssfall/edMain-ui',
    },
    {
      image: './assets/portfolio/images/microservices.webp',
      title: 'Microservice Architecture',
      subTitel: 'Docker Nginx',
      description: 'Description 3',
      github: 'https://github.com/edonssfall/edDeplyment',
    },
    {
      image: './assets/portfolio/images/react-chat-app.webp',
      title: 'React Chat App TypeScript',
      subTitel: 'Front-end React',
      description: 'Description 1',
      github: 'https://github.com/edonssfall/edChat-ui',
    },
    {
      image: './assets/portfolio/images/django-channels.png',
      title: 'Django Channels',
      subTitel: 'Backend Django Python',
      description: 'Description 2',
      github: 'https://github.com/edonssfall/edWebsockets-BE',
    },
    {
      image: './assets/portfolio/images/django-authentication.png',
      title: 'Django Authentication',
      subTitel: 'Backend Django Python',
      description: 'Description 1',
      github: 'https://github.com/edonssfall/edAuth-BE',
    },
  ]
}
