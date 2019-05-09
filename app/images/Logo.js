import React, {Component} from 'react';
import {StyleSheet, Image, Text} from 'react-navigation'
import { createStackNavigator, createAppContainer} from 'react-navigation'


type Props = {};
export default class Logo extends Component<Props> {
  render() {
    return (
      
        <View style = {styles.container}>
          <Image style = {styles.logo} source = {require('./app/images/pic.jpg')}/>
            <Text style = { styles.logotxt}> Login to Myapp. </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  logotxt: {
    marginVertical: 15,
    fontSize: 20 ,
    textAlign: 'center',
    color: "#fff",
    fontFamily: "serif"
  },
   logo: {
    width: 40,
    height: 70
  },
  

});