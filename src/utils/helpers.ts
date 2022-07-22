export const formattingDate = (str: string) => {
  const date = new Date(str);
  const transformDate = date.toLocaleDateString().split(' ').reverse().join('');
  return transformDate;
};

export const formattingContract = (arr: string[]) => {
  const [no, date] = arr;
  const contract = `${no} от ${formattingDate(date)}`;
  return contract;
};
