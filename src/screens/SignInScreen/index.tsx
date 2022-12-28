import {
  SafeAreaView,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Logo from '@assets/images/i_sleep.png';
import CustomInput from '~/components/CustomInput';
import CustomButton from '~/components/CustomButton';
import {emailValidate} from '~/../utils/validation';
import BottomSheet from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler';
import TermsDrawer from './TermsDrawer';

const SignInScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const {height} = useWindowDimensions();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks

  const handleCloseTerms = () => {
    bottomSheetRef.current?.forceClose();
  };

  const handleStartBtn = () => {
    bottomSheetRef.current?.expand();
  };
  useEffect(() => {
    setError(!emailValidate(email));
  }, [email]);
  return (
    <SafeAreaView style={[styles.root, {height: height}]}>
      <Image
        source={Logo}
        resizeMode="contain"
        style={[styles.logo, {height: height * 0.3}]}
      />
      <CustomInput
        secureTextEntry={false}
        placeholder="이메일"
        value={email}
        setValue={setEmail}
        marginBottom={114}
      />
      <CustomButton
        textValue="시작하기"
        disabled={!error}
        onPress={handleStartBtn}
      />
      <TermsDrawer ref={bottomSheetRef} closeDrawer={handleCloseTerms} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 300,
  },
});

export default SignInScreen;
