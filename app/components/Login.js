/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'


//type Props = {};
//export default class Login extends Component<Props> {
export default class Login extends Component {
constructor (props){
  super(props);
  state = {
      username: "",
      password: "",
    }
}

  checkLogin(){
    const { username, password } = this.state
    if(username == 'admin' && password == 'admin'){
    this.props.navigation.navigate('Details')
    }
    else  {
      Alert.alert('Error', 'Username or Password is in Correct', [{
        text: 'Okay'
      }])
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

                <Text style = {styles.signuptext}>Don't have an account yet?
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