import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ScrollService} from "../../services/scroll.service";
import {environment} from "../../../../environments/environment";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('homeSection') homeSection!: ElementRef;

  showNotification = false;
  notificationMessage = '';
  text = 'web';
  currentIndex = 0;
  textArray = ['web', 'backend', 'student', 'designer'];

  constructor(private scrollService: ScrollService,
              public themeService: ThemeService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = Math.floor(Math.random() * (this.textArray.length));
      this.text = this.textArray[this.currentIndex];
    }, 3000);
  }

  ngAfterViewInit() {
    this.scrollService.homeSection = this.homeSection.nativeElement;
  }

  protected readonly environment = environment;
}
