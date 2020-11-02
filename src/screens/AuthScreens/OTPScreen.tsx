import React from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import Color from '../../utils/colors';
import AuthScreenContent from '../../components/AuthScreenContent';
import PrimaryButton from '../../components/PrimaryButton';
import Screens from '../../utils/screenNames';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OtpInputs from '../../components/OtpInputs';
import BackButton from '../../components/BackButton';

interface Props {
  navigation: {
    navigate: (screenName: string) => void;
    goBack: () => void;
  };
  route: {
    params: {
      mobileNumber: string;
    };
  };
}

const OTPScreen = (props: Props) => {
  const {navigate, goBack} = props.navigation;
  const {params} = props.route;
  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: Color.screenBackground},
      ]}>
      <BackButton
        color={Color.white}
        onPress={() => {
          goBack();
        }}
      />
      <View style={globalStyles.authScreenContent}>
        <AuthScreenContent>
          <Text style={[globalStyles.subTitleText, {color: Color.primary}]}>
            A code has been sent to {`\n${params.mobileNumber}`}
          </Text>
          <View style={{height: hp(3)}}></View>
          <Text style={[globalStyles.subTitleText, {color: Color.primary}]}>
            Enter 4 number code
          </Text>
          <OtpInputs>
            <TextInput style={globalStyles.otpInput} maxLength={1} />
            <TextInput style={globalStyles.otpInput} maxLength={1} />
            <TextInput style={globalStyles.otpInput} maxLength={1} />
            <TextInput style={globalStyles.otpInput} maxLength={1} />
          </OtpInputs>
          <Text style={globalStyles.subTitleText}>Resend code in 0:30</Text>
          <View style={{height: hp(1)}}></View>
          <PrimaryButton
            title="CONTINUE"
            onPress={() => navigate(Screens.WELCOME_SCREEN)}
          />
        </AuthScreenContent>
      </View>
    </SafeAreaView>
  );
};

export default OTPScreen;
