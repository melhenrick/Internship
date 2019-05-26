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
import vlog from './app/components/vlog';
import task from './app/components/task';

const AppNavigator = createStackNavigator({
  Home: Login,
  Details: Details,
  Signup: Signup,
  vlog: vlog,
  task: task,
  }
);

export default createAppContainer(AppNavigator);