import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from './Input.styles';

const Input = ({text, setText, addTodo}) => {

    const [newColor, setNewColor] = useState('#808080');
    
    return(
        <View style={styles.inputView}>

            <TextInput 
                style={styles.inputTextInput} 
                placeholder="Yapılacak..." 
                placeholderTextColor="#7c7d7d"
                onChangeText={setText}
                value={text}
                onFocus={() => setNewColor('orange')}
                onBlur={() => setNewColor('#808080')}
                
            />

            <TouchableOpacity 
                style={[styles.inputTouchable, {backgroundColor:newColor}]}
                onPress={addTodo} 
            >
                    <Text style={styles.inputText} >Kaydet</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Input;