import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import LogInScreen from './LogInScreen';
import SvgIcon from '~/components/SvgIcon';

export default function AuthNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Group>
        <Stack.Screen
          name="signIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="로그인" component={LogInScreen} options={{}} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
