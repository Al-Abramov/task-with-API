import './Image.scss';
import { deleteImage } from 'service/CompanyImages';
import { ImageProps } from './ImageProps';
import { useParams } from 'react-router-dom';

export const Image: React.FC<ImageProps> = ({ name, path }) => {
  const { id } = useParams();

  const deleteImg = () => {
    deleteImage(id as string, name);
  };

  return (
    <div className="foto-content__image-content">
      <div className="foto-content__image-container">
        <img className="foto-content__image" src={path} alt="" />
        <button className="foto-content__image-btn icon icon_remove" onClick={deleteImg}></button>
      </div>
      <div className="foto-content__image-title flex-column">
        <span>{name}</span>
        <span className="foto-content__image-title_gray">11 июня 2018</span>
      </div>
    </div>
  );
};
