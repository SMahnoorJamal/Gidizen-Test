import React from "react";

import { Image, View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

const Input = (props) => {

    console.log("propsInput", props)
    return (

        <View style={props.style ? props.style : styles.container}>


{props.icon1 ?   <TouchableOpacity style={{ width: '95%', backgroundColor: ' red', marginTop: -31 }}>
                        <Image source={require('../../Images/Search.png')} style={styles.iconStyle} />
                    </TouchableOpacity> : null}
            <TextInput
                {...props}
                secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
                multiline={props.multiline ? props.multiline : false}
                style={props.inputContainer ? props.inputContainer : styles.input}
                placeholder={props.placeholder ? props.placeholder : "Email"} 
                placeholderStyle={{color: 'red'}}
                // placeholderTextColor={'red'}
                >
            </TextInput>

            {props.iconText ?

                <TouchableOpacity style={{ width: '15%', backgroundColor: ' red' }}>
                    <Text style={styles.textStyle}>{props.iconText}</Text>
                </TouchableOpacity> :
                props.icon ?
                    <TouchableOpacity style={{ width: '95%', backgroundColor: ' red', marginTop: -31 }}>
                        <Image source={require('../../Images/Search.png')} style={styles.iconStyle} />
                    </TouchableOpacity>

                    :
                    <TouchableOpacity style={{ width: '15%' }}>
                    </TouchableOpacity>
            }

        </View>

    )
}


export default Input;