import {ThemeService} from "../../../services/theme.service";
import {ITable} from "../../../interfaces/about.interface";
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() dataSource: ITable[] = [];
  displayedColumns: string[] = ['name', 'year', 'location', 'status'];

  constructor(public themeService: ThemeService) {
  }
}
