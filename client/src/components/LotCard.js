import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import icon from '../../assets/icon.png';

export default function LotCard({ lot, onOpen }) {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Image source={icon} style={styles.icon} />
        <View>
          <Text style={styles.name}>{lot.name}</Text>
          <Text style={styles.spots}>{lot.spotsLeft}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => onOpen(lot.id)} style={styles.button}>
        <Text style={styles.buttonText}>Open Maps</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FF6B6B',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: { flexDirection: 'row', alignItems: 'center' },
  icon: { width: 24, height: 24, marginRight: 12 },
  name: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  spots: { color: '#fff', fontSize: 14 },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  buttonText: { color: '#000', fontWeight: '600' },
});
