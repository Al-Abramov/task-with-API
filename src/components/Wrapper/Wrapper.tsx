import { Outlet } from 'react-router-dom';
import { Aside } from '../Aside';
import { Header } from '../Header';

export const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
