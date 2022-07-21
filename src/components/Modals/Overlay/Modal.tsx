import React from 'react';
import { ChildrenProps } from '../../../interfaces/ChildrenProps.interface';
import './Modal.scss';

export const Modal: React.FC<ChildrenProps> = (props) => {
  return <div className="overlay flex-center">{props.children}</div>;
};
