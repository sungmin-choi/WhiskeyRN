import {StyleSheet, Text, Pressable, useWindowDimensions} from 'react-native';
import React from 'react';
import Colors from '~/../styles/colors';
import Fonts from '~/../styles/fonts';

interface Props {
  textValue: string;
  disabled: boolean;
  onPress: () => void;
}
export default function CustomButton({textValue, onPress, disabled}: Props) {
  const {width} = useWindowDimensions();
  const bgcolor = disabled ? Colors.GRAY_40 : Colors.GRAY_100;
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, {width: width - 32, backgroundColor: bgcolor}]}>
      <Text style={styles.text}>{textValue}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    borderRadius: 8,
  },
  text: {
    ...Fonts.CENTER_16_B_WHITE_700,
  },
});
