import {
  Text,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '~/../styles/colors';
import CustomInput from '~/components/CustomInput';
import {LogInProps} from '~/types/authNavigation';
import CustomButton from '~/components/CustomButton';
import {useAppDispatch} from '~/redux/store/hooks';
import {setLoggedIn} from '~/redux/slices/user';
export default function LogInScreen({route}: LogInProps) {
  const {height} = useWindowDimensions();
  const [password, setPassword] = useState<string>('');
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
      <CustomInput
        type="email"
        placeholder="이메일을 입력해 주세요"
        value={route.params?.email}
        marginBottom={12}
        marginTop={27}
      />
      <CustomInput
        type="password"
        placeholder="비밀번호"
        value={password}
        setValue={setPassword}
        marginBottom={48}
      />
      <CustomButton
        textValue="로그인"
        disabled={isDisabled}
        onPress={handleSubmit}
      />
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
