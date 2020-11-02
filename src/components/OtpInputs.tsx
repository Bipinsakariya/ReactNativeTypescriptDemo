import React from 'react';
import {View, Text} from 'react-native';
import globalStyles from '../styles/globalStyles';

const OtpInputs = (props: any) => {
  return <View style={globalStyles.otpInputContainer}>{props.children}</View>;
};

export default OtpInputs;
