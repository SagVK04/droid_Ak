import React,{Component, useState, useEffect} from 'react';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList} from 'react-native';
const App = () =>{
  const [show,setShow] = useState(true);
  return(
    <View>
      <Text style={{fontSize:30, color: "red"}}>useEffect for Unmount Component</Text>
      <Button title="Toggle" onPress={()=>setShow(!show)}></Button>
      {
        show ? <Student/>:null
      }
    </View>
  )
}
const Student = () =>{
  let time = setInterval(()=>{
    console.warn("Timer called");
  },2000)
  useEffect(()=>{
    return ()=>clearInterval(time);
  })
  return(
    <View>
      <Text style={{fontSize:30,color:"blue"}}>This is a student</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  item:{
    fontSize: 15,
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