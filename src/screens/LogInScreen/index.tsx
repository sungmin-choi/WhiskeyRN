import {
  Text,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Colors from '~/../styles/colors';

export default function LogInScreen() {
  const {height} = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.root, {height: height}]}>
      <Text>index</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.WHITE,
  },
});
