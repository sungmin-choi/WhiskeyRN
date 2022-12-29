import {
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import CustomInput from '~/components/CustomInput';
import CustomButton from '~/components/CustomButton';
import {emailValidate} from '~/../utils/validation';
import BottomSheet from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler';
import TermsDrawer from './TermsDrawer';

import SvgIcon from '~/components/SvgIcon';
import Colors from '~/../styles/colors';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();
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
    navigation.navigate('로그인' as never);
    // bottomSheetRef.current?.expand();
  };
  useEffect(() => {
    setError(!emailValidate(email));
  }, [email]);
  return (
    <SafeAreaView style={[styles.root, {height: height}]}>
      <View style={styles.banner}>
        <Text style={styles.banner_sub_title}>위스키의 시작은</Text>
        <SvgIcon name="text_logo" />
      </View>
      <CustomInput
        secureTextEntry={false}
        placeholder="이메일을 입력해 주세요"
        value={email}
        setValue={setEmail}
        marginBottom={16}
        isError={email.length > 0 && error}
        errorMessage={'이메일 형식이 올바르지 않습니다'}
      />
      <CustomButton
        textValue="시작하기"
        disabled={error}
        onPress={handleStartBtn}
      />
      <TermsDrawer ref={bottomSheetRef} closeDrawer={handleCloseTerms} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  banner: {
    marginTop: 100,
    marginBottom: 48,
  },
  banner_sub_title: {
    fontFamily: 'Apple SD Gothic Neo',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.6,
    textAlign: 'center',
    color: '#2D2C2C',
    marginBottom: 8,
  },
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.WHITE,
  },

  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 300,
  },
});

export default SignInScreen;
