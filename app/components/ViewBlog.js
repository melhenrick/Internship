
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, AsyncStorage} from 'react-native';


type Props = {};
export default class ViewBlog extends Component<Props> {

  constructor (props){
  super(props);
  
}

  render() {
    return (
      <View style={styles.container}>
      <Text style = {styles.welcome}>
          Blog
      </Text>
        
        <TouchableOpacity style = {styles.btn} 
         onPress = {()=> this.props.navigation.navigate('DisplayBlog')}>
        <Text style = {styles.btntxt}> View Blog
        </Text>
        
        </TouchableOpacity>
      	<TouchableOpacity style = {styles.btn} 
  	    onPress = {()=> this.props.navigation.navigate('blog')}>
  	    <Text style = {styles.btntxt}> Add Blog </Text>
  	    </TouchableOpacity>
        
        <TouchableOpacity style = {styles.logout} 
        onPress = {()=> this.props.navigation.navigate('Details')}>
        <Text style = {styles.btntxt}> Back </Text>
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
  inputs: {
    width: 300,
    backgroundColor: "#fff",
    padding: 30,
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
  logout:{
    position: 'absolute',
    top: 40,
    left: 20,
  },
});
