import { IComponentOptions } from './component';

/**
 * Component definition.
 */
export interface IComponent {
  constructor: new (options: IComponentOptions) => unknown;
  selector: string;
}

/**
 * List of all known components.
 */
const components: IComponent[] = [];

/**
 * Register a new component.
 */
export function registerComponent(constructor: IComponent['constructor'], selector: string): void {
  components.push({
    selector,
    constructor,
  });
}

/**
 * TypeDoc application class.
 */
export class Application {
  /**
   * Create a new Application instance.
   */
  public constructor() {
    this.createComponents(document.body);
  }

  /**
   * Create all components beneath the given jQuery element.
   */
  public createComponents(context: HTMLElement): void {
    components.forEach((c) => {
      context.querySelectorAll<HTMLElement>(c.selector).forEach((el) => {
        if (!el.dataset.hasInstance) {
          // eslint-disable-next-line no-new
          new c.constructor({ el });
          // eslint-disable-next-line no-param-reassign
          el.dataset.hasInstance = String(true);
        }
      });
    });
  }
}
