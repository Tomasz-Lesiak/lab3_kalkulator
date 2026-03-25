import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Zadanie 2</Text>

      <TouchableOpacity style={styles.button} onPress={toggle}>
        <Text style={styles.buttonText}>
          {visible ? 'Ukryj' : 'Pokaż'}
        </Text>
      </TouchableOpacity>

      {visible && (
        <View style={styles.box}>
          <Text style={styles.text}>Nazywam się</Text>
          <Text style={styles.name}>Tomasz Lesiak</Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 14
  },
  box: {
    alignItems: 'center'
  },
  text: {
    fontSize: 14
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});