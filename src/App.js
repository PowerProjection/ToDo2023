import React, {useState} from "react";
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import Todos from './components/Todos';
import todo_data from './todo_data.json';

const App = () => {
  
const [dataState, setDataState] = useState(todo_data)
const [text, setText] = useState('')

const render = (item) => {
  return(
    <View>
      <Todos 
        name={item.todoTextVal} 
        isDone={item.isDone} 
        id={item.id} 
        change={doneChange} 
        delete={deleteTodo} 
      />
    </View>
  );
}

const deleteTodo = id => {
  const newTodos = dataState.filter(todo => todo.id !== id)
  setDataState(newTodos)
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

const addTodo = () => {
  if (text.length <3) return Alert.alert("Notunuz 2 karakterden az olamaz") //return breaks the function
  setDataState([...dataState, 
    {id: Date.now() + Math.random(), todoTextVal:text, isDone:false}
  ]);
  setText('') //textbox cleared
}


  return(
    <View  style={styles.mainView}>
      <Heading todosNumber={dataState} />

      <FlatList 
        data={dataState} 
        renderItem={({item}) => render(item)}
      />
      
      <Input text={text} setText={setText} addTodo={addTodo} />
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