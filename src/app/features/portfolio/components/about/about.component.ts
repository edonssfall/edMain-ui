import {ITable} from "../../interfaces/about.interface";
import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  workExperience: ITable[] = [
    {name: 'TIE International Bern', year: '2023 Aug. -.', location: 'Deiswill, Bern', status: 'On going'},
    {name: 'Immo View', year: '2023 Feb. - 2023 Jul.', location: 'Online, Ukraine', status: 'Closed'},
  ]

  educationExperience: ITable[] = [
    {name: 'Gibb Bern', year: '2023 Aug. -.', location: 'Bern', status: 'On going'},
    {name: 'ODATRYA - Bachelor', year: '2016 Sep. - 2018 Jul.', location: 'Odesa, Ukraine', status: 'Closed'},
  ]
}
