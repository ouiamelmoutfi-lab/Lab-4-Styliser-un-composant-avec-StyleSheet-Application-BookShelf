import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import BookShelfHeader from './BookShelfHeader';
import WelcomeScreen from './WelcomeScreen';
import BookShelfFooter from './BookShelfFooter';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <BookShelfHeader />
      <WelcomeScreen />
      <BookShelfFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
});