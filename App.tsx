import React,{Component, useState, useEffect} from 'react';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList, Modal, Pressable, StatusBar,
  Platform,Linking} from 'react-native';
import {WebView} from "react-native-webview";
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
  const openWeb = (()=>{
      Linking.openURL("https://www.youtube.com/")
  })
  const openWeb1 = (()=>{
    Linking.openURL("https://www.facebook.com/")
  })
  const openWeb2 = (()=>{
    Linking.openURL("https://www.instagram.com/")
  })
  const openWeb3 = (()=>{
    Linking.openURL("https://play.google.com/store/apps?hl=en_IN&pli=1")
  })
  return(
    <View style={styles.main}>
      {
        <StatusBar backgroundColor="#fff" barStyle="dark-content" hidden={statusBar}></StatusBar>
      }
      <Modal transparent={true} visible={showmodal} animationType='slide'>
        <View style={styles.centeredview}>
          <View style={styles.modalview}>
            <Text style={[{fontSize:30},{marginBottom:15},{color:'black'},{marginLeft:20}]}>Hello!</Text>
            <Button title='Close Modal' onPress={closeButton}></Button>
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
            <Text style={[{fontSize:30},{color:"black"}]}>Dialog Box</Text>
          </View>
        </View>
        <View>
          <Text style={[{fontSize:20},{color:"black"},{marginTop:10}]}>Platform: {Platform.OS}</Text>
          {
            Platform.OS=="ios"?
            <View style={styles.inner1a}>
              <Text style={styles.textPl}>This is {Platform.OS} Platform</Text>
            </View>
            :
            <View style={styles.inner1a}>
              <Text style={styles.textPl}>This is {Platform.OS} Platform</Text>
            </View>
          }
        </View>
        <View style={{marginTop:10}}>
          <Button title='Open Youtube' onPress={openWeb}></Button>
          <View style={{marginTop:15}}>
            <Button title='Open Facebook' onPress={openWeb1}></Button>
          </View>
          <View style={{marginTop:15}}>
            <Button title='Open Instagram' onPress={openWeb2}></Button>
          </View>
          <View style={{marginTop:15}}>
            <Button title='Open Play Store' onPress={openWeb3}></Button>
          </View>
        </View>
      </View>
      <Text style={{fontSize:19,color:"black"}}>
        {JSON.stringify(Platform.constants.reactNativeVersion)}
        {JSON.stringify(Platform.constants.reactNativeVersion.major)},
        {JSON.stringify(Platform.constants.reactNativeVersion.minor)}
      </Text>
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
      flex: 1, backgroundColor: '#fff',
      justifyContent:'center', alignItems:'center',
  },
  buttonview:{
    flex:1, justifyContent:'flex-end', marginBottom:7
  },
  buttonview1:{
    flex:0.3, justifyContent:'flex-end',shadowColor:"black",elevation:5,marginBottom:11
  },
  text:{
    flex:5, justifyContent:'center'
  },
  textModified:{
    flex:2.5, justifyContent:'center'
  },
  textPl:{
    color: Platform.OS=="android"? "black" : "blue",
    fontSize: 18
  },
  inner:{
     borderColor:'red', borderWidth:4, padding:3,borderRadius:6
  },
  inner1:{
    borderColor:'red', borderWidth:4, padding:17,borderRadius:6, paddingLeft:42
  },
  inner1a:{
    borderColor:'maroon', borderWidth:4, padding:17,borderRadius:6, 
    paddingLeft:21,marginTop:10,
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