import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from './Todos.styles';

const Todos = (item) => {
    return(
        <View style={styles.todosView} >
            <TouchableOpacity 
            style={item.isDone ? styles.todosDoneTouchable : styles.todosTouchable} >
                <Text style={item.isDone ? styles.todosDoneText : styles.todosText} >
                    {item.name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Todos;