import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItemProps } from './NavItemProps.interface';
import './NavItem.scss';
import '../../../../scss/icons.scss';

export const NavItem: React.FC<NavItemProps> = (props) => {
  const setActive = ({ isActive }: { isActive: boolean }) => {
    const active = isActive ? 'nav__icon_active' : '';
    return `nav__icon ${active} icon_${props.modification}`;
  };

  return (
    <li className="nav__item flex-center">
      <NavLink className={setActive} to={props.path} />
    </li>
  );
};
