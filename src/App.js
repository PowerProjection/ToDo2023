import React from "react";
import {View, Text} from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import Todos from './components/Todos';

const App = () => {
  return(
    <View>
      <Heading />
      <Todos />
      <Input />
    </View>
  )
}

export default App;