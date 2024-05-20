import {Component, HostListener, OnInit} from '@angular/core';
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  isScrollToTopVisible = false;

  constructor(public themeService: ThemeService) {
  }

  ngOnInit() {
    this.themeService.ngOnInit();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 400) {
      this.isScrollToTopVisible = true;
    } else if (this.isScrollToTopVisible && window.pageYOffset || document.body.scrollTop < 10) {
      this.isScrollToTopVisible = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
