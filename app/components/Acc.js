
import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        TextInput, 
        TouchableOpacity, 
        Dimensions,
        Alert} from 'react-native';

type Props = {};
export default class Acc extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'user');
    //Alert.alert("Hello, Welcome",""+username );
    return (
      <View style={styles.container}>
        <Text style = {styles.welcome}>
          Hello Welcome 
        </Text>
        <Text style = {styles.welcome}>
           {JSON.stringify(username)}
        </Text>
         <TouchableOpacity style = {styles.back} 
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
  back:{
    position: 'absolute',
    top: 40,
    right: 20,
  },
  viewacc:{
    position: 'absolute',
    top: 40,
    left: 20,
  }
});