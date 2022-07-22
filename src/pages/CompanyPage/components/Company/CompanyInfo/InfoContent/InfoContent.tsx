import './InfoContent.scss';
import { InfoContentProps } from './InfoContentProps.interface';
import { useAppDispatch, useAppSelector } from '../../../../../../store';
import React, { useEffect } from 'react';
import { ICompanyData } from '../../../../../../service/dataCompany/CompanyData.interface';
import { formattingContract, formattingDate } from '../../../../../../utils/helpers';
import { translate } from '../../../../../../constants/translate';
import { fetchCompanyData } from '../../../../../../store/dataReducer';
import { Loader } from '../../../../../../components/Loader';

export const InfoContent: React.FC<InfoContentProps> = ({ descriptions }) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.data.isLoading);

  const { name, contract, businessEntity, type } = useAppSelector(
    (state) => state.data.companyData
  ) as ICompanyData;

  // const info = useTransformData(name, contract, businessEntity, type);

  return (
    <div className="page__info-content">
      {loading && <Loader />}
      <div className="flex-column width-150">
        {descriptions.map((descr) => (
          <span key={descr} className="page__description">
            {descr}:
          </span>
        ))}
      </div>

      <div className="flex-column">
        {descriptions.map((el) => (
          <span key={el} className="page__description fw-400">
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};

const useTransformData = (
  name: string,
  contract: string[],
  businessEntity: string,
  type: string[]
) => {
  console.log('contract:', contract);
  const contr = formattingContract(contract);
  const typeStr = type.map((el) => translate[el]).join(', ');

  return [name, contr, businessEntity, typeStr];
};
