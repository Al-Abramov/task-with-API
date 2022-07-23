import './CompanyContacts.scss';
import { useModal } from 'hooks/useModal';
import { Contacts } from './Contacts';
import { ContactsTitle } from './ContactsTitle';
import { CompanyContactsProps } from './CompanyContactsProps.inteface';
import { Modal } from 'components/Modals/Modal';
import { ContactsForm } from 'components/Modals/ContactsForm';
import { useParams } from 'react-router-dom';

export const CompanyContacts: React.FC<CompanyContactsProps> = ({
  descriptions,
  title,
  info,
  fieldsObj,
}) => {
  const [isOpen, toggleModal] = useModal();
  const { id } = useParams();

  return (
    <section className="page-container">
      <ContactsTitle title={title} open={toggleModal} />
      <Contacts descriptions={descriptions} info={info} />
      {isOpen && (
        <Modal close={toggleModal}>
          <ContactsForm fieldsObj={fieldsObj} idCompany={id as string} close={toggleModal} />
        </Modal>
      )}
    </section>
  );
};
