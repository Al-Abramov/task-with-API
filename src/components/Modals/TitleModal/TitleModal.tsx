import '../Registration/Registration.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputText } from '../../../ui-kit/InputText';
import { MainButton } from '../../../ui-kit/MainButton';
import { RegistrationForm, RegistrationProps } from '../Registration/RegistrationForm.interface';
import { ErrorMessage } from '../Registration/ErrorMessage';

export const TitleModal: React.FC<RegistrationProps> = ({ close }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<RegistrationForm>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<RegistrationForm> = async () => {
    console.log('test');
  };

  return (
    <>
      <form className="form flex-column" action="" onSubmit={handleSubmit(onSubmit)}>
        <InputText
          value={''}
          label={'Название'}
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
