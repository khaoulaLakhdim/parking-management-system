import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';

const FormStep3 = ({ navigation }) => {
  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carColor, setCarColor] = useState('');
  const [registrationPlate, setRegistrationPlate] = useState('');

  const handleSubmit = () => {
    // For now, navigate to Lots screen as a stub
    navigation.replace('Lots');
    // In the future, this would be: navigation.replace('SubmitSuccess');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <Text style={styles.title}>Parking Permit Form</Text>
        
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressItem}>
            <View style={styles.progressCircle}>
              <Text style={styles.progressCircleText}>1</Text>
            </View>
            <Text style={styles.progressLabel}>Personal Information</Text>
          </View>
          
          <View style={styles.progressLine} />
          
          <View style={styles.progressItem}>
            <View style={styles.progressCircle}>
              <Text style={styles.progressCircleText}>2</Text>
            </View>
            <Text style={styles.progressLabel}>Car Information</Text>
          </View>
          
          <View style={styles.progressLine} />
          
          <View style={styles.progressItem}>
            <View style={[styles.progressCircle, styles.activeCircle]}>
              <Text style={styles.activeCircleText}>3</Text>
            </View>
            <Text style={styles.progressLabel}>Second Car</Text>
          </View>
        </View>
        
        {/* Form Fields */}
        <View style={styles.formContainer}>
          {/* Car Brand Field */}
          <Text style={styles.fieldLabel}>Car Brand</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your car brand"
              value={carBrand}
              onChangeText={setCarBrand}
            />
            <Text style={styles.chevron}>{'>'}</Text>
          </View>
          
          {/* Car Model Field */}
          <Text style={styles.fieldLabel}>Car Model</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your car model"
              value={carModel}
              onChangeText={setCarModel}
            />
            <Text style={styles.chevron}>{'>'}</Text>
          </View>
          
          {/* Car Color Field */}
          <Text style={styles.fieldLabel}>Car Color</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your car color"
            value={carColor}
            onChangeText={setCarColor}
          />
          
          {/* Registration Plate Field */}
          <Text style={styles.fieldLabel}>Registration Plate</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your registration plate"
            value={registrationPlate}
            onChangeText={setRegistrationPlate}
          />
        </View>
        
        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B6B',
    textAlign: 'center',
    marginVertical: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  progressItem: {
    alignItems: 'center',
    width: 80,
  },
  progressCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  activeCircle: {
    backgroundColor: '#FF6B6B',
  },
  progressCircleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  activeCircleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  progressLabel: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'center',
  },
  progressLine: {
    height: 2,
    width: 30,
    backgroundColor: '#D3D3D3',
  },
  formContainer: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 16,
  },
  chevron: {
    paddingRight: 15,
    color: '#999999',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 40,
  },
  submitButton: {
    backgroundColor: '#FF6B6B',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default FormStep3;