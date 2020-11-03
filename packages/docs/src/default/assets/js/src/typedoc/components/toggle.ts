import { Component, IComponentOptions } from '../component';
import { hasPointerMoved, pointerDown, pointerUp } from '../utils/pointer';

export class Toggle extends Component {
  public active?: boolean;

  public className: string;

  public constructor(options: IComponentOptions) {
    super(options);

    this.className = this.el.dataset.toggle || '';
    this.el.addEventListener(pointerUp, (e) => this.onPointerUp(e));
    this.el.addEventListener('click', (e) => e.preventDefault());
    document.addEventListener(pointerDown, (e) => this.onDocumentPointerDown(e));
    document.addEventListener(pointerUp, (e) => this.onDocumentPointerUp(e));
  }

  public setActive(value: boolean): void {
    if (this.active === value) return;
    this.active = value;

    document.documentElement.classList.toggle(`has-${this.className}`, value);
    this.el.classList.toggle('active', value);

    const transition = (this.active ? 'to-has-' : 'from-has-') + this.className;
    document.documentElement.classList.add(transition);
    setTimeout(() => document.documentElement.classList.remove(transition), 500);
  }

  public onPointerUp(event: Event): void {
    if (hasPointerMoved) return;
    this.setActive(true);
    event.preventDefault();
  }

  public onDocumentPointerDown(e: Event): void {
    if (this.active) {
      if ((e.target as HTMLElement).closest('.col-menu, .tsd-filter-group')) {
        return;
      }

      this.setActive(false);
    }
  }

  public onDocumentPointerUp(e: Event): void {
    if (hasPointerMoved) return;
    // eslint-disable-next-line sonarjs/no-collapsible-if
    if (this.active) {
      if ((e.target as HTMLElement).closest('.col-menu')) {
        const link = (e.target as HTMLElement).closest('a');
        if (link) {
          let { href } = window.location;
          if (href.includes('#')) {
            href = href.slice(0, Math.max(0, href.indexOf('#')));
          }
          if (link.href.slice(0, href.length) === href) {
            setTimeout(() => this.setActive(false), 250);
          }
        }
      }
    }
  }
}
