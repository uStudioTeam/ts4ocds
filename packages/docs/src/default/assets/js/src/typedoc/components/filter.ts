import { Component, IComponentOptions } from '../component';
import { pointerDown, pointerUp } from '../utils/pointer';

abstract class FilterItem<T> {
  protected key: string;

  protected value: T;

  protected defaultValue: T;

  public constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
    this.defaultValue = value;

    this.initialize();

    if (window.localStorage[this.key]) {
      this.setValue(this.fromLocalStorage(window.localStorage[this.key]));
    }
  }

  protected setValue(value: T): void {
    if (this.value === value) return;

    const oldValue = this.value;
    this.value = value;
    window.localStorage[this.key] = this.toLocalStorage(value);

    this.handleValueChange(oldValue, value);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected initialize(): void {}

  protected abstract handleValueChange(oldValue: T, newValue: T): void;

  protected abstract fromLocalStorage(value: string): T;

  protected abstract toLocalStorage(value: T): string;
}

class FilterItemCheckbox extends FilterItem<boolean> {
  private checkbox!: HTMLInputElement;

  protected initialize(): void {
    const checkbox = document.querySelector<HTMLInputElement>(`#tsd-filter-${this.key}`);
    if (!checkbox) return;

    this.checkbox = checkbox;
    this.checkbox.addEventListener('change', () => {
      this.setValue(this.checkbox.checked);
    });
  }

  protected handleValueChange(): void {
    if (!this.checkbox) return;
    this.checkbox.checked = this.value;
    document.documentElement.classList.toggle(`toggle-${this.key}`, this.value !== this.defaultValue);
  }

  protected fromLocalStorage(value: string): boolean {
    return value === 'true';
  }

  protected toLocalStorage(value: boolean): string {
    return value ? 'true' : 'false';
  }
}

class FilterItemSelect extends FilterItem<string> {
  private select!: HTMLElement;

  protected initialize(): void {
    document.documentElement.classList.add(`toggle-${this.key}${this.value}`);

    const select = document.querySelector<HTMLElement>(`#tsd-filter-${this.key}`);
    if (!select) return;

    this.select = select;
    const onActivate = (): void => {
      this.select.classList.add('active');
    };
    const onDeactivate = (): void => {
      this.select.classList.remove('active');
    };

    this.select.addEventListener(pointerDown, onActivate);
    this.select.addEventListener('mouseover', onActivate);
    this.select.addEventListener('mouseleave', onDeactivate);

    this.select.querySelectorAll('li').forEach((el) => {
      el.addEventListener(pointerUp, (e) => {
        select.classList.remove('active');
        this.setValue((e.target as HTMLElement).dataset.value || '');
      });
    });

    document.addEventListener(pointerDown, (e) => {
      if (this.select.contains(e.target as HTMLElement)) return;

      this.select.classList.remove('active');
    });
  }

  protected handleValueChange(oldValue: string, newValue: string): void {
    this.select.querySelectorAll('li.selected').forEach((el) => {
      el.classList.remove('selected');
    });

    const selected = this.select.querySelector<HTMLElement>(`li[data-value="${newValue}"]`);
    const label = this.select.querySelector<HTMLElement>('.tsd-select-label');

    if (selected && label) {
      selected.classList.add('selected');
      label.textContent = selected.textContent;
    }

    document.documentElement.classList.remove(`toggle-${oldValue}`);
    document.documentElement.classList.add(`toggle-${newValue}`);
  }

  protected fromLocalStorage(value: string): string {
    return value;
  }

  protected toLocalStorage(value: string): string {
    return value;
  }
}

export class Filter extends Component {
  public optionVisibility: FilterItemSelect;

  public optionInherited: FilterItemCheckbox;

  public optionOnlyExported: FilterItemCheckbox;

  public optionExternals: FilterItemCheckbox;

  public constructor(options: IComponentOptions) {
    super(options);

    this.optionVisibility = new FilterItemSelect('visibility', 'private');
    this.optionInherited = new FilterItemCheckbox('inherited', true);
    this.optionExternals = new FilterItemCheckbox('externals', true);
    this.optionOnlyExported = new FilterItemCheckbox('only-exported', false);
  }

  public static isSupported(): boolean {
    try {
      return typeof window.localStorage !== 'undefined';
    } catch {
      return false;
    }
  }
}
