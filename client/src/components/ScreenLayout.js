// src/components/ScreenLayout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';

export default function ScreenLayout({ title, avatarSource, children }) {
  return (
    <View style={styles.container}>
      <Header title={title} avatarSource={avatarSource} />
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#A0A0A0' },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
});
