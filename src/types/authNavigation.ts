import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  SignIn: {userId: string};
  LogIn: {email: string};
};

export type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
export type LogInProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;
