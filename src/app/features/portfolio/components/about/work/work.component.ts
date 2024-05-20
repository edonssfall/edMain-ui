import {Component} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  dataSource = [
    {name: 'TIE International Bern', year: '2023 Aug. -.', location: 'Deiswill, Bern', status: 'On going'},
    {name: 'Immo View', year: '2023 Feb. - 2023 Jul.', location: 'Online, Ukraine', status: 'Closed'},
  ]
  displayedColumns: string[] = ['name', 'year', 'location', 'status'];
}
