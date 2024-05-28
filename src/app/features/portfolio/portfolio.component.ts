import {Component, HostListener, OnInit} from '@angular/core';
import {ContactService} from "./services/contact.service";
import {ScrollService} from "./services/scroll.service";
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  isScrollToTopVisible = false;
  footerAdjust = false

  constructor(public themeService: ThemeService,
              public contactService: ContactService,
              private scrollService: ScrollService) {
  }

  ngOnInit() {
    this.themeService.ngOnInit();

    this.scrollService.getScrollPosition().subscribe(position => {
      this.isScrollToTopVisible = position > 200;
      this.checkFooterAdjust(position);
    });

    this.scrollService.getWindowHeight().subscribe(() => {
      this.checkFooterAdjust(window.pageYOffset);
    });
  }

  checkFooterAdjust(scrollPosition: number) {
    const footer = document.querySelector('.footer');
    if (footer) {
      const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
      const windowBottom = scrollPosition + window.innerHeight;

      this.footerAdjust = windowBottom >= footerPosition;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollService.updateScrollPosition(window.pageYOffset);
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.scrollService.updateWindowHeight(window.innerHeight);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
