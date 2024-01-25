import React, {Component} from "react";
import { imaqges } from  '../../Images/index';
import {View, Image, ImageBackground } from "react-native";
// import {images} from '../../images/spash.jpg';
import { styles } from "./styles";
export class BoxL extends Component {

    render() {
    return (
        <View style={styles.container}>
           <ImageBackground
           style={{height: '66%',
           marginTop: 44, width: '66%',
 marginLeft: '69%', alignSelf: 'center', resizeMode:'contain'}}
           source ={require('../../Images/Photo5.png')}>

            <Image style={{height: '14%', width: '14%', resizeMode: 'contain', marginTop: 64, marginLeft: 55}} source={require('../../Images/Photo6.png')}></Image>
           </ImageBackground>
          </View>
    )
    
}

}