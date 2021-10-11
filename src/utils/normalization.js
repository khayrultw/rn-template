import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// based on iPhone 8's scale
const wscale = SCREEN_WIDTH / 375;
const hscale = SCREEN_HEIGHT / 667;

const normalize = (size, based) => {
  const wscaleFinal = wscale <= 1.5 ? wscale : 1.45 + Math.log(wscale - 0.52) / Math.log(5);
  const hscaleFinal = hscale <= 1.5 ? hscale : 1.45 + Math.log(hscale - 0.52) / Math.log(5);

  const newSize = based === 'height' ? size * hscaleFinal : size * wscaleFinal;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export default normalize;
