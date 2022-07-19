import { CompanyInfoContent } from './components/CompanyInfoContent';
import { CompanyInfoTitle } from './components/CompanyInfoTitle';
import { CompanyInfoProps } from './CompanyInfoProps.inteface';

export const CompanyInfo: React.FC<CompanyInfoProps> = ({ descriptions, title }) => {
  return (
    <section className="company__info-container">
      <CompanyInfoTitle title={title} />
      <CompanyInfoContent descriptions={descriptions} />
    </section>
  );
};
