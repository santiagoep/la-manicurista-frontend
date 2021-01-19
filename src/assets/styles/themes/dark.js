import base from './base';
import colors from '../core/colors';
import { themes } from '@constants/index';

export default {
  ...base,
  name: themes.DARK,
  colors: {
    borders: {
      primary: colors.indigoDye,
      secondary: colors.rose,
      active: colors.indigoDye
    },
    bg: {
      primary: colors.indigoDye,
      secondary: colors.rose,
      tertiary: colors.white,
      quaternary: colors.gray,
      quinary: colors.indigoDye,
      playerHeader: colors.transparentGray
    },
    font: {
      primary: colors.indigoDye,
      secondary: colors.rose,
      tertiary: colors.gray,
      quaternary: colors.white,
      quinary: colors.mineShaft,
      active: colors.indigoDye,
      danger: colors.red
    }
  }
};
