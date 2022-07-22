import { Modal } from '../../../../../components/Modals/Modal';
import { TitleModal } from '../../../../../components/Modals/TitleModal';
import { useModal } from '../../../../../hooks/useModal';
import './CompanyTitle.scss';

export const CompanyTitle = () => {
  const [isOpen, toggleModal] = useModal();

  return (
    <div className="page__title-container">
      <h2 className="page__title">Перспективные захоронения</h2>
      <i className="icon icon_edit icon_ml-16" onClick={toggleModal}></i>
      {isOpen && (
        <Modal close={toggleModal}>
          <TitleModal close={toggleModal} />
        </Modal>
      )}
    </div>
  );
};
