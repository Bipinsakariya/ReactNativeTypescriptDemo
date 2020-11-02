import React from 'react';
import {View, Text} from 'react-native';
import globalStyles from '../styles/globalStyles';
import Color from '../utils/colors';

interface Props {
  title: string;
  subtitle: string;
}

const UserTypeSelection = (props: Props) => {
  return (
    <View>
      <Text
        style={[
          globalStyles.titleText,
          {color: Color.primary, textAlign: 'left'},
        ]}>
        {props.title}
      </Text>
      <Text
        style={[
          globalStyles.subTitleText,
          {color: Color.primary, textAlign: 'left'},
        ]}>
        {props.subtitle}
      </Text>
    </View>
  );
};

export default UserTypeSelection;
