import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  educationData = [
    { name: 'Bachelor\'s Degree', start: '2015', status: 'Complete' },
    { name: 'Master\'s Degree', start: '2018', status: 'Ongoing' },
  ];

  displayedColumns: string[] = ['education', 'spacer', 'start', 'status'];
}
