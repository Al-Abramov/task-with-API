import './HomePage.scss';
import { Modal } from '../../components/Modals/Modal';
import { Registration } from '../../components/Modals/Registration';
import { useModal } from '../../hooks/useModal';
import { MainButton } from '../../ui-kit/MainButton';
import { getCookie } from '../../utils/cookie';
import { UserName } from './UserName';

export const HomePage = () => {
  const [isOpen, toggleModal] = useModal();
  const name = localStorage.getItem('name') as string;
  const token = getCookie('token');

  return (
    <section className="home-page flex-column flex-center">
      <div className="home-page__title-container">
        <h1>Welcome page</h1>
      </div>
      {token ? (
        <UserName name={name} />
      ) : (
        <MainButton text={'Регистрация'} icon={''} callback={toggleModal} />
      )}
      {isOpen && (
        <Modal close={toggleModal}>
          <Registration close={toggleModal} />
        </Modal>
      )}
    </section>
  );
};
