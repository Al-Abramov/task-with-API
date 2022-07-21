import { InfoContentProps } from './InfoContentProps.interface';
import './InfoContent.scss';

export const InfoContent: React.FC<InfoContentProps> = ({ descriptions }) => {
  return (
    <div className="page__info-content">
      <div className="flex-column width-150">
        {descriptions.map((descr) => (
          <span key={descr} className="page__description">
            {descr}:
          </span>
        ))}
      </div>

      <div className="flex-column">
        <span className="page__description fw-400">ООО Фирма “Перспективные захоронения”</span>
        <span className="page__description fw-400">12345 от 12.03.2015</span>
        <span className="page__description fw-400">OOO</span>
        {/* <span className="company__description fw-400">Агент, Подрядчик</span> */}
      </div>
    </div>
  );
};
