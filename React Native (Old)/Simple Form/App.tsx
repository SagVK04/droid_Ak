import React,{useState} from 'react';
import CollegeData from './components/CollegeData';
import {
  Text, View, Button, StyleSheet,
  TextInput,
} from 'react-native';
import getStyle  from "./style";
const App = () =>{
  const [name,setName] = useState(" ");
  const [email,setEmail] = useState(" ");
  const [paswd,setPaswd] = useState(" ");
  const [display,setDisplay] = useState(false);
  const resetForm = ()=>{
    setDisplay(false);
    setEmail(" ");
    setPaswd(" ");
    setName(" ");
  }
  return (
    <View>
      <Text style= {{fontSize:20}}>Simple form in react native</Text>
      <TextInput
      placeholder='Enter user name'
      style={styles.textInput}
      onChangeText={(text)=>{setName(text)}}
      value={name}
      />
      <TextInput
      placeholder='Enter user email'
      style={styles.textInput}
      onChangeText={(text)=>{setEmail(text)}}
      value={email}
      />
      <TextInput
      placeholder='Enter user password'
      style={styles.textInput}
      onChangeText={(text)=>{setPaswd(text)}}
      value={paswd}
      />
      <View style={{marginBottom: 10}}>
        <Button title='Get Details' color="red" onPress={()=>setDisplay(true)}/>
      </View>
      <Button title='Clear Details' color="blue" onPress={resetForm}/>
      <View>
        {
          display ?
          <View>
              <Text style={{fontSize:20}}>{name}</Text>
              <Text style={{fontSize:20}}>{email}</Text>
              <Text style={{fontSize:20}}>{paswd}</Text>
          </View>
          :null
        }
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput:{
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10
  }
})
export default App;