import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  orange?: boolean;
  flex?: number;
  onPress: () => void;
};

export default function App() {
  const [display, setDisplay] = useState('0');
  const [firstValue, setFirstValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handlePress = (value: string) => {
    if (value === 'AC') {
      setDisplay('0');
      setFirstValue(null);
      setOperator(null);
      return;
    }

    if (['+', '-', '×', '÷'].includes(value)) {
      setFirstValue(parseFloat(display));
      setOperator(value);
      setDisplay('0');
      return;
    }

    if (value === '=') {
      if (firstValue !== null && operator) {
        const secondValue = parseFloat(display);
        let result = 0;

        switch (operator) {
          case '+':
            result = firstValue + secondValue;
            break;
          case '-':
            result = firstValue - secondValue;
            break;
          case '×':
            result = firstValue * secondValue;
            break;
          case '÷':
            result = firstValue / secondValue;
            break;
        }

        setDisplay(result.toString());
        setFirstValue(null);
        setOperator(null);
      }
      return;
    }

    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <View style={styles.container}>

      {/* WYŚWIETLACZ */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.acButton]}
          onPress={() => handlePress('AC')}>
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>
        <View style={styles.empty} />
        <View style={styles.empty} />
        <Button title="÷" orange onPress={() => handlePress('÷')} />
      </View>

      <View style={styles.row}>
        <Button title="7" onPress={() => handlePress('7')} />
        <Button title="8" onPress={() => handlePress('8')} />
        <Button title="9" onPress={() => handlePress('9')} />
        <Button title="×" orange onPress={() => handlePress('×')} />
      </View>

      <View style={styles.row}>
        <Button title="4" onPress={() => handlePress('4')} />
        <Button title="5" onPress={() => handlePress('5')} />
        <Button title="6" onPress={() => handlePress('6')} />
        <Button title="-" orange onPress={() => handlePress('-')} />
      </View>

      <View style={styles.row}>
        <Button title="1" onPress={() => handlePress('1')} />
        <Button title="2" onPress={() => handlePress('2')} />
        <Button title="3" onPress={() => handlePress('3')} />
        <Button title="+" orange onPress={() => handlePress('+')} />
      </View>

      <View style={styles.row}>
        <Button title="0" flex={2} onPress={() => handlePress('0')} />
        <Button title="," onPress={() => handlePress('.')} />
        <Button title="=" orange onPress={() => handlePress('=')} />
      </View>

    </View>
  );
}

function Button({ title, orange = false, flex = 1, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        orange && styles.orange,
        { flex }
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555'
  },
  display: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#444'
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#444',
    backgroundColor: '#777'
  },
  buttonText: {
    fontSize: 24,
    color: 'white'
  },
  orange: {
    backgroundColor: '#f39c12'
  },
  empty: {
    flex: 1,
    backgroundColor: '#666'
  },
  acButton: {
    backgroundColor: '#666'
  }
});