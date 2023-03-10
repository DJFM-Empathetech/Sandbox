import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './ui/Button';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Woah, so simple!</Text>
      <StatusBar style="auto" />
      <Button title="test" onPress={() => console.log('woah')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
