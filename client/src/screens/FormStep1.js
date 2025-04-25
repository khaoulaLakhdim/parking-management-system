import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';

const FormStep1 = ({ navigation }) => {
  const [cin, setCin] = useState('');
  const [status, setStatus] = useState('');
  const [living, setLiving] = useState('');

  const statusOptions = ['Student', 'AUI Staff', 'ASI/AUC Staff', 'AUI Faculty', 'Other'];
  const livingOptions = ['On Campus', 'Annex / ACC', 'Downtown', 'Farah Inn / CMKD', 'Off Campus'];

  const handleNext = () => {
    navigation.navigate('FormStep2');
  };

  const handleCancel = () => {
    navigation.replace('Lots');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <Text style={styles.title}>Parking Permit Form</Text>
        
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressItem}>
            <View style={[styles.progressCircle, styles.activeCircle]}>
              <Text style={styles.activeCircleText}>1</Text>
            </View>
            <Text style={styles.progressLabel}>Your Information</Text>
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
            <View style={styles.progressCircle}>
              <Text style={styles.progressCircleText}>3</Text>
            </View>
            <Text style={styles.progressLabel}>Done</Text>
          </View>
        </View>
        
        {/* Form Fields */}
        <View style={styles.formContainer}>
          {/* CIN Field */}
          <TextInput
            style={styles.input}
            placeholder="Enter your CIN"
            value={cin}
            onChangeText={setCin}
          />
          
          {/* Status Field */}
          <Text style={styles.fieldLabel}>What is your status?</Text>
          <View style={styles.optionsContainer}>
            {statusOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionBox,
                  status === option && styles.selectedOption
                ]}
                onPress={() => setStatus(option)}
              >
                <View style={styles.checkbox}>
                  {status === option && <View style={styles.checkboxInner} />}
                </View>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* Living Field */}
          <Text style={styles.fieldLabel}>Where do you live?</Text>
          <View style={styles.optionsContainer}>
            {livingOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionBox,
                  living === option && styles.selectedOption
                ]}
                onPress={() => setLiving(option)}
              >
                <View style={styles.checkbox}>
                  {living === option && <View style={styles.checkboxInner} />}
                </View>
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleCancel}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
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
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 16,
    backgroundColor: '#F8F8F8',
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 10,
  },
  optionsContainer: {
    marginBottom: 16,
  },
  optionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    backgroundColor: '#FF6B6B',
  },
  optionText: {
    fontSize: 14,
    color: '#333333',
  },
  selectedOption: {
    // You can add styling for selected options if needed
  },
  buttonContainer: {
    marginTop: 20,
  },
  nextButton: {
    backgroundColor: '#FF6B6B',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default FormStep1;