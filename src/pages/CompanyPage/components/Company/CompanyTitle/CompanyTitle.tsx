import { useAppSelector } from 'store';
import { Modal } from 'components/Modals/Modal';
import { TitleForm } from 'components/Modals/TitleForm';
import { useModal } from 'hooks/useModal';
import './CompanyTitle.scss';
import { useParams } from 'react-router-dom';

export const CompanyTitle = () => {
  const [isOpen, toggleModal] = useModal();
  const name = useAppSelector((state) => state.data.companyData.shortName);
  const { id } = useParams();

  return (
    <div className="page__title-container">
      <h2 className="page__title">{name}</h2>
      <i className="icon icon_edit icon_ml-16" onClick={toggleModal}></i>
      {isOpen && (
        <Modal close={toggleModal}>
          <TitleForm idCompany={id as string} close={toggleModal} />
        </Modal>
      )}
    </div>
  );
};
