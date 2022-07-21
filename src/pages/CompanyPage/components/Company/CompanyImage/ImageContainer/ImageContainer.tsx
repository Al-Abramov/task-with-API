import { Image } from '../Image/Image';
import './ImageContainer.scss';

export const ImageContainer = () => {
  return (
    <div className="foto-content__images-wrapper">
      {[1, 2, 3].map((image) => (
        <Image key={image} />
      ))}
    </div>
  );
};
