import './CompanyImage.scss';
import '../CompanyInfo/InfoTitle/InfoTitle.scss';
import '../CompanyInfo/InfoContent/InfoContent.scss';
import { ImageContainer } from './ImageContainer';
import { MainButton } from 'ui-kit/MainButton';
import { icons } from 'constants/buttonIcons';
import { useParams } from 'react-router-dom';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modals/Modal';
import { UploadImg } from 'components/Modals/UploadImg';

export const CompanyImage = () => {
  const [isOpen, toggleModal] = useModal();

  const { id } = useParams();

  return (
    <section className="page-container foto-content">
      <h3 className="page__info-title">Приложенные фото</h3>
      <ImageContainer />
      <MainButton text={'Добавить изображение'} icon={icons.ADD} callback={toggleModal} />
      {isOpen && (
        <Modal close={toggleModal}>
          <UploadImg id={id as string} close={toggleModal} />
        </Modal>
      )}
    </section>
  );
};
