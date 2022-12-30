import {
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '~/../styles/colors';
import CustomInput from '~/components/CustomInput';
import {SignUpProps} from '~/types/authNavigation';
import CustomButton from '~/components/CustomButton';
import {useAppDispatch} from '~/redux/store/hooks';
import {setLoggedIn} from '~/redux/slices/user';
export default function SignUpScreen({route}: SignUpProps) {
  const {height} = useWindowDimensions();
  const [password, setPassword] = useState<string>('');
  const [confirmPW, setConfirmPW] = useState<string>('');
  const dsipatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  useEffect(() => {
    if (password.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [password]);
  const handleSubmit = () => {
    dsipatch(setLoggedIn(true));
  };
  return (
    <SafeAreaView style={[styles.root, {height: height}]}>
      <Text style={styles.label_email}>이메일</Text>
      <CustomInput
        type="email"
        placeholder="이메일을 입력해 주세요"
        value={route.params?.email}
        marginBottom={12}
        marginTop={6}
      />
      <CustomInput
        type="password"
        placeholder="영문, 숫자, 특수문자 조합 8~20자"
        value={password}
        setValue={setPassword}
        marginBottom={12}
      />
      <CustomInput
        type="password"
        placeholder="영문, 숫자, 특수문자 조합 8~20자"
        value={confirmPW}
        setValue={setConfirmPW}
        marginBottom={48}
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
    textAlign: 'left',
    color: Colors.GRAY_100,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'Pretendard',
  },
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.WHITE,
  },
});
