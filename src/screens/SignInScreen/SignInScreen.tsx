import {Text, SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import Logo from '@assets/images/i_sleep.png';
const SignInScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Sign In</Text>
        <Image source={Logo} />
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
