import './CompanyInfoContent.scss';
import { ICompanyInfoContent } from './ICompanyInfoContent';

export const CompanyInfoContent: React.FC<ICompanyInfoContent> = ({ descriptions }) => {
  return (
    <div className="company__info-content">
      <div className="flex-column width-150">
        {descriptions.map((descr) => (
          <span key={descr} className="company__description">
            {descr}:
          </span>
        ))}
      </div>

      <div className="flex-column">
        <span className="company__description fw-400">ООО Фирма “Перспективные захоронения”</span>
        <span className="company__description fw-400">12345 от 12.03.2015</span>
        <span className="company__description fw-400">OOO</span>
        {/* <span className="company__description fw-400">Агент, Подрядчик</span> */}
      </div>
    </div>
  );
};
