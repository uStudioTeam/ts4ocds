export interface IEventListener<T> {
  (evt: CustomEvent<T>): void;
}

/**
 * TypeDoc event target class.
 */
export class EventTarget {
  private listeners: Record<string, IEventListener<any>[]> = {};

  public addEventListener<T>(type: string, callback: IEventListener<T>): void {
    if (!(type in this.listeners)) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(callback);
  }

  public removeEventListener<T>(type: string, callback: IEventListener<T>): void {
    if (!(type in this.listeners)) {
      return;
    }
    const stack = this.listeners[type];
    for (let i = 0, l = stack.length; i < l; i += 1) {
      if (stack[i] === callback) {
        stack.splice(i, 1);
        return;
      }
    }
  }

  public dispatchEvent<T>(event: CustomEvent<T>): boolean {
    if (!(event.type in this.listeners)) {
      return true;
    }
    const stack = this.listeners[event.type].slice();

    for (let i = 0, l = stack.length; i < l; i += 1) {
      stack[i].call(this, event);
    }
    return !event.defaultPrevented;
  }
}
