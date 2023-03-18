import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Keyframe } from 'react-native-reanimated';
import Button from './ui/Button';

export default function App() {
  const keyframe = new Keyframe({
    from: {
      transform: [{ rotate: '0deg' }],
    },
    to: {
      transform: [{ rotate: '45deg' }],
    },
  })

  const animateText = () => {
    console.log('test');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text} entering={keyframe}>Woah, so simple!</Text>
      <StatusBar style="auto" />
      <Button title="test" onPress={() => animateText()} />
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
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
