import React,{Component, useState, useEffect} from 'react';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList, ActivityIndicator} from 'react-native';
const App = () =>{
  const [load,setload] = useState(false)
  const display=()=>{
    setload(true);
    //API Fetching completed
    setTimeout(()=>{
      setload(false);
    },3000)
  }
  return(
    <View style={styles.main}>
      {
        load ? <ActivityIndicator size={40}></ActivityIndicator> : null
      }
      <Text style={{fontSize:30}}>Loader</Text>
      <Button title='Show' onPress={display}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
      flex: 1, backgroundColor: 'skyblue',justifyContent:'center', alignItems:'center',
  },
}) 
export default App;