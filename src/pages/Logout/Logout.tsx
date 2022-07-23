import './Logout.scss';
import { MainButton } from '../../ui-kit/MainButton';
import { setCookie } from '../../utils/cookie';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();
  const exit = () => {
    setCookie('token', '');
    navigate('/');
  };

  return (
    <div className="logout-page flex-center">
      <MainButton text={'Выйти'} icon={''} callback={exit} />
    </div>
  );
};
