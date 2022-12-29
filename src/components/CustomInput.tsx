import {
  StyleSheet,
  View,
  TextInput,
  useWindowDimensions,
  ViewStyle,
  Text,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '~/../styles/colors';
import Inputs from '~/../styles/inputs';
import SvgIcon from './SvgIcon';

interface Props {
  value: string;
  type: 'email' | 'password';
  setValue?: (value: string) => void;
  placeholder?: string;
  marginBottom?: number;
  marginTop?: number;
  isError?: boolean;
  errorMessage?: string;
}

export default function CustomInput({
  value,
  setValue,
  placeholder,
  isError,
  errorMessage,
  marginBottom,
  marginTop,
  type,
}: Props) {
  const {width} = useWindowDimensions();
  const [isSecure, setIsSecure] = useState<boolean>(
    type === 'password' ? true : false,
  );
  const rootStyle: ViewStyle[] = [
    {
      marginBottom: marginBottom ? marginBottom : 0,
      marginTop: marginTop ? marginTop : 0,
    },
  ];
  const containerStyle: ViewStyle[] = [
    styles.container,
    {
      width: width - 32,
      borderColor: isError ? Colors.RED_100 : Colors.GRAY_20,
      borderWidth: isError ? 1 : 1.5,
    },
  ];

  return (
    <View style={rootStyle}>
      <View style={containerStyle}>
        <TextInput
          secureTextEntry={isSecure}
          value={value}
          onChangeText={setValue}
          style={styles.input}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <Pressable
            onPress={() => setIsSecure(prev => !prev)}
            style={styles.secure_icon}>
            {isSecure ? <SvgIcon name="eye" /> : <SvgIcon name="eye_slash" />}
          </Pressable>
        )}
      </View>
      {isError && <Text style={styles.error_message}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
  },
  input: {
    width: '100%',
    ...Inputs.TEXT_INPUT_MD,
  },
  error_message: {
    color: Colors.RED_100,
    marginTop: 6,
  },
  secure_icon: {
    position: 'absolute',
    right: 11,
    top: 11,
  },
});
