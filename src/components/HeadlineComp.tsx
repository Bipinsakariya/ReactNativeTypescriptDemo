import React from 'react';
import {View, Text} from 'react-native';
import globalStyles from '../styles/globalStyles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HeadlineComp = () => {
  return (
    <View>
      <Text style={[globalStyles.headerText, {marginHorizontal: hp(4)}]}>
        My App
      </Text>
      <Text
        style={[
          globalStyles.subHeaderText,
          {marginHorizontal: hp(5), width: '100%'},
        ]}>
        My App : share story, write history!
      </Text>
    </View>
  );
};

export default HeadlineComp;
