import { InputTextProps } from './InputTextProps.interface';
import './InputText.scss';

export const InputText: React.FC<InputTextProps> = ({ value, label, register }) => {
  return (
    <>
      <label className="flex-column" htmlFor="text">
        <span>{label}</span>
        <input className="input" type="text" {...register} defaultValue={value} id="text" />
      </label>
    </>
  );
};
