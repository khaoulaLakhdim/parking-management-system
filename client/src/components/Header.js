import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Header({ title, avatarSource }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Image source={avatarSource} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#A0A0A0',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
