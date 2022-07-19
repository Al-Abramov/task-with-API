import { NavItem } from './components/NavItem';
import { NavigationProps } from './NavigationProps.interface';

export const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <nav className="nav">
      <ul>
        {props.navInfo.map((item) => (
          <NavItem key={item.name} modification={item.name} path={item.path} />
        ))}
      </ul>
    </nav>
  );
};
