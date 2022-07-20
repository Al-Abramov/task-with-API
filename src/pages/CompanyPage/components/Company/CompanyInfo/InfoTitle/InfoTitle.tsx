import './InfoTitle.scss';
import { CompanyInfoTitleProps } from './InfoTitleProps.interface';

export const InfoTitle: React.FC<CompanyInfoTitleProps> = ({ title }) => {
  return (
    <div className="company__title-container">
      <h3 className="company__info-title">{title}</h3>
      <i className="icon icon_edit icon_ml-16"></i>
    </div>
  );
};
