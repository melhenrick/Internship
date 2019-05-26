
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';

type Props = {};
export default class Details extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.welcome}>
          Hello User!!
        </Text>
                  <TouchableOpacity style = {styles.btn} 
                  onPress = {()=> this.props.navigation.navigate('task')}>
                  <Text style = {styles.btntxt}> Task </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles.btn} 
                  onPress = {()=> this.props.navigation.navigate('vlog')}>
                  <Text style = {styles.btntxt}> Blog </Text>
                  </TouchableOpacity>
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
    textAlign: 'center',
    margin: 10,
    color: "#fff",
    fontFamily: "serif"
  },
  input: {
    width: 300,
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 25
  },
   btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"
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
});
