
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, AsyncStorage} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import axios from 'axios';

type Props = {};
export default class task extends Component<Props> {
state = {
      name: "",
      description: "",
    }
  constructor (props){
  super(props);
  state = {
      name: "",
      description: "",
    }
}
save = async() => {
  const userToken = await AsyncStorage.getItem('userToken');  
  // Alert.alert("success", ""+userToken);
   

  const {name, description}=this.state
  if(name != null && description != null){
  axios({
        method: 'post',
        url: 'https://apizxc.herokuapp.com/tasks',
        headers: {
                    'Authorization': userToken
                },
        data: {
          name: this.state.name,
          description: this.state.description,
    }
    })
        .then(res => { 
          Alert.alert("Successfull", "You added new Task");
          this.props.navigation.navigate('ViewTask')
        })
        .catch(err => {
          console.log(err);
          Alert.alert("Error",err+"\nFields must not be null");
        });
     
}
else{
  Alert.alert('Error','Fields must not be null');

}
}
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.welcome}>
          Task
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
                 onPress={this.save}>
                <Text style = {styles.btntxt}> Save </Text>
              </TouchableOpacity>
           <TouchableOpacity style = {styles.logout} 
                  onPress = {()=> this.props.navigation.navigate('ViewTask')}>
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
