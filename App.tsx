import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Text} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>App</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}
