import './Registration.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputText } from '../../../ui-kit/InputText';
import { MainButton } from '../../../ui-kit/MainButton';
import { ErrorMessage } from './ErrorMessage';
import { RegistrationForm, RegistrationProps } from './RegistrationForm.interface';
import { getToken } from '../../../service/authorization';
import { setCookie } from '../../../utils/cookie';
import { useAppDispatch } from '../../../store';
import { setName } from '../../../store/dataReducer';

export const Registration: React.FC<RegistrationProps> = ({ close }) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<RegistrationForm>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    try {
      const {
        headers: { authorization: token },
      } = await getToken(data.name);

      setCookie('token', token);
      dispatch(setName(data.name));
      reset();
      close();
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <h2>Регистрация</h2>
      <form className="form flex-column" action="" onSubmit={handleSubmit(onSubmit)}>
        <InputText
          value={''}
          label={'Имя'}
          register={register('name', {
            required: 'Обязательно к заполнению',
            pattern: /[\w]+$/i,
          })}
        />
        {errors.name && <ErrorMessage text={errors.name.message as string} />}
        <MainButton text={'Зарегистрироваться'} icon={''} disabled={!isValid} />
      </form>
    </>
  );
};
