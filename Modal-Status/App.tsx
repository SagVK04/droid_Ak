import React,{Component, useState, useEffect} from 'react';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList, Modal, Pressable, StatusBar} from 'react-native';
const App = () =>{
  const [showmodal,setShowmodal] = useState(false);
  const [showopen,setShowopen] = useState(true);
  const [statusBar,showStatusBar] = useState(false);
  const openButton = (()=>{
    setShowmodal(true); setShowopen(false);
  })
  const closeButton = (()=>{
    setShowmodal(false); setShowopen(true);
  })
  const setStatusbar = (()=>{
    showStatusBar(false);
  })
  const remStatusBar = (()=>{
    showStatusBar(true);
  })
  return(
    <View style={styles.main}>
      {
        <StatusBar backgroundColor="black" barStyle="light-content" hidden={statusBar}></StatusBar>
      }
      <Modal transparent={true} visible={showmodal} animationType='slide'>
        <View style={styles.centeredview}>
          <View style={styles.modalview}>
            <Text style={[{fontSize:30},{marginBottom:15}]}>Hello World!</Text>
            <Button title='Close' onPress={closeButton}></Button>
          </View>
        </View>
      </Modal>
      
      <View style={styles.text}>
        <Pressable style={styles.press} 
          //onPress={()=>console.warn("Normal on press")}
          //onLongPress={()=>console.warn("This is long press")} [Delay 0.5 second by default]
          onPressIn={()=>console.log("Onpress In")}
          onPressOut={()=>console.log("Onpress Out")}
          onLongPress={()=>console.warn("This is long press")}
          delayLongPress={3000} //for delaying long press
        >
          <Text style={[{fontSize:25},{color:'red'}]}>Pressable</Text>
        </Pressable>
        <View style={styles.inner}>
          <View style={styles.inner1}>
            <Text style={{fontSize:30}}>Dialog Box</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonview}>
        { showopen ? <Button title='Open modal' onPress={openButton}></Button> : null }
      </View>
      <View style={styles.buttonview1}>
        {
          !statusBar ? 
          <Button title='Hide StatusBar' onPress={remStatusBar}></Button> 
          : 
          <Button title='Show StatusBar' onPress={setStatusbar}></Button>
        }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
      flex: 1, backgroundColor: 'skyblue',
      justifyContent:'center', alignItems:'center',
  },
  buttonview:{
    flex:1, justifyContent:'flex-end'
  },
  buttonview1:{
    flex:0.3, justifyContent:'flex-end',shadowColor:"black",elevation:5
  },
  text:{
    flex:5, justifyContent:'center'
  },
  textModified:{
    flex:2.5, justifyContent:'center'
  },
  inner:{
     borderColor:'red', borderWidth:4, padding:3,borderRadius:6
  },
  inner1:{
    borderColor:'red', borderWidth:4, padding:17,borderRadius:6
 },
  centeredview:{
    flex:1,justifyContent:'center',alignItems:'center'
  },
  modalview:{
    backgroundColor: "#fff", color:"black",padding:28,marginTop:50,
    borderRadius:20,shadowColor:"black",elevation:8,
  },
  press:{
    justifyContent:'center',alignItems:'center',backgroundColor:"#ffa", shadowColor:"black",
    marginBottom:17, borderRadius:4, width:120,marginLeft:"auto",marginRight:"auto",
    elevation:10
  }
}) 
export default App;