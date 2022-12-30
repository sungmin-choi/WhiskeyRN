import Colors from './colors';

const Fonts = {
  CENTER_16_B_WHITE: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'center',
    color: Colors.WHITE,
  },
  LEFT_18_B_GRAY_100: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'left',
    color: Colors.GRAY_100,
  },
  LABEL: {
    textAlign: 'left',
    color: Colors.GRAY_100,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'Pretendard',
    marginBottom: 6,
  },
} as const;

export default Fonts;
