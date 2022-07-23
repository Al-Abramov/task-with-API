import { useAppSelector } from 'store';
import { Image } from '../Image/Image';
import './ImageContainer.scss';

export const ImageContainer = () => {
  const fotos = useAppSelector((state) => state.data.companyData.photos);

  return (
    <div className="foto-content__images-wrapper">
      {fotos.map((foto) => (
        <Image key={foto.name} name={foto.name} path={foto.thumbpath} />
      ))}
    </div>
  );
};
