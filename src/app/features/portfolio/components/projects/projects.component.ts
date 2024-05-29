import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {IProjects} from "../../interfaces/projects.interface";
import {ScrollService} from "../../services/scroll.service";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projectsSection') projectsSection!: ElementRef;

  constructor(public themeService: ThemeService,
              private scrollService: ScrollService) {
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
      image: './assets/portfolio/images/django-authentication.png',
      subTitel: 'Backend Django Python PostgreSQL',
      github: 'https://github.com/edonssfall/edAuth-BE',
    },
    {
      image: './assets/portfolio/images/django-channels.png',
      subTitel: 'Backend Django Python Redis',
      github: 'https://github.com/edonssfall/edWebsockets-BE',
    },
    {
      image: './assets/portfolio/images/gesunde-tomogochis.png',
      subTitel: 'HTML CSS JavaScript',
      preview: 'https://edonssfall.github.io/GesundeTomagochis/index.html',
      github: 'https://github.com/edonssfall/GesundeTomagochis',
    },
    {
      image: './assets/portfolio/images/imdb.jpg',
      subTitel: 'Vue JavaScript Python Django PostgreSQL Docker Nginx',
      github: 'https://github.com/edonssfall/IMDB',
    }
  ]

  ngAfterViewInit() {
    this.scrollService.projectsSection = this.projectsSection.nativeElement;
  }
}
