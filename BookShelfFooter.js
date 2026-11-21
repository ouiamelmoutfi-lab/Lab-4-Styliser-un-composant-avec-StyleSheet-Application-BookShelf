import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookShelfFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        Tous droits réservés – BookShelf, 2024
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    padding: 15,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});