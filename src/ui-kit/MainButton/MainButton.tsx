import './MainButton.scss';
import '../../scss/icons.scss';
import { MainButtonProps } from './MainButtonProps.interface';

export const MainButton: React.FC<MainButtonProps> = ({ text, icon, callback, disabled }) => {
  return (
    <button className={`main-button main-button_text`} onClick={callback} disabled={disabled}>
      <i className={`icon ${icon}`}></i>
      <span className={`main-button_text ${disabled ? 'main-button_disabled' : ''}`}>{text}</span>
    </button>
  );
};
