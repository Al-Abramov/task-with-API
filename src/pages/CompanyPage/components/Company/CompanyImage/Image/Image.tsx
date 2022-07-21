import image from '../../../../../../assets/1.jpg';
import './Image.scss';

export const Image = () => {
  return (
    <div className="foto-content__image-content">
      <div className="foto-content__image-container">
        <img className="foto-content__image" src={image} alt="" />
        <button className="foto-content__image-btn icon icon_remove"></button>
      </div>
      <div className="foto-content__image-title flex-column">
        <span>Надгробный камень.jpg</span>
        <span className="foto-content__image-title_gray">11 июня 2018</span>
      </div>
    </div>
  );
};
