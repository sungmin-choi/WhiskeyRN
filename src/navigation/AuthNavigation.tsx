import React from 'react';

import SignInScreen from '../screens/SignInScreen';
import LogInScreen from '../screens/LogInScreen';

import Colors from '~/../styles/colors';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '~/types/authNavigation';
export default function AuthNavigation() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        // headerBackImageSource: arrowLeftImg,
        headerTitleAlign: 'center',
        headerTintColor: Colors.BLACK,
      }}>
      <Stack.Group>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="LogIn" component={LogInScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
