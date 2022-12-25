import {
  StyleSheet,
  View,
  TextInput,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Colors from '~/../styles/colors';

interface Props {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  secureTextEntry: boolean;
  marginBottom?: number;
}

export default function CustomInput({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  marginBottom,
}: Props) {
  const {width} = useWindowDimensions();
  const containerStyle: ViewStyle[] = [
    styles.container,
    {width: width - 32},
    {marginBottom: marginBottom ? marginBottom : 0},
  ];

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: Colors.GRAY_20,
  },
  input: {
    width: '100%',
    height: 46,
    paddingHorizontal: 11,
  },
});
