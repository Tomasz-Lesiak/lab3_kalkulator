import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  orange?: boolean;
  flex?: number;
};

export default function App() {
  return (
    <View style={styles.container}>

      {/* WYŚWIETLACZ */}
      <View style={styles.display}>
        <Text style={styles.displayText}>0</Text>
      </View>

      {/* RZĘDY */}
      <View style={styles.row}>
        <Button title="AC" />
        <Button title="" />
        <Button title="" />
        <Button title="÷" orange />
      </View>

      <View style={styles.row}>
        <Button title="7" />
        <Button title="8" />
        <Button title="9" />
        <Button title="×" orange />
      </View>

      <View style={styles.row}>
        <Button title="4" />
        <Button title="5" />
        <Button title="6" />
        <Button title="-" orange />
      </View>

      <View style={styles.row}>
        <Button title="1" />
        <Button title="2" />
        <Button title="3" />
        <Button title="+" orange />
      </View>

      <View style={styles.row}>
        <Button title="0" flex={2} />
        <Button title="," />
        <Button title="=" orange />
      </View>

    </View>
  );
}

function Button({ title, orange = false, flex = 1 }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        orange && styles.orange,
        { flex }
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666'
  },
  display: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20
  },
  displayText: {
    fontSize: 48,
    color: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#444',
    backgroundColor: '#888'
  },
  buttonText: {
    fontSize: 24,
    color: 'white'
  },
  orange: {
    backgroundColor: '#f39c12'
  }
});