import { CompanyTitle } from './CompanyTitle';
import { CompanyInfo } from './CompanyInfo';
import {
  companyData,
  companyInfo,
  titleData,
  titleInfo,
} from '../../../../constants/companyInfoConsts';
import { CompanyImage } from './CompanyImage';
import './Company.scss';

export const Company = () => {
  return (
    <div className="company">
      <CompanyTitle />
      <CompanyInfo descriptions={companyInfo} title={titleInfo} />
      <CompanyInfo descriptions={companyData} title={titleData} />
      <CompanyImage />
    </div>
  );
};
