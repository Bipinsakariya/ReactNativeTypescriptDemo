import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Color from '../utils/colors';
import style from '../styles/globalStyles';

interface Props {
  color?: string;
  onPress: () => void;
}

const BackButton = (props: Props) => {
  return (
    <TouchableOpacity style={style.backButtonContainer} onPress={props.onPress}>
      <Icon name="chevron-back" size={30} color={props.color} />
    </TouchableOpacity>
  );
};

export default BackButton;
