import React,{Component, useState, useEffect} from 'react';
import {
  Text, View, FlatList, Button, StyleSheet,TextInput,ScrollView,
  SectionList, Modal, Pressable, StatusBar,
  Platform,Linking,
  TouchableHighlight,
  Alert} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home'component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
const Home = ()=>{
  return(
    <View>
      <Text>Home Screen</Text>
    </View>
  )
} 
export default App;