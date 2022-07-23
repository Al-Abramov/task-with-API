import './CompanyPage.scss';
import 'scss/icons.scss';
import { PageHeader } from './components/Header';
import { Company } from './components/Company';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { fetchCompanyData, fetchContacts } from 'store/dataReducer';
import { useParams } from 'react-router-dom';

export const CompanyPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCompanyData(id as string));
    dispatch(fetchContacts('16'));
  });

  return (
    <section className="company-page">
      <PageHeader />
      <Company />
    </section>
  );
};
