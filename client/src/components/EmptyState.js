import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function EmptyState({
  imageSource,
  title,
  subtitle,
  buttonText,
  onPress,
  tintColor = '#CCC',
}) {
  return (
    <View style={styles.centered}>
      <Image source={imageSource} style={[styles.image, { tintColor }]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { alignItems: 'center', marginTop: 40 },
  image: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  button: { backgroundColor: '#FF6B6B', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 24 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
