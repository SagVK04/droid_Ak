import React,{Component, useState, useEffect} from 'react';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList, Modal, Pressable, StatusBar,
  Platform,Linking,
  TouchableHighlight} from 'react-native';
import {WebView} from "react-native-webview";
const App = () =>{
  const [showmodal,setShowmodal] = useState(false);
  const [statusBar,showStatusBar] = useState(false);
  const [name,setName] = useState("");
  const openButton = (()=>{
    setShowmodal(true);
  })
  const closeButton = (()=>{
    setShowmodal(false)
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
  const openWeb5 = (()=>{
    Linking.openURL("https://google.com/")
  })
  const [data,setData] = useState([]);
  const openWeb4 = async (text)=>{
    if(text != null){
      setName(text);
      const url=`http://192.168.0.184:3000/users?q=${text}`;
      //console.warn(url);
      let result=await fetch(url);
      let result1=await result.json();
      if(result1)
        setData(result1);
    }
    else{
      setName(" ");
    }
  }
  const openWeb6 = (()=>{
    
  })
  return(
    <View style={styles.main}>
      <View style={styles.text1}> 
        <Text style={styles.main1}>
          Query Box
        </Text>  
      </View>
      <View style={styles.input1}>
        <TextInput style={styles.input2} placeholder='Enter your query' value={name} onChangeText={(text)=>openWeb4(text)}></TextInput>
        <TouchableHighlight style={styles.text1aa} onPress={openWeb4}>
          <Text style={{marginTop:"auto",marginBottom:"auto"}}>Clear</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.text1a} onPress={openWeb5}>
          <Text style={{marginTop:"auto",marginBottom:"auto"}}>Open Google</Text>
        </TouchableHighlight>
        <View style={{flex:1}}>
        {
          data.length ?
            data.map((item)=><View key={item.id} style={{padding:10,flexDirection:"row",justifyContent:"space-between"}}>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
              <Text>{item.id}</Text>
            </View>)
            :
            <View>{
              name.length ?
                <Text>No result found!</Text>
              :
                null
              }
              </View>
        }
        </View>
        <Text></Text>
      </View> 
    </View>
  )
}
const styles = StyleSheet.create({
  main:{
      flex:1,backgroundColor: 'greenblue',
      justifyContent:"center", alignItems:'center',
  },
  main1:{
    justifyContent:"flex-start",alignItems:"center",fontSize:20, left:-1, top:5, color:"white"
  },
  main2:{
    flex: 1, backgroundColor: 'white',
    justifyContent:"center", alignItems:'center',
  },
  text1:{
    alignItems:"center", backgroundColor:"deeppink",marginTop:0,
    borderWidth:1, marginRight:2, marginLeft:2,
    width:125,height:40,borderRadius:12.5,marginBottom:"auto",top:5
  },
  text1a:{
    alignItems:"center", backgroundColor:"skyblue",marginTop:10,
    borderWidth:1, marginRight:2, marginLeft:2,
    width:125,height:40,borderRadius:12.5,marginBottom:"auto",top:-3,left:90,
  },
  text1aa:{
    alignItems:"center", backgroundColor:"red",marginTop:10,
    borderWidth:1, marginRight:2, marginLeft:2,
    width:125,height:40,borderRadius:12.5,marginBottom:"auto",top:-3,left:90,
  },
  input1:{
   flex:1, color:"black"
  },
  input2:{
    justifyContent:"flex-start", alignItems:'center', width:305, borderWidth:2,height:50,left:-1,marginTop:15,
    color:"black",borderRadius:5
  }
  ,
  innerbox1:{
    flex:1,
  }
}) 
export default App;