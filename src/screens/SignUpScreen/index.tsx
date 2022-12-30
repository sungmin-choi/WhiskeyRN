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
import {SignUpProps} from '~/types/authNavigation';
import CustomButton from '~/components/CustomButton';
import {useAppDispatch} from '~/redux/store/hooks';
import {setLoggedIn} from '~/redux/slices/user';
import Fonts from '~/../styles/fonts';
import {passwordValidate} from '~/../utils/validation';
export default function SignUpScreen({route}: SignUpProps) {
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
      <Text
        style={[styles.label_email, {width: width - 36, marginTop: marginTop}]}>
        이메일
      </Text>
      <CustomInput
        type="email"
        placeholder="이메일을 입력해 주세요"
        value={route.params?.email}
      />
      <Text style={[styles.label_password, {width: width - 36}]}>비밀번호</Text>
      <CustomInput
        type="password"
        placeholder="영문, 숫자, 특수문자 조합 8~20자"
        value={password}
        setValue={setPassword}
        isError={passwordError}
        errorMessage="영문, 숫자, 특수문자 조합 8~20자로 입력해 주세요"
        marginBottom={12}
      />
      <CustomInput
        type="password"
        placeholder="비밀번호 재입력"
        value={confirmPW}
        isError={confirmPWError}
        errorMessage="비밀반호가 일치하지 않아요"
        setValue={setConfirmPW}
        marginBottom={confirmPWError ? 24 : 48}
      />
      <CustomButton
        textValue="다음"
        disabled={isDisabled}
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  label_email: {
    ...Fonts.LABEL,
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
