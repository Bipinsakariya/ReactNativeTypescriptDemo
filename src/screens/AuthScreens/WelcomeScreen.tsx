import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import BackButton from '../../components/BackButton';
import globalStyles from '../../styles/globalStyles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Color from '../../utils/colors';
import Card from '../../components/Card';
import UserTypeSelection from '../../components/UserTypeSelection';
import AuthScreenContent from '../../components/AuthScreenContent';
import PrimaryButton from '../../components/PrimaryButton';
import Screens from '../../utils/screenNames';

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

const WelcomeScreen = (props: Props) => {
  const {navigate, goBack} = props.navigation;
  return (
    <SafeAreaView style={globalStyles.container}>
      <BackButton onPress={goBack} />
      <View style={{height: hp(10)}}></View>
      <Text style={globalStyles.titleText}>Welcome</Text>
      <Text style={[globalStyles.subTitleText, {color: Color.accent}]}>
        What you looking about?
      </Text>

      <View style={{height: hp(4)}}></View>
      <Card>
        <UserTypeSelection
          title="Historical Country Place"
          subtitle="Historical countries, sites and figures"
        />
      </Card>
      <View style={{height: hp(1.2)}}></View>
      <Card>
        <UserTypeSelection
          title="Historical City Place"
          subtitle="Historical cities, sites and figures"
        />
      </Card>

      <AuthScreenContent style={globalStyles.authScreenContent}>
        <PrimaryButton
          title="CONTINUE"
          onPress={() => {
            navigate(Screens.SIGN_UP_SCREEN);
          }}
        />
      </AuthScreenContent>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
