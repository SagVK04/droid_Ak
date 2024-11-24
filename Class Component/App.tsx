import React,{Component, useState} from 'react';
import Student1 from './components/Student';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList} from 'react-native';
class App extends Component{
  fruit=()=>{
    console.warn("This is an Apple!")
  }
  render(){
      return(
        <View>
          <Text style={{fontSize: 30, color:"red"}}>Class Component</Text>
          <TextInput placeholder='Enter name'></TextInput>
          <Button title='Press Here' onPress={this.fruit}></Button>
          <Student1/>
        </View>
      )
  }
}
const styles = StyleSheet.create({
  item:{
    fontSize: 25,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    padding: 5,
    borderColor: 'black',
    borderRadius: 10,
    width: 120, height: 120,
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  item1:{
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    padding: 5,
    borderColor: 'black',
    borderRadius: 10,
    width: 120, height: 120,
    textAlignVertical: 'center',
    textAlign: 'center'
  }
})
export default App;