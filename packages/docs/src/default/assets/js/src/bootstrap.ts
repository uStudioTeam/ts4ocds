import { Application, registerComponent } from './typedoc/application';
import { Search } from './typedoc/components/search';
import { MenuHighlight } from './typedoc/components/menu-highlight';
import { Signature } from './typedoc/components/signature';
import { Toggle } from './typedoc/components/toggle';
import { Filter } from './typedoc/components/filter';

import '../../css/main.scss';

registerComponent(Search, '#tsd-search');

registerComponent(MenuHighlight, '.menu-highlight');
registerComponent(Signature, '.tsd-signatures');
registerComponent(Toggle, 'a[data-toggle]');

if (Filter.isSupported()) {
  registerComponent(Filter, '#tsd-filter');
} else {
  document.documentElement.classList.add('no-filter');
}

const app: Application = new Application();

Object.defineProperty(window, 'app', { value: app });
