import React, { Component } from 'react';

import { Image,View, TouchableOpacity, StyleSheet, Text, ProgressViewIOSComponent } from 'react-native';

class ButtonIcon extends Component {


    constructor(props){
        super(props);

    }

    render() {
        // console.log("onPress", props)
        return (

            <View>
                <TouchableOpacity onPress={this.props.onPress} style={this.props.style ? this.props.style :
                    styles.button} >
{this.props.icon ? this.props.icon  :
 <Image source={this.props.image}></Image> 
 }
                    <Text style={this.props.textStyle ? props.textStyle : styles.buttonText} >{this.props.text ? this.props.text : 'Log In'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
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

export default ButtonIcon;