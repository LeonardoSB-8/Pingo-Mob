// This component is used to create a safe status bar area in React Native applications.
import React from 'react';
import { View, Platform, StatusBar } from 'react-native'; // Importe StatusBar aqui
import Constants from 'expo-constants';

export default function SafeStatusBar({
  backgroundColor = '#4CAF50',
  barStyle = 'light-content'
}) {
  const statusBarHeight = Constants.statusBarHeight || 0;

  if (Platform.OS === 'web') {
    return <View style={{ height: statusBarHeight, backgroundColor }} />;
  }

  try {
    return (
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent={false}
      />
    );
  } catch (e) {
    return <View style={{ height: statusBarHeight, backgroundColor }} />;
  }
}