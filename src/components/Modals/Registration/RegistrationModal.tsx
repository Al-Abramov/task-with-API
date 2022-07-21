import { useForm } from 'react-hook-form';
import { InputText } from '../../../ui-kit/InputText';
import { MainButton } from '../../../ui-kit/MainButton';
import { ErrorMessage } from './ErrorMessage';
import { RegistrationForm } from './RegistrationForm.interface';
import './RegistrationModal.scss';

export const RegistrationModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegistrationForm>();

  const onSubmit = () => {
    console.log('test');
  };

  const test = () => {
    console.log('test button press');
  };

  return (
    <div className="modal flex-column flex-center">
      <h2>Регистрация</h2>
      <form className="form flex-column" action="" onSubmit={handleSubmit(onSubmit)}>
        <InputText
          value={''}
          label={'Имя'}
          register={register('name', { required: 'Обязательно к заполнению' })}
        />
        {errors.name && <ErrorMessage text={errors.name.message as string} />}
        <MainButton text={'Зарегистрироваться'} icon={''} />
      </form>
    </div>
  );
};
