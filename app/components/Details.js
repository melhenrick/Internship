
import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        TextInput, 
        TouchableOpacity, 
        Dimensions} from 'react-native';

type Props = {};
export default class Details extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.welcome}>
          Hello User!!
        </Text>
                  <TouchableOpacity style = {styles.btn} 
                  onPress = {()=> this.props.navigation.navigate('ViewTask')}>
                  <Text style = {styles.btntxt}> Task </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles.btn} 
                  onPress = {()=> this.props.navigation.navigate('ViewBlog')}>
                  <Text style = {styles.btntxt}> Blog </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles.logout} 
                  onPress = {()=> this.props.navigation.navigate('Home')}>
                  <Text style = {styles.btntxt}> Logout </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles.viewacc} 
                  onPress = {()=> this.props.navigation.navigate('Acc')}>
                  <Text style = {styles.btntxt}> View Account </Text>
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
  logout:{
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