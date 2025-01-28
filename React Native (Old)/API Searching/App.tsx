import axios from 'axios';
import React,{Component, useState, useEffect} from 'react';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList, Modal, Pressable, StatusBar,
  Platform,Linking,
  TouchableHighlight,
  Alert} from 'react-native';
import {WebView} from "react-native-webview";
const App = () =>{
  const [name,setName] = useState('');
  const [newInput,setNewInput] = useState(false);
  const [newInputName,setNewInputName] = useState('');
  const [newAge,setNewAge] = useState('');
  const [newEmail,setNewEmail] = useState('');
  const [newId,setNewId] = useState('');
  const [showmodal,setShowmodal] = useState(false);
  const [showopen,setShowopen] = useState(true);
  const [modId,setModId] = useState('');
  const openButton = (()=>{
    setShowmodal(true); setShowopen(false);
  })
  const closeButton = (()=>{
    setShowmodal(false); setShowopen(true);
  })
  const openWeb5 = (()=>{
    Linking.openURL("https://google.com/")
  })
  const [data,setData] = useState([]);
  const openWeb4 = async (text)=>{
    if(text != null){
      setName(text);
      setNewInputName('');
      setNewAge(''); setNewEmail(''); setNewId(''); 
      const url=`http://192.168.0.184:3000/users?q=${text}`;
      let result=await fetch(url);
      let result1=await result.json();
      if(result1)
        setData(result1);
    }
    else{
      setName('');
    }
  }
  const showData = async ()=>{
    const url = `http://192.168.0.184:3000/users`;
    let result = await fetch(url,{
      method:"POST",
      headers: {"Content-Type": "application/json",
      },
      body:JSON.stringify({name:name,age:newAge,email:newEmail,id:newId})
    })
    let result1 = await result.json();
    if(result1){
      Alert.alert("User Added Successfully!");
    }
  }
  const modifyData = (()=>{
      setNewInput(true);
  })
  const openWeb6 = ((text)=>{
      setNewInputName(text);
  })
  const openWeb7 = ((text)=>{
    setNewId(text);
})
  const modify = (()=>{
    if(newInputName.length == 0){
      setNewInputName('');
      Alert.alert("Enter valid input!!");
    }
    else if(newAge.length == 0){
      setNewAge('');
      Alert.alert("Enter valid input!!");
    }
    else if(newEmail.length == 0){
      setNewEmail('');
      Alert.alert("Enter valid input!!");
    }
    else if(newId.length == 0){
      setNewId('');
      Alert.alert("Enter valid input!!");
    }
    else{
      const putAPI ={
          method:'PATCH',
          headers: {"Content-type":"application/json"},
          body: JSON.stringify({
            name: newInputName, age: newAge,
            email: newEmail,
        })
      };
      const baseurl = `http://192.168.0.184:3000/users`;
      fetch(`${baseurl}/${newId}`,putAPI);
      setNewInput(false);
      setNewAge(''); setNewEmail(''); setNewId(''); setName(''); setNewInputName('');
      Alert.alert("User Modified Successfully");
    }
  })
  const modifyDataId = (()=>{
      setShowmodal(true);
  })
  const deleteUser = async()=>{
    const url = `http://192.168.0.184:3000/users`;
    let result = fetch(`${url}/${newId}`,{
      method:"delete",
    });
    result = (await result).json();
    if(result){
      Alert.alert("User Deleted!");
    }
  }
  return(
    <View style={styles.main}>
      <Modal transparent={true} visible={showmodal} animationType='slide'>
        <View style={styles.centeredview}>
          <View style={styles.modalview}>
            <Text style={[{fontSize:20},{marginBottom:15}]}>Enter ID to Delete</Text>
            <TextInput style={styles.input3} placeholder='Enter Modified Name' onChangeText={(text)=>openWeb7(text)} value={newId}></TextInput>
            <View style={{marginBottom:5}}>
              <Button title='Delete' onPress={deleteUser}></Button>
            </View>
            <Button title='Close' onPress={closeButton}></Button>
          </View>
        </View>
      </Modal>
      <View style={styles.text1}> 
        <Text style={styles.main1}>
          Search Box
        </Text>  
      </View>
      <View style={styles.input1}>
        {
          !newInput?
            <TextInput style={styles.input2} placeholder='Enter Name' onChangeText={(text)=>openWeb4(text)} value={name}></TextInput>
          :
            <TextInput style={styles.input2} placeholder='Enter Modified Name' onChangeText={(text)=>openWeb6(text)} value={newInputName}></TextInput>
        }
        {
          newInput && newInputName?
            <TextInput style={styles.input2} placeholder='Enter Id to Modify' onChangeText={(text)=>setNewId(text)} value={newId}></TextInput>
          :
            null
        }
        {
          !data.length && name.length || newInputName?
            <TextInput style={styles.input2} placeholder='Enter Age' onChangeText={(text)=>setNewAge(text)} value={newAge}></TextInput>
            :
            null
        }
        {
          !data.length && newAge.length || newInputName?            
            <TextInput style={styles.input2} placeholder='Enter Email' onChangeText={(text)=>setNewEmail(text)} value={newEmail}></TextInput>          
            :
            null
        }
        {
          !data.length && newEmail.length && !newInput?
            <TextInput style={styles.input2} placeholder='Enter Id' onChangeText={(text)=>setNewId(text)} value={newId}></TextInput>
            :
            null
        }
        <TouchableHighlight style={styles.text1aa} onPress={openWeb4}>
          <Text style={{marginTop:"auto",marginBottom:"auto"}}>Clear</Text>
        </TouchableHighlight>
        <View style={{flexDirection:"row",marginLeft:-65}}>
        {
          !newInput ?
            <TouchableHighlight style={styles.text1ab} onPress={showData}>
              <Text style={{marginTop:"auto",margin:"auto"}}>Add New Data</Text>
            </TouchableHighlight>  
          :
            null
        }
        {
          !newInput ?
            <TouchableHighlight style={styles.text1a} onPress={modifyData}>
              <Text style={{marginTop:"auto",margin:"auto"}}>Modify Data</Text>
            </TouchableHighlight>
          :
            null
        }
        {
          !newInput ?
            <TouchableHighlight style={styles.text1ad} onPress={modifyDataId}>
              <Text style={{marginTop:"auto",margin:"auto"}}>Delete Data</Text>
            </TouchableHighlight>
          :
            null
        }
        {
          newInput?
            <TouchableHighlight style={styles.text1ac} onPress={modify}>
              <Text style={{marginTop:"auto",margin:"auto"}}>Modify</Text>
            </TouchableHighlight>
          :
            null
        }
        </View>
        <View style={{flex:1}}>
        {
          data.length && name.length?
          <View style={{padding:10,flexDirection:"row",justifyContent:"space-between"}}>
            <Text>Name</Text>
            <Text>Age</Text>
            <Text>Id</Text>
          </View>
          :
            null
        }
        {
          data.length ?
            name.length?
              data.map((item)=><View key={item.id} style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
                  <Text style={{left:"auto"}}>{item.name}</Text>
                  <Text style={{left:"auto"}}>{item.age}</Text>
                  <Text style={{left:"auto"}}>{item.id}</Text>
                </View>
              )
              :
                null
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
      flex:1,backgroundColor: 'darkslateblue',
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
    borderWidth:1, marginRight:2,
    width:105,height:40,borderRadius:12.5,marginBottom:"auto",top:-3,left:55, flexDirection:"row"
  },
  text1ac:{
    alignItems:"center", backgroundColor:"skyblue",marginTop:10,
    borderWidth:1, marginRight:2,
    width:125,height:40,borderRadius:12.5,marginBottom:"auto",top:-3,left:155, flexDirection:"row"
  },
  text1aa:{
    alignItems:"center", backgroundColor:"red",marginTop:10,
    borderWidth:1, marginRight:2, marginLeft:2,
    width:125,height:40,borderRadius:12.5,marginBottom:"auto",top:-3,left:90,
  },
  text1ab:{
    alignItems:"center", backgroundColor:"chartreuse",marginTop:10,
    borderWidth:1, marginRight:2,
    width:105,height:40,borderRadius:12.5,marginBottom:"auto",top:-3,left:45, flexDirection:"row"
  },
  text1ad:{
    alignItems:"center", backgroundColor:"skyblue",marginTop:10,
    borderWidth:1, marginRight:2,
    width:105,height:40,borderRadius:12.5,marginBottom:"auto",top:-3,left:65, flexDirection:"row"
  },
  input1:{
   flex:1, color:"black"
  },
  input2:{
    justifyContent:"flex-start", alignItems:'center', width:305, borderWidth:2,height:50,left:-1,marginTop:15,
    color:"black",borderRadius:5
  },
  input3:{
    justifyContent:"flex-start", alignItems:'center', width:305, borderWidth:2,height:50,left:-1,marginTop:15,
    color:"black",borderRadius:5,marginBottom:10
  },
  input3:{
    justifyContent:"flex-start", alignItems:'center', width:305, borderWidth:2,height:50,left:-1,marginTop:15, marginBottom: 20,
    color:"black",borderRadius:5
  },
  innerbox1:{
    flex:1,
  },
  centeredview:{
    flex:1,justifyContent:'center',alignItems:'center'
  },
  modalview:{
    backgroundColor: "#fff", color:"black",padding:28,marginTop:50,
    borderRadius:20,shadowColor:"black",elevation:8,
  },
}) 
export default App;