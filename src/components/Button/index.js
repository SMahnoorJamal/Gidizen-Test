import React from 'react';

import { View, TouchableOpacity, StyleSheet, Text, ProgressViewIOSComponent } from 'react-native';

const Button = (props) => {

    console.log("onPress", props)
    return (

        <View>
            <TouchableOpacity onPress={props.onPress} style={props.style? props.style :
                 styles.button} >
                    
                <Text  style={props.textStyle? props.textStyle : styles.buttonText} >{props.text ? props.text : 'Log In'}</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    button: {     
        alignItems: "center",
        backgroundColor: "#989494",
        // padding: 20,
        borderRadius: 10,
        // opacity:'100%',
        height: 56,
        width: '83%',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
})

export default Button;