import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../utils/screenNames';
import SignUpScreen from './AuthScreens/SignUpScreen';
import MobileSignUpScreen from './AuthScreens/MobileSignUpScreen';
import OTPScreen from './AuthScreens/OTPScreen';
import WelcomeScreen from './AuthScreens/WelcomeScreen';

const Auth = createStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator headerMode="none">
      <Auth.Screen
        name={Screens.MOBILE_SIGN_UP_SCREEN}
        component={MobileSignUpScreen}
      />
      <Auth.Screen name={Screens.OTP_SCREEN} component={OTPScreen} />
      <Auth.Screen name={Screens.WELCOME_SCREEN} component={WelcomeScreen} />
      <Auth.Screen name={Screens.SIGN_UP_SCREEN} component={SignUpScreen} />
    </Auth.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
