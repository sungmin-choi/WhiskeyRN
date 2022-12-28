import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {forwardRef, useMemo} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import SvgIcon from '~/components/SvgIcon';
import Fonts from '~/../styles/fonts';

interface Props {
  closeDrawer: () => void;
}
const TermsDrawer = forwardRef<BottomSheet, Props>(({closeDrawer}, ref) => {
  const snapPoints = useMemo(() => ['1%', '40%'], []);
  return (
    <BottomSheet
      ref={ref}
      index={0}
      handleStyle={styles.handle}
      enablePanDownToClose
      snapPoints={snapPoints}
      backdropComponent={props => (
        <BottomSheetBackdrop pressBehavior={'none'} opacity={0.7} {...props} />
      )}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.headerText}>약관동의</Text>
          <Pressable onPress={closeDrawer}>
            <SvgIcon name="close_line_r" />
          </Pressable>
        </View>
        <View style={styles.container}>
          <View>
            <Text>아래 약관 모두 동의</Text>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  handle: {
    display: 'none',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 24,
    paddingBottom: 12,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    ...Fonts.LEFT_18_B_GRAY_100,
  },
  container: {
    paddingHorizontal: 16,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
  },
});

export default TermsDrawer;
