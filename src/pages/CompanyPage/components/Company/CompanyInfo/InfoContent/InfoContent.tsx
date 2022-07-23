import './InfoContent.scss';
import { InfoContentProps } from './InfoContentProps.interface';
import React from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { testEmail } from 'utils/helpers';

export const InfoContent: React.FC<InfoContentProps> = ({ descriptions, info }) => {
  return (
    <div className="page__info-content">
      <div className="flex-column width-150">
        {descriptions.map((descr) => (
          <span key={descr} className="page__description">
            {descr}:
          </span>
        ))}
      </div>

      <div className="flex-column">
        {info.map((el, i) => (
          <span key={i} className={`page__description fw-400 ${testEmail(el)}`}>
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};
