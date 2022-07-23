import './ConfirmModal.scss';
import { Portal } from 'components/Portal/Portal';
import { deleteCompany } from 'service/dataCompany';
import { ConfirmModalProps } from './ConfirmModalProps.interface';

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  description,
  idCompany,
  close,
}) => {
  const onDelete = () => {
    deleteCompany(idCompany);
    close();
  };

  return (
    <Portal>
      <div className="overlay" onClick={close}></div>
      <div className="confirm flex-column">
        <div className="confirm__title-container">
          <h3 className="confirm__title">{title}</h3>
          <p className="confirm__description">{description}</p>
        </div>
        <div className="confirm__btns-container">
          <button className="confirm__btn confirm__btn_cancel" onClick={close}>
            Отмена
          </button>
          <button className="confirm__btn confirm__btn_delete" onClick={onDelete}>
            Удалить
          </button>
        </div>
      </div>
    </Portal>
  );
};
