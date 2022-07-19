import { CompanyTitle } from './components/CompanyTitle';
import { CompanyInfo } from './components/CompanyInfo';
import './Company.scss';
import {
  companyData,
  companyInfo,
  titleData,
  titleInfo,
} from '../../../../constants/companyInfoConsts';

export const Company = () => {
  return (
    <div className="company">
      <CompanyTitle />
      <CompanyInfo descriptions={companyInfo} title={titleInfo} />
      <CompanyInfo descriptions={companyData} title={titleData} />
    </div>
  );
};
