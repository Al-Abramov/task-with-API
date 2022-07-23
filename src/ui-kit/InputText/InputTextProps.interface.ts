export interface InputTextProps {
  register: FormInputProps;
  value?: string;
  label?: string;
}

type FormInputProps = {
  name: string;
};

// ['Полное название', 'Договор', 'Форма', 'Тип'] ['ФИО', 'Телефон', 'Эл. почта']
