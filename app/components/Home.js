
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, AsyncStorage } from 'react-native';
type Props = {};
export default class Home extends Component<Props> {

 constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

   _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');  
   this.props.navigation.navigate(userToken ? 'Details': 'Home');
  };  

  render() {
    return (
      <View style={styles.container}>
      	<Text style = {styles.welcome}>
          Myapp
        </Text>

        <TouchableOpacity style = {styles.btn} 
	     onPress = {()=> this.props.navigation.navigate('Login')}>
	     <Text style = {styles.btntxt}> Sign in
	     </Text>
	     </TouchableOpacity>
    	<TouchableOpacity style = {styles.btn} 
	     onPress = {()=> this.props.navigation.navigate('Signup')}>
	     <Text style = {styles.btntxt}> Sign up
       </Text>
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
