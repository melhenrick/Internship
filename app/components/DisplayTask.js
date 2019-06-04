
import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        TextInput, 
        TouchableOpacity, 
        Dimensions,
        Alert,
        AsyncStorage,
        FlatList} from 'react-native';
import axios from 'axios';
type Props = {};
export default class DisplayTask extends Component<Props> {
  state = {
    data: []
  };
constructor(props) {
    super(props);
    this._bootstrapAsync();
    this.state = {
      task: []
    }
  }

  renderItem = ({item}) =>{
      return(
          <View style={styles.container}>
             <Text>
                  Id: 
                  {item.id}
    
              </Text>
              <Text>
                  Name: 
                  {item.name}
    
              </Text>
              <Text>
                  Description: 
                  {item.description}
              </Text>
          </View>
        )
  }
_bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');  
   // Alert.alert("success", ""+userToken);
    axios({
        method: 'get',
        url: 'https://apizxc.herokuapp.com/tasks',
        headers: {
                    'Authorization': userToken
                }
    }) 
    .then(res => { 
          console.log(res);
          console.log(res.data)
          this.setState({
            task: res.data
          })
        })
        .catch(err => {
          console.log(err);
          Alert.alert("Error",err+"\nFields must not be null");
        });

  };

  render() {
    return (
      <View style={styles.container}>

        <Text style = {styles.welcome}>
          Task List     
        </Text>
        <FlatList
        data={this.state.task}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index} 
          />
         <TouchableOpacity style = {styles.back} 
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
  }
});