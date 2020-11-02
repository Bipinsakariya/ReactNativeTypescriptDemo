import React from 'react';
import {View, Text} from 'react-native';
import globalStyles from '../styles/globalStyles';

const Card = (props: any) => {
  return <View style={globalStyles.card}>{props.children}</View>;
};

export default Card;
