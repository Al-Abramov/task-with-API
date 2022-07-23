import '../Registration/Registration.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputText } from 'ui-kit/InputText';
import { MainButton } from 'ui-kit/MainButton';
import { RegistrationForm } from '../Registration/RegistrationForm.interface';
import { ErrorMessage } from '../Registration/ErrorMessage';
import { useAppDispatch, useAppSelector } from 'store';
import { updateCompanyData } from 'service/dataCompany';
import { fetchCompanyData } from 'store/dataReducer';
import { TitleFormProps } from './TitleFormProps.interface';

export const TitleForm: React.FC<TitleFormProps> = ({ idCompany, close }) => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.data.companyData.shortName);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationForm>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    updateCompanyData(idCompany, data);
    dispatch(fetchCompanyData(idCompany));
    close();
  };

  return (
    <>
      <form className="form flex-column" action="" onSubmit={handleSubmit(onSubmit)}>
        <InputText
          value={name}
          label={'Название'}
          register={register('name', {
            required: 'Обязательно к заполнению',
          })}
        />
        {errors.name && <ErrorMessage text={errors.name.message as string} />}
        <MainButton text={'Изменить'} icon={''} disabled={!isValid} />
      </form>
    </>
  );
};
