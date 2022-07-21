import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modals/Overlay';
import { RegistrationModal } from '../../components/Modals/Registration';
import { Portal } from '../../components/Portal/Portal';
import { getCompanyData } from '../../service/dataCompany';
import { MainButton } from '../../ui-kit/MainButton';
import './HomePage.scss';

export const HomePage = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    /*getCompanyData('12')
      .then((data) => console.log(data))
      .catch((e) => {
        alert(e.response.data.error);
      });*/
  }, []);
  return (
    <section className="home-page flex-column flex-center">
      <div className="home-page__title-container">
        <h1>Welcome page</h1>
      </div>
      <MainButton text={'Регистрация'} icon={''} callback={toggleModal} />
      {modal && (
        <Portal>
          <Modal>
            <RegistrationModal />
          </Modal>
        </Portal>
      )}
    </section>
  );
};
