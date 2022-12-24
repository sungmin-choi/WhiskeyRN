import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SvgIcon from './components/SvgIcon';
import * as Icons from './res';
import Colors from './styles/colors';
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
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
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName: keyof typeof Icons = 'home_fill';
            if (route.name === '홈') {
              iconName = focused ? 'home_fill' : 'home_line';
            } else if (route.name === '찜') {
              iconName = focused ? 'heart_fill' : 'heart_line';
            } else if (route.name === '마이') {
              iconName = focused ? 'user_fill' : 'user_line';
            } else if (route.name === '작성') {
              iconName = focused ? 'pencil_fill' : 'pencil_line';
            }
            return <SvgIcon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: Colors.GRAY_100,
          tabBarInactiveTintColor: Colors.GRAY_70,
        })}>
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="작성" component={EditScreen} />
        <Tab.Screen name="찜" component={DibsScreen} />
        <Tab.Screen name="마이" component={MyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
