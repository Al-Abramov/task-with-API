import { useState } from 'react';

export const useModal = (): [boolean, () => void] => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return [modal, toggleModal];
};
