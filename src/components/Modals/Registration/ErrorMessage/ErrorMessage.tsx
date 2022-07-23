import { ErrorMessageProps } from './ErrorMessageProps.interface';
import './ErrorMessage.scss';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => {
  return <span className="error-message">{text}</span>;
};
