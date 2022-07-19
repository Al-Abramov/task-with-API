import { Aside } from '../Aside';
import { Header } from '../Header';
import { Main } from '../Main';

export const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header />
      <Aside />
      <Main />
    </div>
  );
};
