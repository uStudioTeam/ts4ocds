import { Component, IComponentOptions } from '../component';
import { Viewport } from '../services/viewport';

/**
 * Holds a signature and its description.
 */
class SignatureGroup {
  /**
   * The target signature.
   */
  public signature: Element;

  /**
   * The description for the signature.
   */
  public description: Element;

  /**
   * Create a new SignatureGroup instance.
   *
   * @param signature    The target signature.
   * @param description  The description for the signature.
   */
  public constructor(signature: Element, description: Element) {
    this.signature = signature;
    this.description = description;
  }

  /**
   * Add the given class to all elements of the group.
   *
   * @param className  The class name to add.
   */
  public addClass(className: string): SignatureGroup {
    this.signature.classList.add(className);
    this.description.classList.add(className);
    return this;
  }

  /**
   * Remove the given class from all elements of the group.
   *
   * @param className  The class name to remove.
   */
  public removeClass(className: string): SignatureGroup {
    this.signature.classList.remove(className);
    this.description.classList.remove(className);
    return this;
  }
}

/**
 * Controls the tab like behaviour of methods and functions with multiple signatures.
 */
export class Signature extends Component {
  /**
   * List of found signature groups.
   */
  private groups: SignatureGroup[] = [];

  /**
   * The container holding all the descriptions.
   */
  private container?: HTMLElement;

  /**
   * The index of the currently displayed signature.
   */
  private index = -1;

  /**
   * Create a new Signature instance.
   *
   * @param options  Backbone view constructor options.
   */
  public constructor(options: IComponentOptions) {
    super(options);

    this.createGroups();

    if (this.container) {
      this.el.classList.add('active');
      [...this.el.children].forEach((signature) => {
        signature.addEventListener('touchstart', (event) => this.onClick(event));
        signature.addEventListener('click', (event) => this.onClick(event));
      });
      this.container.classList.add('active');
      this.setIndex(0);
    }
  }

  /**
   * Set the index of the active signature.
   *
   * @param index  The index of the signature to activate.
   */
  private setIndex(index: number): void {
    /* eslint no-param-reassign: off */
    if (index < 0) index = 0;
    if (index > this.groups.length - 1) index = this.groups.length - 1;
    /* eslint no-param-reassign: off */
    if (this.index === index) return;

    const to = this.groups[index];
    if (this.index > -1) {
      const from = this.groups[this.index];

      from.removeClass('current').addClass('fade-out');
      to.addClass('current');
      to.addClass('fade-in');
      Viewport.instance.triggerResize();

      setTimeout(() => {
        from.removeClass('fade-out');
        to.removeClass('fade-in');
      }, 300);
    } else {
      to.addClass('current');
      Viewport.instance.triggerResize();
    }

    this.index = index;
  }

  /**
   * Find all signature/description groups.
   */
  private createGroups(): void {
    const signatures = this.el.children;
    if (signatures.length < 2) return;

    this.container = this.el.nextElementSibling as HTMLElement;
    const descriptions = this.container.children;

    this.groups = [];
    // @ts-ignore
    // eslint-disable-next-line no-restricted-syntax
    [...signatures].forEach((signature, index) => {
      this.groups.push(new SignatureGroup(signature, descriptions[index]));
    });
  }

  /**
   * Triggered when the user clicks onto a signature header.
   *
   * @param e  The related event object.
   */
  private onClick(e: Event): void {
    this.groups.forEach((group, index) => {
      if (group.signature === e.currentTarget) {
        this.setIndex(index);
      }
    });
  }
}
