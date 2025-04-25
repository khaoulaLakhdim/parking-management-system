import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Import your screens
import SplashScreen from '../screens/SplashScreen';
import LoginScreen  from '../screens/LoginScreen';
import LotScreen from '../screens/LotScreen';
import FormStep1 from '../screens/FormStep1';
import FormStep2 from '../screens/FormStep2';
import FormStep3 from '../screens/FormStep3';
import SubmitSuccess from '../screens/SubmitSuccess';
// TODO: Import additional screens as you create them

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SubmitSuccess" 
        screenOptions={{ headerShown: false }}
      >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login"  component={LoginScreen} />
            <Stack.Screen name="Lots" component={LotScreen} />
            <Stack.Screen name="FormStep1" component={FormStep1} />      
            <Stack.Screen name="FormStep2" component={FormStep2} />
            <Stack.Screen name="FormStep3" component={FormStep3} />
            <Stack.Screen name="SubmitSuccess" component={SubmitSuccess} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
