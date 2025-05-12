import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCounterStore } from '../store/useCounterStore';
import { CounterState } from '../types'


export default function App() {

  const { count, decrease, increase } = useCounterStore((state: CounterState) => state);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => increase()}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => decrease()}>
        <Text>Decrease</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
