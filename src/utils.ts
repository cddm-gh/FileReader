export const stringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });
  return new Date(year, month - 1, day);
};
