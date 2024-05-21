import {ThemeService} from "../../../services/theme.service";
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  constructor(public themeService: ThemeService) {
  }

  dataSource = [
    {name: 'Gibb Bern', year: '2023 Aug. -.', location: 'Bern', status: 'On going'},
    {name: 'ODATRYA - Bachelor', year: '2016 Sep. - 2018 Jul.', location: 'Odesa, Ukraine', status: 'Closed'},
  ]
  displayedColumns: string[] = ['name', 'year', 'location', 'status'];
}
