import './MainButton.scss';
import '../../scss/icons.scss';
import { MainButtonProps } from './MainButtonProps.interface';

export const MainButton: React.FC<MainButtonProps> = ({ text, icon, callback }) => {
  return (
    <button className="main-button main-button_text" onClick={callback}>
      <i className={`icon ${icon}`}></i>
      <span className="main-button_text">{text}</span>
    </button>
  );
};
