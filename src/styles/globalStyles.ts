import {StyleSheet} from 'react-native';
import Color from '../utils/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Color.backgroundColor,
  },
  backButtonContainer: {
    padding: 8,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderColor: Color.border,
    borderWidth: 1,
    borderRadius: 16,
    alignSelf: 'center',
  },
  otpInputContainer: {
    width: '80%',
    maxWidth: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  input: {
    width: '80%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Color.border,
    padding: 20,
    fontSize: 17,
    alignSelf: 'center',
    backgroundColor: Color.white,
    marginTop: 14,
  },
  otpInput: {
    width: 68,
    height: 68,
    borderRadius: 16,
    padding: 20,
    fontSize: 17,
    alignSelf: 'center',
    color: Color.primary,
    backgroundColor: Color.inputBGDark,
    marginTop: 14,
    textAlign: 'center',
  },
  inputDark: {
    width: '80%',
    borderRadius: 16,
    borderColor: Color.border,
    padding: 20,
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 14,
    backgroundColor: Color.inputBGDark,
    borderWidth: 0,
    textAlign: 'center',
    color: Color.primary,
    fontWeight: 'bold',
  },
  btnPrimary: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 16,
    marginVertical: 12,
    backgroundColor: Color.primary,
  },
  btnPrimaryText: {
    color: Color.white,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    padding: 18,
  },
  titleText: {
    fontSize: 25,
    margin: 6,
    textAlign: 'center',
    color: Color.accent,
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: 17,
    margin: 6,
    textAlign: 'center',
    color: Color.white,
  },
  headerText: {
    fontSize: 48,
    fontStyle: 'italic',
    fontWeight: '100',
    color: Color.primary,
  },
  subHeaderText: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: '600',
    color: Color.primary,
  },
  authScreenContent: {
    position: 'absolute',
    bottom: hp(4),
    width: '100%',
  },
  card: {
    width: '80%',
    padding: 16,
    borderRadius: 16,
    backgroundColor: Color.cardBGColor,
    alignSelf: 'center',
  },
});

export default globalStyles;
