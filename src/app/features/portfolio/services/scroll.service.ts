import { BehaviorSubject } from 'rxjs';

export class ScrollService {
  private scrollPosition = new BehaviorSubject<number>(0);
  private windowHeight = new BehaviorSubject<number>(window.innerHeight);
  public homeSection!: HTMLElement;
  public aboutSection!: HTMLElement;
  public projectsSection!: HTMLElement;

  constructor() {
    window.addEventListener('scroll', () => {
      this.scrollPosition.next(window.pageYOffset);
    });
    window.addEventListener('resize', () => {
      this.windowHeight.next(window.innerHeight);
    });
  }

  scrollToElement(element: HTMLElement) {
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getScrollPosition() {
    return this.scrollPosition.asObservable();
  }

  getWindowHeight() {
    return this.windowHeight.asObservable();
  }

  updateScrollPosition(position: number) {
    this.scrollPosition.next(position);
  }

  updateWindowHeight(height: number) {
    this.windowHeight.next(height);
  }
}
