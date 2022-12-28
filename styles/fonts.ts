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
} as const;

export default Fonts;
