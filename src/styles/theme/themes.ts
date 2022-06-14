const lightTheme = {
  primary: '#BA6268',

  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',

  borderLight: 'rgba(58,52,51,0.05)',

  backgroundAlt: 'rgb(255, 255, 255)',

  text: '#000000',
  text1: '#000000',
  text2: '#ffffff',

  grey: '#373737',
  grey1: '#EFEFEF',

  card: '#ffffff',

  red1: '#7c0b12',

  strokeColor: '#111827',
  overlay: 'rgba(16, 10, 53, 0.8)',
  shadow: 'rgba(0, 0, 0, 0.15)',

  gradient: 'linear-gradient(90deg, #BA6268 0.55%, #A8BBCD 100%)',
  toggleBackground: 'rgb(189, 194, 196)',
  toggleColor: 'rgb(255, 178, 55)',
}

const darkTheme: Theme = {
  primary: '#BA6268',

  background: '#100A35',
  backgroundVariant: 'rgba(28,26,26,1)',

  borderLight: 'rgba(241,233,231,0.05)',

  backgroundAlt: 'rgb(39, 38, 44)',

  text: '#ffffff',
  text1: '#000000',
  text2: '#ffffff',

  grey: '#EFEFEF',
  grey1: '#EFEFEF',

  card: '#ffffff',

  red1: '#7c0b12',

  strokeColor: '#ffffff',
  overlay: 'rgba(16, 10, 53, 0.8)',
  shadow: 'rgba(0, 0, 0, 0.15)',

  gradient: 'linear-gradient(90deg, #BA6268 0.55%, #A8BBCD 100%)',

  toggleBackground: 'rgb(102, 97, 113)',
  toggleColor: 'rgb(154, 106, 255)',
}

export type Theme = typeof lightTheme

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}
