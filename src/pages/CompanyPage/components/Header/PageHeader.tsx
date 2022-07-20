import { HeaderButon } from './HeaderButton';
import { buttonIcons } from '../../../../constants/buttonIcons';
import './PageHeader.scss';
import '../../../../scss/icons.scss';

export const PageHeader = () => {
  return (
    <header className="company-page__header">
      <div className="company-page__header-link">
        <span>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</span>
      </div>

      <div className="buttons-container">
        {buttonIcons.map((icon) => (
          <HeaderButon key={icon} icon={icon} />
        ))}
      </div>
    </header>
  );
};
