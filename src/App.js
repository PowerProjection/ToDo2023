import React, {useState} from "react";
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import Todos from './components/Todos';

const todo_data = [
  {id:Date.now() + Math.random(), todoTextVal:'Köpeği gezdir', isDone:false},
  {id:Date.now() + Math.random(), todoTextVal:'Çiçekleri sula', isDone:true},
  {id:Date.now() + Math.random(), todoTextVal:'Alışveriş yap', isDone:false},
  {id:Date.now() + Math.random(), todoTextVal:'Kitap oku', isDone:false}
]


const App = () => {
  
const [dataState, setDataState] = useState(todo_data)
const [text, setText] = useState('')

const render = (item) => {
  return(
    <View>
      <Todos name={item.todoTextVal} isDone={item.isDone} id={item.id} change={doneChange} />
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

const addTodo = () => {
  setDataState([...dataState, 
    {id: Date.now() + Math.random(), todoTextVal:text, isDone:false}
  ]);
  setText('')
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