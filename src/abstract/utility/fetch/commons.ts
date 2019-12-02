export const calShouldRefetch = (dataLength: number, itemIndex: number) =>
  dataLength / 2 <= itemIndex + 1;
