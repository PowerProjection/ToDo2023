import React from "react";
import {View, Text, FlatList} from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import Todos from './components/Todos';

const todo_data = [
  {id:1, name:'Köpeği gezdir', isDone:false},
  {id:2, name:'Çiçekleri sula', isDone:true},
  {id:3, name:'Alışveriş yap', isDone:false},
  {id:4, name:'Kitap oku', isDone:false}
]


const App = () => {

const render = (item) => {
  return(
    <View>
    <Todos name={item.name} isDone={item.isDone}/>
    </View>
  );
}

  return(
    <View style={{backgroundColor:'#102027',flex:1,justifyContent:'space-between'}} >
      <Heading />
      <FlatList data={todo_data} renderItem={({item}) => render(item)} />
      <Input />
    </View>
  )
}

export default App;