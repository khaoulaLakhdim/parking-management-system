import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/parking-illustration.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>
      
      <Text style={styles.title}>Find Your Parking Spot Easily!</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={() => navigation.navigate('Email')}
        >
          <Text style={styles.loginButtonText}>Login with Outlook</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.guestButton]}
          onPress={() => navigation.navigate('Lots')}
        >
          <Text style={styles.guestButtonText}>Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  illustration: {
    width: 250,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333333',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  loginButton: {
    backgroundColor: '#FF6B6B',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  guestButton: {
    backgroundColor: '#ECECEC',
  },
  guestButtonText: {
    color: '#4A4A4A',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginScreen;