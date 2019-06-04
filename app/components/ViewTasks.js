
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, AsyncStorage} from 'react-native';
import axios from 'axios';

type Props = {};
export default class ViewTasks extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      	<Text style = {styles.welcome}>
          Task
        </Text>

      <TouchableOpacity style = {styles.btn} 
	     onPress = {()=> this.props.navigation.navigate('DisplayTask')}>
	     <Text style = {styles.btntxt}> View Task 
	     </Text>
	     </TouchableOpacity>
    	
      <TouchableOpacity style = {styles.btn} 
	     onPress = {()=> this.props.navigation.navigate('task')}>
	     <Text style = {styles.btntxt}> Add Task </Text>
	     </TouchableOpacity>
	     
       <TouchableOpacity style = {styles.back} 
        onPress = {()=> this.props.navigation.navigate('Details')}>
        <Text style = {styles.btntxt}> Back </Text>
        </TouchableOpacity>
        <Text style = {styles.welcome}>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
  },
  welcome: {
    fontSize: 30,
    margin: 10,
    color: "#fff",
    fontFamily: "serif"

  },
  btn: {
   backgroundColor: "#01c853",
   padding: 15,
   width: "45%",
   borderRadius: 25,
   marginVertical: 10,
  },
  btntxt:{
    fontSize: 18,
    textAlign: "center"
  },
  back:{
    position: 'absolute',
    top: 40,
    left: 20,
  },
});
