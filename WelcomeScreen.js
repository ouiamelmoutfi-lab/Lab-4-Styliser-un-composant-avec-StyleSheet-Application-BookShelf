import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView
      style={styles.screenContainer}
      indicatorStyle="white"
    >
      <Text style={styles.title}>
        Bienvenue dans BookShelf
      </Text>

      <Text style={styles.description}>
        BookShelf est une bibliothèque numérique
        qui permet de découvrir et consulter
        des livres facilement.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 20,
  },
  title: {
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#D5D5D5',
    marginTop: 20,
  },
});