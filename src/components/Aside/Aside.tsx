import { AsideTitle } from './components/AsideTitle';
import './Aside.scss';

export const Aside = () => {
  return (
    <aside className="aside">
      <AsideTitle />

      <h2 className="aside__list-title">Организации</h2>
    </aside>
  );
};
