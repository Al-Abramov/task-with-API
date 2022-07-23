import './InfoTitle.scss';
import { CompanyInfoTitleProps } from './InfoTitleProps.interface';

export const InfoTitle: React.FC<CompanyInfoTitleProps> = ({ title, open }) => {
  return (
    <div className="page__title-container">
      <h3 className="page__info-title">{title}</h3>
      <i className="icon icon_edit icon_ml-16" onClick={open}></i>
    </div>
  );
};
