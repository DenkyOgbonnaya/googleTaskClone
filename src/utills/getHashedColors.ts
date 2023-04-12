const COLORS = [
  '#e21400',
  '#91580f',
  '#f8a700',
  '#f78b00',
  '#58dc00',
  '#287b00',
  '#a8f07a',
  '#4ae8c4',
  '#3b88eb',
  '#3824aa',
  '#a700ff',
  '#d300e7',
];
export const getHashedColor = (word: string) => {
  let hash = 7;
  for (let i = 0; i < word.length; i++) {
    hash = word.charCodeAt(i) + (hash << 5) - hash;
  }
  const index = Math.abs(hash % COLORS.length);
  return COLORS[index];
};
