import React, {Component} from 'react';
import {Platform, Dimensions} from 'react-native';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';

import Login from './app/components/Login';
import Details from './app/components/Details';
import Signup from './app/components/Signup';
import vlog from './app/components/vlog';
import task from './app/components/task';

const WIDTH = Dimensions.get('window').width;
const DrawConfig = {
	drawerWidth: WIDTH*0.83,
}

const DrawerNavigator = createDrawerNavigator({
	Home: Login,
	Details: Details,
	Signup: Signup,
	Vlog: vlog,
	Task: task,
},
DrawConfig
);


export default createAppContainer (DrawerNavigator);