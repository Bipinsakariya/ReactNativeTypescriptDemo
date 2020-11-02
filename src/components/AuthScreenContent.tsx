import React from 'react';
import {View, Text} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AuthScreenContent = (props: any) => {
  return (
    <View style={globalStyles.authScreenContent}>
      <View style={{height: hp(8)}}></View>
      {props.children}
    </View>
  );
};

export default AuthScreenContent;
