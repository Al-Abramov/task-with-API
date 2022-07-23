import './Company.scss';
import { CompanyTitle } from './CompanyTitle';
import { CompanyInfo } from './CompanyInfo';
import { companyData, companyInfo, titleData, titleInfo } from 'constants/companyInfoConsts';
import { CompanyImage } from './CompanyImage';
import { useTransformContacts, useTransformData } from 'hooks/useTransformData';
import { useAppSelector } from 'store';
import { Loader } from 'components/Loader';
import { getFormField } from 'utils/helpers';
import { fieldNameCompany, fieldNameContacts } from 'constants/modals';
import { CompanyContacts } from './CompanyContacts';

export const Company = () => {
  const loading = useAppSelector((state) => state.data.isLoading);

  const { name, contract, businessEntity, type } = useAppSelector(
    (state) => state.data.companyData
  );

  const { lastname, firstname, patronymic, phone, email } = useAppSelector(
    (state) => state.data.companyContacts
  );

  const info = useTransformData(name, contract, businessEntity, type);
  const contacts = useTransformContacts(lastname, firstname, patronymic, phone, email);

  const fieldsCompanyForm = getFormField(info, fieldNameCompany);
  const fieldsContactsForm = getFormField(contacts, fieldNameContacts);

  return (
    <div className="company">
      {loading && <Loader />}
      <CompanyTitle />
      <CompanyInfo
        descriptions={companyInfo}
        title={titleInfo}
        info={info}
        fieldsObj={fieldsCompanyForm}
      />
      <CompanyContacts
        descriptions={companyData}
        title={titleData}
        info={contacts}
        fieldsObj={fieldsContactsForm}
      />
      <CompanyImage />
    </div>
  );
};
