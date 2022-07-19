import { CompanyPageHeader } from './components/CompanyPageHeader';
import { Company } from './components/Company';
import './CompanyPage.scss';
import '../../scss/icons.scss';

export const CompanyPage = () => {
  return (
    <section className="company-page">
      <CompanyPageHeader />
      <Company />
    </section>
  );
};
