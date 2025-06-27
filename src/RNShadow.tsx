import React from 'react';
import { View, Platform, StyleSheet, ViewProps } from 'react-native';

const styles = StyleSheet.create({
  androidShadow: {
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});

// Создаем классовый компонент, который соответствует типу View
class AndroidShadowView extends React.Component<ViewProps> {
  static forceTouchAvailable = false; // Добавляем обязательное статическое свойство

  render() {
    const { style, children, ...rest } = this.props;
    return (
      <View style={[styles.androidShadow, style]} {...rest}>
        {children}
      </View>
    );
  }
}

// Явно приводим тип к нужному виду
const RNShadow = Platform.select({
  android: AndroidShadowView as typeof View,
  ios: View,
  default: View,
});

export { RNShadow };
