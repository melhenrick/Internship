
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import axios from 'axios';

type Props = {};
export default class Details extends Component<Props> {

  constructor (props){
  super(props);
  state = {
      name: "",
      description: "",
    }
}
save(){

  const {name, description}=this.state
  if(name != null || description != null){
      let collection= {}
          collection.name=this.state.name,
          collection.description=this.state.description,
          console.warn(collection);

  axios({
        method: 'post',
        url: 'https://rails-jwt.herokuapp.com/users',
        data: {
          name: this.state.name,
          description: this.state.description,
    }
  }
);
    this.props.navigation.navigate('Details') 
}
else{
  Alert.alert('Error','Fields must not be null');

}
}
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.welcome}>
          hello we are on task
        </Text>
        <TextInput 
          style = {styles.input}
                placeholder="Task Name" 
                onChangeText={text => this.setState({name: text})}
          /> 
          <TextInput 
          style = {styles.inputs}
                placeholder="Description" 
                onChangeText={text => this.setState({description: text})}
          /> 
          <TouchableOpacity style = {styles.btn} 
                  onPress = {()=> this.save()}
              >
                <Text style = {styles.btntxt}> Save </Text>
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
});
