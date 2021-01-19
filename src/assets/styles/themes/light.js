import base from './base';
import colors from '../core/colors';
import { themes } from '@constants/index';

export default {
  ...base,
  name: themes.LIGHT,
  colors: {
    borders: {
      primary: colors.rose,
      secondary: colors.danube,
      active: colors.rose
    },
    bg: {
      primary: colors.rose,
      secondary: colors.indigoDye,
      tertiary: colors.white,
      quaternary: colors.gray,
      quinary: colors.danube,
      playerHeader: colors.transparentGray
    },
    font: {
      primary: colors.rose,
      secondary: colors.indigoDye,
      tertiary: colors.gray,
      quaternary: colors.white,
      quinary: colors.mineShaft,
      active: colors.rose,
      danger: colors.red
    }
  }
};
