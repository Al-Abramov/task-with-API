import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ChildrenProps } from '../../interfaces/ChildrenProps.interface';

export const Portal: React.FC<ChildrenProps> = ({ children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      document.body.removeChild(el);
    };
  });

  return ReactDOM.createPortal(children, el);
};
