import './ContactsTitle.scss';
import { ContactsTitleProps } from './ContactsTitleProps.interface';

export const ContactsTitle: React.FC<ContactsTitleProps> = ({ title, open }) => {
  return (
    <div className="page__title-container">
      <h3 className="page__info-title">{title}</h3>
      <i className="icon icon_edit icon_ml-16" onClick={open}></i>
    </div>
  );
};
