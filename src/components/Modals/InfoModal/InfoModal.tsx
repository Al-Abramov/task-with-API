import { SubmitHandler, useForm } from 'react-hook-form';
import { InputText } from '../../../ui-kit/InputText';
import { MainButton } from '../../../ui-kit/MainButton';
import { ErrorMessage } from '../Registration/ErrorMessage';
import { RegistrationForm } from '../Registration/RegistrationForm.interface';
import { InfoModalProps } from './InfoModalProps.interface';

export const InfoModal: React.FC<InfoModalProps> = ({ fields }) => {
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
        {fields.map((field) => (
          <InputText
            key={field}
            value={''}
            label={''}
            register={register('name', {
              required: 'Обязательно к заполнению',
              pattern: /[\w]+$/i,
            })}
          />
        ))}
        {errors.name && <ErrorMessage text={errors.name.message as string} />}
        <MainButton text={'Изменить'} icon={''} disabled={!isValid} />
      </form>
    </>
  );
};
