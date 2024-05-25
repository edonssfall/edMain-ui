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
      subTitel: 'Front-end Angular TypeScript',
      preview: '#home',
      github: 'https://github.com/edonssfall/edMain-ui',
    },
    {
      image: './assets/portfolio/images/microservices.webp',
      subTitel: 'Docker Nginx',
      github: 'https://github.com/edonssfall/edDeplyment',
    },
    {
      image: './assets/portfolio/images/react-chat-app.webp',
      subTitel: 'Front-end React TypeScript',
      preview: '/chats',
      github: 'https://github.com/edonssfall/edChat-ui',
    },
    {
      image: './assets/portfolio/images/django-channels.png',
      subTitel: 'Backend Django Python',
      github: 'https://github.com/edonssfall/edWebsockets-BE',
    },
    {
      image: './assets/portfolio/images/django-authentication.png',
      subTitel: 'Backend Django Python',
      github: 'https://github.com/edonssfall/edAuth-BE',
    },
  ]
}
