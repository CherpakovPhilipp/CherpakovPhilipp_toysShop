import './aside.scss';

import { Infobar } from '../infoBar';

export const Aside = () => (
  <aside className="aside">
    <Infobar
      user="Philipp"
      categories={10}
      published={5}
      products={55}
    />
  </aside>
);
