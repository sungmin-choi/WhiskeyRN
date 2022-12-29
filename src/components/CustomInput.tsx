import {
  StyleSheet,
  View,
  TextInput,
  useWindowDimensions,
  ViewStyle,
  Text,
} from 'react-native';
import React from 'react';
import Colors from '~/../styles/colors';
import Inputs from '~/../styles/inputs';

interface Props {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  secureTextEntry: boolean;
  marginBottom?: number;
  isError?: boolean;
  errorMessage?: string;
}

export default function CustomInput({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  isError,
  errorMessage,
  marginBottom,
}: Props) {
  const {width} = useWindowDimensions();
  const containerStyle: ViewStyle[] = [
    styles.container,
    {
      width: width - 32,
      borderColor: isError ? Colors.RED_100 : Colors.GRAY_20,
      borderWidth: isError ? 1 : 1.5,
    },
  ];

  return (
    <View style={{marginBottom: marginBottom ? marginBottom : 0}}>
      <View style={containerStyle}>
        <TextInput
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={setValue}
          style={styles.input}
          placeholder={placeholder}
        />
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
});
