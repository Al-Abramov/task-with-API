import { ChildrenProps } from '../../../interfaces/ChildrenProps.interface';

export interface ModalProps extends ChildrenProps {
  close: () => void;
}
