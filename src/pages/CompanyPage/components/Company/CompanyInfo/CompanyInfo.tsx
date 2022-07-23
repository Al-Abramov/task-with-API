import { InfoContent } from './InfoContent';
import { InfoTitle } from './InfoTitle';
import { CompanyInfoProps } from './CompanyInfoProps.inteface';
import { Modal } from 'components/Modals/Modal';
import { InfoForm } from 'components/Modals/InfoForm';
import { useModal } from 'hooks/useModal';

export const CompanyInfo: React.FC<CompanyInfoProps> = ({
  descriptions,
  title,
  info,
  fieldsObj,
}) => {
  const [isOpen, toggleModal] = useModal();

  return (
    <section className="page-container">
      <InfoTitle title={title} open={toggleModal} />
      <InfoContent descriptions={descriptions} info={info} />
      {isOpen && (
        <Modal close={toggleModal}>
          <InfoForm fields={info} name={descriptions} fieldsObj={fieldsObj} close={toggleModal} />
        </Modal>
      )}
    </section>
  );
};
