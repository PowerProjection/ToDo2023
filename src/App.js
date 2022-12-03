import React, {useState} from "react";
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import Todos from './components/Todos';

const todo_data = [
  {id:1, name:'Köpeği gezdir.', isDone:false},
  {id:2, name:'Çiçekleri sula', isDone:true},
  {id:3, name:'Alışveriş yap', isDone:false},
  {id:4, name:'Kitap oku', isDone:false}
]

const App = () => {

const [dataState, setDataState] = useState(todo_data)

const render = (item) => {
  return(
    <View>
      <Todos name={item.name} isDone={item.isDone} />
    </View>
  );
}

const doneChange = id => {
  const newTodos = dataState.map(todo => {
    if (todo.id === id ) {
      todo.isDone = !todo.isDone
    }
    return todo;
  })
  setDataState(newTodos)
}

  return(
    <View  style={styles.mainView}>
      <Heading />

      <FlatList 
        data={dataState} 
        renderItem={({item}) => render(item)}
      />
      
      <Input />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  mainView:{
    backgroundColor:'#102027',
    flex:1,
    justifyContent:'space-between'
  }
})