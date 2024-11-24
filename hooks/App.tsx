import React from 'react';
const App = () =>{
  return(
    <View>
      <Text style={{fontSize:30, color: "red"}}>Show Hide Component</Text>
      <Button title='UpdateCount'></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  item:{
    fontSize: 25,
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