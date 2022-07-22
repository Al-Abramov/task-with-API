import './UserName.scss';
import { UserNameProps } from './UserNameProps.interface';

export const UserName: React.FC<UserNameProps> = ({ name }) => {
  return <span className="user-name">{name}</span>;
};
