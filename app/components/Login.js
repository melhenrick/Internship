/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, AsyncStorage} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'
import axios from 'axios';

export default class Login extends Component {
  state = {
          username: "",
          password: ""
       }
constructor (props){
  super(props);
  state = {
      username: "",
      password: "",
    }
}


  checkLogin = async () => {
    const { password ,username} = this.state
    if(username != null && password != null){

     axios({
        method: 'post',
        url: 'https://apizxc.herokuapp.com/auth/login',
        data: {
          username: this.state.username,
          password: this.state.password,
        }
        })
        .then(res => { 
          console.log(res);
          console.log('token',res.data.token)
          AsyncStorage.setItem('userToken', ''+res.data.token)
          this.props.navigation.navigate('Details',{
            username: this.state.username,
          })
        })
        .catch(err => {
          console.log(err);
          Alert.alert("Error", err+ "\nUnauthorize" );
        });
         
   }
   else{
    Alert.alert('Error','Please fill all')
   }
 }

  render() {
    return (
      <View style={styles.container}>
          <Text style = {styles.welcome}>
            Myapp
          </Text>
          <TextInput 
          style = {styles.input}
                placeholder="Username" 
                onChangeText={text => this.setState({username: text})}
          /> 
          <TextInput 
          style = {styles.input}
                placeholder="Password" 
                secureTextEntry= {true}
                onChangeText={text => this.setState({password: text})}
          /> 
              <TouchableOpacity style = {styles.btn} 
                  onPress = {()=> this.checkLogin()}
              >
                <Text style = {styles.btntxt}> Login </Text>
              </TouchableOpacity>

                <Text style = {styles.signuptext}>Do not have an account yet?
                </Text>
                  <TouchableOpacity style = {styles.signupbtn} 
                  onPress = {()=> this.props.navigation.navigate('Signup')}>
                  <Text style = {styles.signupbtn}> Signup </Text>
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
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
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
   signuptext:{
    fontSize: 20,
    flexDirection: 'row',
  },
  signupbtn:{
    color: "#ffffff",
    fontSize: 20,
    fontWeight: '500'
  },
});