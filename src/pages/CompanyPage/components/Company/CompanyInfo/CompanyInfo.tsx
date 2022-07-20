import { InfoContent } from './InfoContent';
import { InfoTitle } from './InfoTitle';
import { CompanyInfoProps } from './CompanyInfoProps.inteface';

export const CompanyInfo: React.FC<CompanyInfoProps> = ({ descriptions, title }) => {
  return (
    <section className="company__info-container">
      <InfoTitle title={title} />
      <InfoContent descriptions={descriptions} />
    </section>
  );
};
