module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@screens': './src/screens',
          '@navigations': './src/navigations',
          '@components': './src/components',
          '@styles': './src/styles',
          '@utills': './src/utills',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@assets': './src/assets',
          '@interfaces': './src/interfaces',
        },
      },
    ],
  ],
};
