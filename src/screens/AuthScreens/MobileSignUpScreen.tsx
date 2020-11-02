import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import Screens from '../../utils/screenNames';
import globalStyles from '../../styles/globalStyles';

import Color from '../../utils/colors';
import AuthScreenContent from '../../components/AuthScreenContent';
import HeadlineComp from '../../components/HeadlineComp';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Props {
  navigation: {
    navigate: (screenName: string, payload: object) => void;
  };
}

const MobileSignUpScreen = (props: Props) => {
  const {navigate} = props.navigation;
  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: Color.screenBackground},
      ]}>
      <View style={globalStyles.authScreenContent}>
        <AuthScreenContent>
          <HeadlineComp />
          <View style={{height: hp(8)}}></View>
          <TextInput
            style={globalStyles.inputDark}
            keyboardType="phone-pad"
            placeholder="Phone Number"
            maxLength={10}
            placeholderTextColor={Color.placeholderTextPrimary}
          />
          <PrimaryButton
            title="START"
            onPress={() =>
              navigate(Screens.OTP_SCREEN, {mobileNumber: '(603)555-0123'})
            }
          />
        </AuthScreenContent>
      </View>
    </SafeAreaView>
  );
};

export default MobileSignUpScreen;
