import { infoFormFields } from 'constants/modals';
import { SubmitHandler, useForm } from 'react-hook-form';
import { updateCompanyData } from 'service/dataCompany';
import { useAppDispatch } from 'store';
import { fetchCompanyData } from 'store/dataReducer';
import { InputText } from 'ui-kit/InputText';
import { MainButton } from 'ui-kit/MainButton';
import { getContract, getTypesArray } from 'utils/helpers';
import { ErrorMessage } from '../Registration/ErrorMessage';
import { RegistrationForm } from '../Registration/RegistrationForm.interface';
import { InfoFormProps } from './InfoFormProps.interface';

export const InfoForm: React.FC<InfoFormProps> = ({ fieldsObj, close }) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegistrationForm>({
    mode: 'onChange',
    defaultValues: fieldsObj,
  });

  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    const date = getContract(getValues, 'contract');
    const type = getTypesArray(getValues, 'type');
    const transformData = { ...data, contract: date, type: type };

    updateCompanyData('12', transformData);
    dispatch(fetchCompanyData('12'));
    close();
  };

  return (
    <>
      <form className="form flex-column" action="" onSubmit={handleSubmit(onSubmit)}>
        {infoFormFields.map(({ name, label, validation }) => (
          <InputText key={name} label={label} register={register(name, validation)} />
        ))}
        {errors.name && <ErrorMessage text={errors.name.message as string} />}
        <MainButton text={'Изменить'} icon={''} />
      </form>
    </>
  );
};
