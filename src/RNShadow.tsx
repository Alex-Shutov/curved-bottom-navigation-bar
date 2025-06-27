import { Platform, requireNativeComponent, View } from 'react-native';

let RNShadow;
if (Platform.OS === 'android') {
  try {
    RNShadow = requireNativeComponent('RNShadow');
  } catch (e) {
    console.warn('RNShadow native component not found, using fallback');
    RNShadow = View;
  }
} else {
  RNShadow = View;
}

export { RNShadow };
