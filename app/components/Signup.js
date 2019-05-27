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
      name: "",
      lastname: "",
      username: "",
      email:    "",
      password: "",
      confirmpass: "",
    }
}
checkRegister(){
    const { password, confirmpass, name, lastname, email, username } = this.state
     if(password == confirmpass)
        {
          if(username != null && name != null && email != null && password != null)
        {
         
      axios.post('http://rails-jwt.herokuapp.com/users', {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password,
          })
          .then(res => { 
            console.log(res);
            this.props.navigation.navigate('Home')
          })
          .catch(err => {
            console.log(err);
            Alert.alert("Error","Password must be minimum of 6 characters \nEmail is invalid\nUsername taken\n Check your connection ");
        });
         
      }
          else  
          {
          Alert.alert('Error', 'Please fill all the information', [{
        text: 'Okay'
          }])
          }
        }
    else  {
      Alert.alert('Error', 'Password is not match', [{
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
                placeholder="Name" 
                onChangeText={text => this.setState({name: text})}
              
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
          <Text style = {styles.signuptext}>Already have an account?
                </Text>
                  <TouchableOpacity style = {styles.signupbtn} 
                  onPress = {()=> this.props.navigation.navigate('Home')}>
                  <Text style = {styles.signupbtn}> Sign In </Text>
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
