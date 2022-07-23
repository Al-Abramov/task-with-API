import { HeaderButonProps } from './HeaderButonProps.interface';
import './HeaderButton.scss';

export const HeaderButon: React.FC<HeaderButonProps> = ({ icon, open }) => {
  const onOpen = () => {
    const buttonDelete = /delete/gi.test(icon);
    if (buttonDelete) {
      open();
    }
  };

  return <button className={`company-page__header-btn icon ${icon}`} onClick={onOpen}></button>;
};
