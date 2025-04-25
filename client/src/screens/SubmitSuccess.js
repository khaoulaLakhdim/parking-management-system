import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions,
  Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.9;

const SubmitSuccess = ({ navigation }) => {
  const handleGoToHomepage = () => {
    navigation.replace('Lots');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Decorative dots */}
        <View style={[styles.dot, styles.dot1]} />
        <View style={[styles.dot, styles.dot2]} />
        <View style={[styles.dot, styles.dot3]} />
        <View style={[styles.dot, styles.dot4]} />
        <View style={[styles.dot, styles.dot5]} />
        <View style={[styles.dot, styles.dot6]} />
        
        {/* Gradient circle with checkmark */}
        <LinearGradient
          colors={['#FF6B6B', '#FF8787']}
          style={styles.gradientCircle}
        >
          <Image 
            source={require('../../assets/check-icon.png')} 
            style={styles.checkIcon}
          />
        </LinearGradient>
        
        {/* Success message */}
        <Text style={styles.title}>
          Your Parking Request Has Been Submitted!
        </Text>
        
        <Text style={styles.subtitle}>
          You will receive a notification once your role is assigned
        </Text>
        
        {/* Button */}
        <TouchableOpacity 
          style={styles.button}
          onPress={handleGoToHomepage}
        >
          <Text style={styles.buttonText}>Go to Homepage</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: cardWidth,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 40,
  },
  gradientCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkIcon: {
    width: 40,
    height: 40,
    tintColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF6B6B',
    width: '100%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Decorative dots
  dot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B6B',
  },
  dot1: {
    top: '25%',
    left: '20%',
  },
  dot2: {
    top: '15%',
    left: '50%',
  },
  dot3: {
    top: '25%',
    right: '20%',
  },
  dot4: {
    bottom: '40%',
    left: '15%',
  },
  dot5: {
    bottom: '35%',
    right: '15%',
  },
  dot6: {
    bottom: '45%',
    right: '30%',
  },
});

export default SubmitSuccess;