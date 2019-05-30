/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer ,createDrawerNavigator} from "react-navigation";

import Login from './app/components/Login';
import Details from './app/components/Details';
import Signup from './app/components/Signup';
import blog from './app/components/blog';
import task from './app/components/task';
import ViewTask from './app/components/ViewTasks';
import ViewBlog from './app/components/ViewBlog';
import Acc from './app/components/Acc';

const AppNavigator = createStackNavigator({
  // Home: Login,
  Details: Details,
  Signup: Signup,
  blog: blog,
  task: task,
  ViewTask: ViewTask,
  ViewBlog: ViewBlog,
  Acc: Acc

  },
  {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
)


export default createAppContainer(AppNavigator);
