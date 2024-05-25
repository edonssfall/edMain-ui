import {ITable} from "../../interfaces/about.interface";
import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  workExperience: ITable[] = [
    {name: 'TIE International Bern', link: 'https://tie.international/', year: '2023 Aug. -.', location: 'Deiswill, Bern', status: 'ongoing'},
    {name: 'Immo View', year: '2023 Feb. - 2023 Jul.', location: 'Online, Ukraine', status: 'completed'},
  ]

  educationExperience: ITable[] = [
    {name: 'Gibb Bern', link: 'https://gibb.ch/', year: '2023 Aug. -.', location: 'Bern', status: 'ongoing'},
    {name: 'ODATRYA - Bachelor', year: '2016 Sep. - 2018 Jul.', location: 'Odesa, Ukraine', status: 'completed'},
  ]
}
