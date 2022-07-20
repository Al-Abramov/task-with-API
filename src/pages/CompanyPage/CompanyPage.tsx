import { PageHeader } from './components/Header';
import { Company } from './components/Company';
import './CompanyPage.scss';
import '../../scss/icons.scss';

export const CompanyPage = () => {
  return (
    <section className="company-page">
      <PageHeader />
      <Company />
    </section>
  );
};
