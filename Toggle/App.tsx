import React,{Component, useState, useEffect} from 'react';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList} from 'react-native';
const App = () =>{
  const [show,setShow] = useState(true);
  return(
    <View>
      <Text style={{fontSize:30, color: "red"}}>Show/Hide Components</Text>
      <Button title="Toggle Component" onPress={()=>setShow(!show)}></Button>
      {
        show ? <User/> : null
      }
    </View>
  )
}
const User = () =>{
  return(
    <View>
      <Text style={styles.item}>User Component</Text>
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