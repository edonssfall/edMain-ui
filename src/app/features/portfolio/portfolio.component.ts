import {ThemeService} from "./services/theme.service";
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor(public themeService: ThemeService) {
  }

  ngOnInit() {
    this.themeService.ngOnInit();
  }
}
