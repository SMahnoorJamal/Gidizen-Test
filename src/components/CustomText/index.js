import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const CustomText = (props) => {

    console.log("touchableText", props)
    return (
        <View>
        {props.touchable ?
            <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.textColor}>{props.text ?
                props.text : "Forgot your password?"}</Text>
            </TouchableOpacity>

            :
        <Text style={styles.textColor}>{props.text ?
            props.text : "Forgot your password?"}</Text>

        }
         </View>
    )
}

