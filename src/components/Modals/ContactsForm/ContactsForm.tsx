import { contactsFormField } from 'constants/modals';
import { SubmitHandler, useForm } from 'react-hook-form';
import { udateContacts } from 'service/dataCompany';
import { UpdateContacts } from 'service/dataCompany/CompanyData.interface';
import { useAppDispatch } from 'store';
import { fetchCompanyData } from 'store/dataReducer';
import { InputText } from 'ui-kit/InputText';
import { MainButton } from 'ui-kit/MainButton';
import { getTransformPhone, splitFullName } from 'utils/helpers';
import { ErrorMessage } from '../Registration/ErrorMessage';
import { RegistrationForm } from '../Registration/RegistrationForm.interface';
import { ContactsFormProps } from './ContactsFormProps.interface';

export const ContactsForm: React.FC<ContactsFormProps> = ({ fieldsObj, idCompany, close }) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({
    mode: 'onChange',
    defaultValues: fieldsObj,
  });

  const onSubmit: SubmitHandler<RegistrationForm> = async (data) => {
    const { email, fullName, phone } = data;

    const phoneTransform = getTransformPhone(phone);
    const updateData: UpdateContacts = splitFullName(fullName);
    updateData['email'] = email;
    updateData['phone'] = phoneTransform;

    udateContacts('16', updateData);
    dispatch(fetchCompanyData(idCompany));
    close();
  };

  return (
    <>
      <form className="form flex-column" action="" onSubmit={handleSubmit(onSubmit)}>
        {contactsFormField.map(({ name, label, validation }) => (
          <InputText key={name} label={label} register={register(name, validation)} />
        ))}
        {errors.name && <ErrorMessage text={errors.name.message as string} />}
        <MainButton text={'Изменить'} icon={''} />
      </form>
    </>
  );
};
