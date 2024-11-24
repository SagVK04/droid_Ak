import React,{Component, useState, useEffect} from 'react';
import Student1 from './components/Student';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList} from 'react-native';
const App = () =>{
  const [count,setCount] = useState(0);
  const [data,setData] = useState(100);
  useEffect(()=>{
    //console.warn("Do new animation..");
  },[count])
  useEffect(()=>{
    //console.warn("Call some API now!");
  },[data])
  return(
    <View>
      <Text style={{fontSize:30, color: "red"}}>{data} Use Effect Hook: {count}</Text>
      <Button title="Update Counter" onPress={()=>setCount(count+1)}></Button>
      <Button title="Update Data" onPress={()=>setData(data+1)}></Button>
      <User info = {{data,count}}/>
    </View>
  )
}

const User=(props)=>{
  console.warn(props.info);
  useEffect(()=>{
    console.warn("Run this code when the data gets updated!")
  },[props.info.data])
  useEffect(()=>{
    console.warn("Run this code when the counter gets updated!")
  },[props.info.count])
  return(
    <View>
      <Text style={{fontSize:30, color: "blue"}}>{props.info.count} User Component {props.info.data}</Text>
    </View>
  )
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