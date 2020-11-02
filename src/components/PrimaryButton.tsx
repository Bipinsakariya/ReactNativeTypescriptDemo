import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import globalStyles from '../styles/globalStyles';

interface Props {
  style?: ViewStyle;
  title: string;
  onPress: () => void;
}

const PrimaryButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={{...globalStyles.btnPrimary, ...props.style}}
      activeOpacity={0.6}
      onPress={props.onPress}>
      <Text style={globalStyles.btnPrimaryText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
