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
      description: 'Developed a personal portfolio using Angular, featuring support for two languages and a dark mode toggle. Implemented internationalization to ensure content is accessible in multiple languages. Enhanced user experience with a sleek, modern design and seamless dark mode transition.',
      preview: '#home',
      github: 'https://github.com/edonssfall/edMain-ui',
    },
    {
      image: './assets/portfolio/images/microservices.webp',
      title: 'Microservice Architecture',
      subTitel: 'Docker Nginx',
      description: 'Built a microservice architecture using Docker-Compose and Nginx. The setup includes two backend services (WebSockets for real-time communication and an API for authentication) and two frontend services (a portfolio site and a real-time chat application). Ensured smooth communication and load balancing between services.', github: 'https://github.com/edonssfall/edDeplyment',
    },
    {
      image: './assets/portfolio/images/react-chat-app.webp',
      title: 'React Chat App TypeScript',
      subTitel: 'Front-end React',
      description: 'Created a chat application using React, providing a user-friendly interface for real-time messaging. Incorporated state management and component-based architecture to ensure efficient and responsive interactions. Focused on delivering a seamless chat experience with dynamic updates and smooth performance.',
      preview: '/chats',
      github: 'https://github.com/edonssfall/edChat-ui',
    },
    {
      image: './assets/portfolio/images/django-channels.png',
      title: 'Django Channels',
      subTitel: 'Backend Django Python',
      description: 'Implemented a real-time chat application using Django Channels. Leveraged WebSockets to facilitate instant communication between users. Ensured scalability and performance, enabling multiple users to engage in live conversations simultaneously.',
      github: 'https://github.com/edonssfall/edWebsockets-BE',
    },
    {
      image: './assets/portfolio/images/django-authentication.png',
      title: 'Django Authentication',
      subTitel: 'Backend Django Python',
      description: 'Developed an authentication system using Django and Django REST Framework. Provided secure user registration, login, and token-based authentication for API access. Focused on building a robust and secure backend to manage user data and authentication processes efficiently.',
      github: 'https://github.com/edonssfall/edAuth-BE',
    },
  ]
}
