import React from "react";
import {View, Text} from "react-native";
import styles from './Heading.styles';

const Heading = () => {
    return(
        <View style={styles.HeadView} >
            <Text style={styles.headText}>Yapılacaklar</Text>
            <Text style={styles.countTodosText} >2</Text>
        </View>
    )
}

export default Heading;