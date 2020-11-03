export interface IComponentOptions {
  el: HTMLElement;
}

/**
 * TypeDoc component class.
 */
export class Component {
  protected el: HTMLElement;

  public constructor(options: IComponentOptions) {
    this.el = options.el;
  }
}
