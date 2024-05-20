import { BehaviorSubject } from 'rxjs';

export class ScrollService {
  private scrollPosition = new BehaviorSubject<number>(0);
  private windowHeight = new BehaviorSubject<number>(window.innerHeight);

  constructor() {
    window.addEventListener('scroll', () => {
      this.scrollPosition.next(window.pageYOffset);
    });
    window.addEventListener('resize', () => {
      this.windowHeight.next(window.innerHeight);
    });
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
