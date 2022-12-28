import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  close: () => void;
}

export default function SignUpPrevTerms({close}: Props) {
  return (
    <View style={styles.modal}>
      <Button title="닫기" onPress={close} />
      <Text>Awesome 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
  },
});
