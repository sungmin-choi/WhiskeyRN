import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SvgIcon from './components/SvgIcon';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <SvgIcon name="calendar" />
    </View>
  );
}

function EditScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Edit!</Text>
    </View>
  );
}

function DibsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Dibs!</Text>
    </View>
  );
}

function MyScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My Page!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="작성" component={EditScreen} />
        <Tab.Screen name="찜" component={DibsScreen} />
        <Tab.Screen name="마이" component={MyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
