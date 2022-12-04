import React from "react";
import {View, Text} from "react-native";
import styles from './Heading.styles';

const Heading = ({todosNumber}) => {
    const undoneTodos = todosNumber.filter(todosNumber => !todosNumber.isDone);
    return(
        <View style={styles.HeadView} >
            <Text style={styles.headText}>Yapılacaklar</Text>
            <Text style={styles.countTodosText} >{undoneTodos.length}</Text>
        </View>
    )
}

export default Heading;