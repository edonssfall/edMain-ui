import {LanguageService} from "./core/services/language.service";
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private languageService: LanguageService) {
  }

  ngOnInit() {
    this.languageService.ngOnInit();
  }
}
