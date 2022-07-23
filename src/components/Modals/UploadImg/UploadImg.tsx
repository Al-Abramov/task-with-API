import './UploadImg.scss';
import { useDropzone } from 'react-dropzone';
import { setImage } from 'service/CompanyImages';
import { UploadPros } from './UploadPops.interface';

export const UploadImg: React.FC<UploadPros> = ({ id, close }) => {
  const { open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
  });

  const upload = () => {
    setImage(id as string, acceptedFiles[0]);
    close();
  };

  return (
    <>
      <h2 className="upload__title">Загрузка изображения</h2>
      <div className="upload__container flex-column">
        <span>Файлы</span>
        <ul></ul>
      </div>
      <div className="upload__btns-container">
        <button className="upload__btn confirm__btn confirm__btn_delete" onClick={upload}>
          Отправить
        </button>
        <button className="upload__btn confirm__btn confirm__btn_delete" onClick={open}>
          Загрузить
        </button>
      </div>
    </>
  );
};
