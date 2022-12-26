import {
  SafeAreaView,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
  Button,
} from 'react-native';
import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import Logo from '@assets/images/i_sleep.png';
import CustomInput from '~/components/CustomInput';
import CustomButton from '~/components/CustomButton';
import {emailValidate} from '~/../utils/validation';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler';

const SignInScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const {height} = useWindowDimensions();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['40%', '40%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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
        onPress={() => bottomSheetRef.current?.expand()}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        enablePanDownToClose
        snapPoints={snapPoints}
        backdropComponent={props => (
          <BottomSheetBackdrop opacity={0.7} {...props} />
        )}
        onChange={handleSheetChanges}>
        <View style={styles.modal}>
          <Button
            title="닫기"
            onPress={() => bottomSheetRef.current?.forceClose()}
          />
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 300,
  },
});

export default SignInScreen;
