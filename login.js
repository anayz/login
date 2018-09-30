import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Button, OnPress, Image, StyleSheet } from 'react-native';

export default class login extends Component {
  render() {
    return (
      <View>
<Image
style={{width:350, height:80, alignItems:'center', marginLeft:6, marginTop:150}}
source={require("./fb.png")}
/>

<TextInput
style={{height:50}}
placeholder='Username'
onChangeText={(twxt) =>this.setState({text})}
/>

<TextInput
style={{height:50}}
placeholder='Password'
onChangeText={(twxt) =>this.setState({text})}
/>

<Button
style ={{margin:20, flexDirection:'row', justifyContent:'space-between'}}
    title="LOGIN"
    color="blue"
    />
    </View>
    );
  }

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#ffffff',
  },
  instructions:{
    fontSize: 15,
    textAlign:'center',
    color:'blue',
    marginBottom: 100,
    fontWeight:'bold'
  
  },
});

