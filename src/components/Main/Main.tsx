import { Outlet } from 'react-router-dom';
import './Main.scss';

export const Main = () => {
  return (
    <main className="main">
      <Outlet />
    </main>
  );
};
