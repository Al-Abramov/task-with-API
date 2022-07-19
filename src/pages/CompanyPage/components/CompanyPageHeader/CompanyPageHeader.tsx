import './CompanyPageHeader.scss';
import '../../../../scss/icons.scss';

export const CompanyPageHeader = () => {
  return (
    <header className="company-page__header">
      <div className="company-page__header-link">
        <span>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</span>
      </div>

      <div className="btns-container">
        <button className="company-page__header-btn icon_link icon"></button>
        <button className="company-page__header-btn icon_rotate icon"></button>
        <button className="company-page__header-btn icon_delete icon"></button>
      </div>
    </header>
  );
};
