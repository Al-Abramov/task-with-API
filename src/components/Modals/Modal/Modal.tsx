import React from 'react';
import { Portal } from '../../Portal/Portal';
import { ModalProps } from './ModalProps.interface';
import './Modal.scss';

export const Modal: React.FC<ModalProps> = ({ children, close }) => {
  const closeModal = () => {
    close();
  };

  return (
    <Portal>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal flex-column flex-center">{children}</div>
    </Portal>
  );
};
