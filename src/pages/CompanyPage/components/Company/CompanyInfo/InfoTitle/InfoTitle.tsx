import './InfoTitle.scss';
import { CompanyInfoTitleProps } from './InfoTitleProps.interface';
import { InfoModal } from '../../../../../../components/Modals/InfoModal';
import { Modal } from '../../../../../../components/Modals/Modal';
import { useModal } from '../../../../../../hooks/useModal';

export const InfoTitle: React.FC<CompanyInfoTitleProps> = ({ title, descriptions }) => {
  const [isOpen, toggleModal] = useModal();

  return (
    <div className="page__title-container">
      <h3 className="page__info-title">{title}</h3>
      <i className="icon icon_edit icon_ml-16" onClick={toggleModal}></i>
      {isOpen && (
        <Modal close={toggleModal}>
          <InfoModal fields={descriptions} close={toggleModal} />
        </Modal>
      )}
    </div>
  );
};
