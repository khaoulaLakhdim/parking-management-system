import React from 'react';
import { FlatList } from 'react-native';
import LotCard from './LotCard';

export default function LotsList({ lots, onOpen }) {
  return (
    <FlatList
      data={lots}
      keyExtractor={l => l.id}
      renderItem={({ item }) => (
        <LotCard lot={item} onOpen={onOpen} />
      )}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
}
