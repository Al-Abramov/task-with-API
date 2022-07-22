import { InfoContent } from './InfoContent';
import { InfoTitle } from './InfoTitle';
import { CompanyInfoProps } from './CompanyInfoProps.inteface';

export const CompanyInfo: React.FC<CompanyInfoProps> = ({ descriptions, title }) => {
  return (
    <section className="page-container">
      <InfoTitle title={title} descriptions={descriptions} />
      <InfoContent descriptions={descriptions} />
    </section>
  );
};
