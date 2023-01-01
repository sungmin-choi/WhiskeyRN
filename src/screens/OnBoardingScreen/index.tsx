import {
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '~/../styles/colors';
import CustomInput from '~/components/CustomInput';
import {OnBoardingProps} from '~/types/authNavigation';
import CustomButton from '~/components/CustomButton';
import {useAppDispatch} from '~/redux/store/hooks';
import {setLoggedIn} from '~/redux/slices/user';
import Fonts from '~/../styles/fonts';
import {passwordValidate} from '~/../utils/validation';
export default function OnBoardingScreen({route}: OnBoardingProps) {
  const {height, width} = useWindowDimensions();
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPWError, setConfirmPWError] = useState<boolean>(false);
  const [confirmPW, setConfirmPW] = useState<string>('');
  const dsipatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const marginTop = Platform.OS === 'ios' ? 24 : 0;
  useEffect(() => {
    if (password.length > 0) {
      setPasswordError(!passwordValidate(password));
    }
    if (password.length > 0 && confirmPW.length > 0) {
      setConfirmPWError(password !== confirmPW);
    }
    if (
      password.length > 0 &&
      confirmPW.length > 0 &&
      !passwordError &&
      !confirmPWError
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [password, confirmPW, passwordError, confirmPWError]);

  const handleSubmit = () => {
    dsipatch(setLoggedIn(true));
  };
  return (
    <SafeAreaView style={[styles.root, {height: height}]}>
      <Text style={[styles.title, {width: width - 36, marginTop: marginTop}]}>
        성별을 알려주세요.
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: Colors.BLACK,
  },
  label_password: {
    ...Fonts.LABEL,
    marginTop: 20,
  },
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.WHITE,
  },
});
