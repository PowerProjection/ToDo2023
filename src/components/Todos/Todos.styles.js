import { StyleSheet } from "react-native";

export default StyleSheet.create({
    todosView:{
        flex:1
    },
    todosText:{
        color:'white',
        fontSize:20,
    },
    todosTouchable:{
        backgroundColor:'#7da453',
        margin:10,
        marginBottom:0,
        borderRadius:7,
        padding:10
    },
    todosDoneText:{
        color:'#7e7f7f',
        fontSize:20,
        textDecorationLine:'line-through'
    },
    todosDoneTouchable:{
        backgroundColor:'#37474f',
        margin:10,
        marginBottom:0,
        borderRadius:7,
        padding:10
    }
})