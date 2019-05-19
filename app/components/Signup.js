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
import axios from 'axios';


type Props = {};
export default class Login extends Component<Props> {
constructor (props){
  super(props);
  state = {
      fullname: "",
      email:    "",
      username: "",
      password: "",
      confirmpass: "",
    }
}
checkRegister(){
    const { password, confirmpass, fullname, email, username } = this.state
     if(password == confirmpass)
     {
      let collection= {}
      collection.fullname=this.state.fullname,
      collection.username=this.state.username,
      collection.email=this.state.emaill,
      collection.password=this.state.password,

      console.warn(collection);

   // .then(function (response){ 
   //  console.warn(response);
   //  })
    
     // this.props.navigation.navigate('Home')
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
                placeholder="Fullname" 
                onChangeText={text => this.setState({fullname: text})}
              
          /> 
          <TextInput 
          style = {styles.input}
                placeholder="Email" 
                onChangeText={text => this.setState({email: text})}
                
          /> 
          <TextInput 
          style = {styles.input}
                placeholder="Username"
                onChangeText={text => this.setState({username: text})} 
          /> 
          <TextInput 
          style = {styles.input}
                placeholder="Password" 
                secureTextEntry = {true}
                onChangeText={text => this.setState({password: text})}
          />
          <TextInput 
          style = {styles.input}
                placeholder="Confirm Password"
                secureTextEntry = {true}
                onChangeText={text => this.setState({confirmpass: text})}
          /> 
         
          <TouchableOpacity style = {styles.btn} 
                onPress = {()=> this.checkRegister()}
              >
                <Text style = {styles.btntxt}> Sign Up </Text>
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
});
