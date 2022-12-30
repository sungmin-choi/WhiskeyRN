import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  SignUp: {email: string};
  SignIn: {userId: string};
  LogIn: {email: string};
  OnBoarding: {email: string; password: string};
};

export type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
export type LogInProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;
export type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type OnBoardingProps = NativeStackScreenProps<
  RootStackParamList,
  'OnBoarding'
>;
