import './CompanyPage.scss';
import '../../scss/icons.scss';
import { PageHeader } from './components/Header';
import { Company } from './components/Company';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCompanyData } from '../../store/dataReducer';
import { Loader } from '../../components/Loader';

export const CompanyPage = () => {
  return (
    <section className="company-page">
      <PageHeader />
      <Company />
    </section>
  );
};

/*

    dispatch(fetchCompanyData('12'))
      .unwrap()
      .catch((e) => {
        console.log(e);
      });

*/
