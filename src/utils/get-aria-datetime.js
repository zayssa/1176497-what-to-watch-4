export const getAriaDateTime = (data) => {
  const date = new Date(data);

  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
