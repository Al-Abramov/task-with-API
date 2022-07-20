import { HeaderButonProps } from './HeaderButonProps.interface';
import './HeaderButton.scss';

export const HeaderButon: React.FC<HeaderButonProps> = ({ icon }) => {
  return <button className={`company-page__header-btn icon ${icon}`}></button>;
};
