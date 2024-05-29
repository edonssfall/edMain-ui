import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {ContactService} from "../../services/contact.service";
import {ScrollService} from "../../services/scroll.service";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('homeSection') homeSection!: ElementRef;
  currentIndex = 0;
  textArray = ['web', 'backend', 'student', 'designer'];

  constructor(private scrollService: ScrollService,
              public contactService: ContactService,
              public themeService: ThemeService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = Math.floor(Math.random() * (this.textArray.length));
    }, 3000);
  }

  ngAfterViewInit() {
    this.scrollService.homeSection = this.homeSection.nativeElement;
  }

  protected readonly environment = environment;
}
