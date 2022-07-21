import { CompanyInfoTitleProps } from './InfoTitleProps.interface';
import './InfoTitle.scss';

export const InfoTitle: React.FC<CompanyInfoTitleProps> = ({ title }) => {
  return (
    <div className="page__title-container">
      <h3 className="page__info-title">{title}</h3>
      <i className="icon icon_edit icon_ml-16"></i>
    </div>
  );
};
