import './CompanyImage.scss';
import '../CompanyInfo/InfoTitle/InfoTitle.scss';
import '../CompanyInfo/InfoContent/InfoContent.scss';
import { ImageContainer } from './ImageContainer';
import { MainButton } from '../../../../../ui-kit/MainButton';
import { icons } from '../../../../../constants/buttonIcons';

export const CompanyImage = () => {
  const test = () => {
    console.log('test');
  };

  return (
    <section className="page-container foto-content">
      <h3 className="company__info-title">Приложенные фото</h3>
      <ImageContainer />
      <MainButton text={'Добавить изображение'} icon={icons.ADD} callback={test} />
    </section>
  );
};
