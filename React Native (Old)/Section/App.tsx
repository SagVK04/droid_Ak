import React,{useState} from 'react';
import CollegeData from './components/CollegeData';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList} from 'react-native';
import getStyle  from "./style";
const App = () =>{
  const users = [
    {
      name: "Akash",
      id: 8, data: ["Java","Python","React-Native"]
    },
    {
      name: "Bikash",
      id: 18, data: ["Java","JS"]
    },
    {
      name: "Avinash",
      id: 28, data: ["C","C++"]
    },
    {
      name: "Suprakash",
      id: 38, data: ["Kotlin","React JS"]
    }
  ]
  return (
    <View>
      <Text style= {{fontSize:20}}>Sections in react native</Text>
      <SectionList
        sections={users}
        renderItem={({item})=><Text style={{fontSize:25}}>{item}</Text>}
        renderSectionHeader={({section:{name}})=><Text style={{fontSize: 25, color: "red"}}>{name}</Text>}
      />
    </View>
  );
};
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