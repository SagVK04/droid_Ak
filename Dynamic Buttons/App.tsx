import React,{Component, useState, useEffect} from 'react';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList, TouchableHighlight, TouchableOpacity} from 'react-native';
const App = () =>{
  const [selectedradio,setselectedradio]= useState(1)
  const skills = [
    {name: "JAVA", id: 1},
    {name: "PHP", id: 2},
    {name: "Node", id: 3},
    {name: "SQL", id: 4},
    {name: "Python", id: 5},
  ]
  return(
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.button1}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button3}>Primary Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button2}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button3,styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button3,styles.warning,styles.error]}>Error!</Text>
      </TouchableHighlight>
      {
        skills.map((item,index)=>
        <TouchableOpacity key={index} style={styles.radio1} onPress={()=>setselectedradio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
            {
              selectedradio == item.id ?  <View style={styles.radiobg}></View>:null
            }
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        )
      }
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
      flex: 1, backgroundColor: 'skyblue',justifyContent:'center',
  },
  button1:{
    backgroundColor:'red',
    fontSize:30,
    color:'white',
    textAlign:'center',
    padding:10,
    marginLeft:30,
    marginRight:30,
    marginBottom:10,
    borderRadius:10,
    shadowColor:'black',
    elevation:15,
    shadowOpacity:5.5
  },
  button2:{
    backgroundColor:'green',
    fontSize:30,
    color:'white',
    textAlign:'center',
    padding:10,
    marginLeft:30,
    marginRight:30,
    marginBottom:10,
    borderRadius:10,
    shadowColor:'black',
    elevation:15,
    shadowOpacity:5.5
  },
  button3:{
    backgroundColor:'#fff',
    fontSize:30,
    color:'black',
    textAlign:'center',
    padding:10,
    marginLeft:30,
    marginRight:30,
    marginBottom:10,
    borderRadius:10,
    shadowColor:'black',
    elevation:15,
    shadowOpacity:5.5
  },
  warning:{
    color:'red', backgroundColor:'gold'
  },
  error:{
    backgroundColor:'grey'
  },
  radio1:{
    alignItems:'center', justifyContent:'center',marginTop:20,
  },
  radioText:{
    fontSize:25,color:'blue'
  },
  radio:{
    height:30, width:30, borderColor:'black', borderWidth:2,borderRadius:15,margin:10
  },
  radioWrapper:{
    flexDirection:'row', alignItems:'center', margin:'auto',alignContent:'center'
  },
  radiobg:{
    backgroundColor: 'black', height: 18, width: 18, borderRadius: 15, margin: 3.8
  }
}) 
export default App;