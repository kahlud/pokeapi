export const capitalize = (text: string) => {
  const nameUperCase = text[0].toUpperCase();
  const name = text.slice(1);
  return `${nameUperCase}${name}`;
};
