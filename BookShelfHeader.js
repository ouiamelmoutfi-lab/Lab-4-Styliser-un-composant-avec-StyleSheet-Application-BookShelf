import * as React from 'react';
import { View, Text } from 'react-native';

export default function BookShelfHeader() {
  return (
    <View style={{
      backgroundColor: '#EE9972',
      padding: 32,
    }}>
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
      }}>
        BookShelf
      </Text>
    </View>
  );
}