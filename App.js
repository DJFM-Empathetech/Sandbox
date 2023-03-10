import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './ui/Button';

export default function App() {
  const [color, setColor] = useState('#000000');

  const colorRandom = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color}`;
  };

  return (
    <View style={styles.container}>
      <Text>Woah, so simple!</Text>
      <StatusBar style="auto" />
      <Button title="test" color={color} onPress={() => setColor(colorRandom)} />
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
