export const calShouldRefetch = (dataLength: number, itemIndex: number) =>
  Math.ceil(dataLength / 3) <= itemIndex + 1;

export const enToIRNumberConvertor = (enNumber: string | number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const persianMap = persianDigits.split("");
  const persian_number = enNumber
    .toString()
    .replace(/\d/g, m => persianMap[parseInt(m)]);
  return persian_number;
};
