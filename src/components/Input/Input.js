import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from './Input.styles';

const Input = () => {
    return(
        <View style={styles.inputView}>

            <TextInput 
                style={styles.inputTextInput} 
                placeholder="Yapılacak..." 
                placeholderTextColor="#7c7d7d"
            />

            <TouchableOpacity style={styles.inputTouchable} >
                <Text style={styles.inputText} >Kaydet</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Input;