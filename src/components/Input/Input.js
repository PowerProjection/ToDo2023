import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from './Input.styles';

const Input = ({text, setText, addTodo}) => {

    let myText = ""
    return(
        <View style={styles.inputView}>

            <TextInput 
                style={styles.inputTextInput} 
                placeholder="Yapılacak..." 
                placeholderTextColor="#7c7d7d"
                onChangeText={setText}
                value={text}
                
            />

            <TouchableOpacity 
                style={styles.inputTouchable}
                onPress={addTodo} 
            >
                    <Text style={styles.inputText} >Kaydet</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Input;