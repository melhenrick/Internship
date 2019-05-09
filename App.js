/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './app/components/Login';
import Details from './app/components/Details';
import Signup from './app/components/Signup';
// import Logo from './app/images/';
const AppNavigator = createStackNavigator({
  Home: Login,
  Details: Details,
  Signup: Signup,
  // Logo: Logo
});

export default createAppContainer(AppNavigator);