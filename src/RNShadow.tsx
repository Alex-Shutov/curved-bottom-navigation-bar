import { Platform, requireNativeComponent, View,ViewProps } from 'react-native';
import type { ComponentType } from 'react';


let RNShadow: ComponentType<ViewProps>;

if (Platform.OS === 'android') {
  try {
    RNShadow = requireNativeComponent('RNShadow') as ComponentType<ViewProps>;
  } catch (e) {
    console.warn('RNShadow native component not found, using fallback');
    RNShadow = View;
  }
} else {
  RNShadow = View;
}

export { RNShadow }
