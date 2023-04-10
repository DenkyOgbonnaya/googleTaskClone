const palette = {
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#212529',
  white: '#F0F2F3',
  gray: '#212529',
  blue: '#a3cef1',
};

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
    faded: palette.gray,
    blue: palette.blue,
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
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
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
