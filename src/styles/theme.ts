const palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#212529',
  white: '#F0F2F3',
  gray: '#212529',
  blue: '#a3cef1',
  grayDark: '#403d39',
  graySecondary: '#d6d6d6',
  grayPrimary: '#f4f4f9',
  gold: '#ffd100',
};

export const theme = {
  colors: {
    background: palette.gray,
    backgroundSecondary: palette.grayDark,
    foreground: palette.black,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
    faded: palette.gray,
    blue: palette.blue,
    menu: palette.white,
    graySecondary: palette.graySecondary,
    grayPrimary: palette.grayPrimary,
    gold: palette.gold,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: 'Roboto-Regular',
      fontSize: 18,
      fontWeight: 'bold',
      color: palette.grayPrimary,
    },
    body: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: palette.graySecondary,
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
  },
};
