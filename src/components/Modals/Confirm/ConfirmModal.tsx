import './ConfirmModal.scss';
import { ConfirmModalProps } from './ConfirmModalProps.interface';

export const ConfirmModal: React.FC<ConfirmModalProps> = ({ title, description }) => {
  return (
    <div className="confirm flex-column">
      <div className="confirm__title-container">
        <h3 className="confirm__title">{title}</h3>
        <p className="confirm__description">{description}</p>
      </div>
      <div className="confirm__btns-container">
        <button className="confirm__btn confirm__btn_cancel">Отмена</button>
        <button className="confirm__btn confirm__btn_delete">Удалить</button>
      </div>
    </div>
  );
};
