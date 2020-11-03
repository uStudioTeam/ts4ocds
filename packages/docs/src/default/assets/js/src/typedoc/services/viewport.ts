import { EventTarget } from '../event-target';
import { throttle } from '../utils/trottle';

/**
 * A global service that monitors the window size and scroll position.
 */
export class Viewport extends EventTarget {
  public static readonly instance = new Viewport();

  /**
   * The current scroll position.
   */
  public scrollTop = 0;

  /**
   * The previous scrollTop.
   */
  public lastY = 0;

  /**
   * The width of the window.
   */
  public width = 0;

  /**
   * The height of the window.
   */
  public height = 0;

  /**
   * The toolbar (contains the search input).
   */
  public toolbar: HTMLDivElement;

  /**
   * Boolean indicating whether the toolbar is shown.
   */
  public showToolbar = true;

  /**
   * The sticky side nav that contains members of the current page.
   */
  public secondaryNav: HTMLElement;

  /**
   * Create new Viewport instance.
   */
  public constructor() {
    super();

    this.toolbar = <HTMLDivElement>document.querySelector('.tsd-page-toolbar');
    this.secondaryNav = <HTMLElement>document.querySelector('.tsd-navigation.secondary');

    window.addEventListener(
      'scroll',
      throttle(() => this.onScroll(), 10)
    );
    window.addEventListener(
      'resize',
      throttle(() => this.onResize(), 10)
    );

    this.onResize();
    this.onScroll();
  }

  /**
   * Trigger a resize event.
   */
  public triggerResize(): void {
    const event = new CustomEvent('resize', {
      detail: {
        width: this.width,
        height: this.height,
      },
    });

    this.dispatchEvent(event);
  }

  /**
   * Triggered when the size of the window has changed.
   */
  public onResize(): void {
    this.width = window.innerWidth || 0;
    this.height = window.innerHeight || 0;

    const event = new CustomEvent('resize', {
      detail: {
        width: this.width,
        height: this.height,
      },
    });

    this.dispatchEvent(event);
  }

  /**
   * Triggered when the user scrolled the viewport.
   */
  public onScroll(): void {
    this.scrollTop = window.scrollY || 0;

    const event = new CustomEvent('scroll', {
      detail: {
        scrollTop: this.scrollTop,
      },
    });

    this.dispatchEvent(event);
    this.hideShowToolbar();
  }

  /**
   * Handle hiding/showing of the toolbar.
   */
  public hideShowToolbar(): void {
    const isShown = this.showToolbar;
    this.showToolbar = this.lastY >= this.scrollTop || this.scrollTop === 0;
    if (isShown !== this.showToolbar) {
      this.toolbar.classList.toggle('tsd-page-toolbar--hide');
      this.secondaryNav.classList.toggle('tsd-navigation--toolbar-hide');
    }
    this.lastY = this.scrollTop;
  }
}
