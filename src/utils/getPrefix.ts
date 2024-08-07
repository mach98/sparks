export const getPrefix = (index: number): string => {
  const prefixes = ['A', 'B', 'C'];
  return prefixes[index] || '';
};
