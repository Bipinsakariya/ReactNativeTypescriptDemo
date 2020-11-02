import React from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import BackButton from '../../components/BackButton';
import LogoBox from '../../components/LogoBox';
import Color from '../../utils/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PrimaryButton from '../../components/PrimaryButton';

interface Props {
  navigation: {
    goBack: () => void;
  };
}

const SignUpScreen = (props: Props) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <View style={{height: hp(1)}}></View>
        <BackButton
          color={Color.accent}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <View style={{height: hp(12)}}></View>
        <LogoBox />
        <View style={{height: hp(12)}}></View>
        <TextInput
          style={globalStyles.input}
          placeholder="First Name"
          placeholderTextColor={Color.placeholderTextDark}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Last Name"
          placeholderTextColor={Color.placeholderTextDark}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Username"
          placeholderTextColor={Color.placeholderTextDark}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Location"
          placeholderTextColor={Color.placeholderTextDark}
        />
      </View>

      <View style={{position: 'absolute', bottom: hp(10), width: '100%'}}>
        <PrimaryButton title="CREATE ACCOUNT" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
