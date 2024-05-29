import {ThemeService} from "../../../services/theme.service";
import {Component} from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrl: './me.component.css'
})
export class MeComponent {

  constructor(public themeService: ThemeService) {
  }

}
