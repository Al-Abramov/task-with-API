import './PageHeader.scss';
import 'scss/icons.scss';
import { HeaderButon } from './HeaderButton';
import { buttonIcons } from 'constants/buttonIcons';
import { useModal } from 'hooks/useModal';
import { ConfirmModal } from 'components/Modals/Confirm';
import { deleteCardText, deleteCardTitle } from 'constants/modals';
import { useParams } from 'react-router-dom';

export const PageHeader = () => {
  const [isOpen, toggleModal] = useModal();
  const { id } = useParams();

  return (
    <header className="company-page__header">
      <div className="company-page__header-link">
        <span>К cписку юридических лиц</span>
      </div>

      <div className="buttons-container">
        {buttonIcons.map((icon) => (
          <HeaderButon key={icon} icon={icon} open={toggleModal} />
        ))}
      </div>
      {isOpen && (
        <ConfirmModal
          title={deleteCardTitle}
          description={deleteCardText}
          idCompany={id as string}
          close={toggleModal}
        />
      )}
    </header>
  );
};
