import { Navigation } from '../Navigation';
import { navItemsLeft, navItemsRight } from 'constants/navItems';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header flex-column">
      <Navigation navInfo={navItemsLeft} />
      <Navigation navInfo={navItemsRight} />
    </header>
  );
};
