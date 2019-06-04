
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
export default class DisplayBlog extends Component<Props> {
constructor(props) {
    super(props);
    this._bootstrapAsync();
    this.state = {
      task: []
    }
  }
 renderItem = ({item}) =>{
      return(
          <View>
          	<Text>
              	Id:
                  {item.id}
    
              </Text>
              <Text>
              	Title:
                  {item.title}
    
              </Text>
              <Text>
                Content:
                  {item.content}
              </Text>
              <Text>
                Description:
                  {item.short_description}
              </Text>
          </View>
        )
  }

_bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');  
   //Alert.alert("success", ""+userToken);
    axios({
        method: 'get',
        url: 'https://apizxc.herokuapp.com/blogs',
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
          Blog List 
        </Text>
        <FlatList
        data={this.state.task}
        renderItem={this.renderItem}
          />
         <TouchableOpacity style = {styles.back} 
                  onPress = {()=> this.props.navigation.navigate('ViewBlog')}>
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