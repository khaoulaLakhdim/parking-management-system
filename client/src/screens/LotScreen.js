import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  FlatList, 
  TouchableOpacity, 
  Dimensions 
} from 'react-native';

import ScreenLayout from '../components/ScreenLayout';
import avatar from '../../assets/avatar.png';

const { width } = Dimensions.get('window');

const demoLots = [
  { id: '1', name: 'Parking X', spotsLeft: 'X spots left' },
  { id: '2', name: 'Parking Y', spotsLeft: 'Y spots left' },
  { id: '3', name: 'Parking Z', spotsLeft: 'Z spots left' },
];




  
const LotsScreen = () => {
  const renderLotItem = ({ item }) => (
    <View style={styles.lotCard}>
      <View style={styles.lotInfoContainer}>
        <Image 
          source={require('../../assets/icon.png')} 
          style={styles.lotIcon} 
        />
        <View style={styles.lotTextContainer}>
          <Text style={styles.lotName}>{item.name}</Text>
          <Text style={styles.spotsLeft}>{item.spotsLeft}</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.mapsButton}
        onPress={() => console.log('Open Maps for', item.id)}
      >
        <Text style={styles.mapsButtonText}>Open Maps</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScreenLayout title="Get Your Secure Park" avatarSource={avatar}>
        {/* Content */}
            <Text style={styles.contentTitle}>Allowed Parking lots</Text>
            
            <FlatList
            data={demoLots}
            renderItem={renderLotItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            />
      </ScreenLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0A0A0',
  },
  header: {
    height: 120,
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    width: '70%',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  listContainer: {
    paddingBottom: 20,
  },
  lotCard: {
    backgroundColor: '#FF6B6B',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: width - 40,
  },
  lotInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lotIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  lotTextContainer: {
    flexDirection: 'column',
  },
  lotName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  spotsLeft: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  mapsButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  mapsButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default LotsScreen;