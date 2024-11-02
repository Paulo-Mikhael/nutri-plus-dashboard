export function filteredArrayByText<T>({
  array,
  arrayItem,
  text,
}: { array: Array<T>; arrayItem: string; text: string }): Array<T> {
  const filteredArray = array.filter(() => {
    const foodName = arrayItem.toLowerCase().trim();
    const normalizedSearch = text.toLowerCase().trim();

    return foodName.includes(normalizedSearch);
  });

  return filteredArray;
}
