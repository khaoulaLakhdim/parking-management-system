import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("http://10.126.60.97:8000/detect")
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
      })
      .catch(err => {
        console.error("Failed to fetch:", err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
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
