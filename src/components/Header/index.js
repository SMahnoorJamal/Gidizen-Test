import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import Vector from '../../Images/index';
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
    console.log('headerProps', this.props)

    return (
        <View>
            {this.props.backButton ?

                <View style={styles.header1}>

                    <TouchableOpacity style onPress={this.props.onPress}>
                        <Image style={this.props.imageStyle ? this.props.imageStyle : styles.imageStyle}
                        source={require('../../Images/Vector.png')}
                        ></Image>
                    </TouchableOpacity>

                    <Text style={this.props.headerText? this.props.headerText : styles.headerText}>{this.props.title}</Text>
                </View>
                       
                :
                <View style={styles.header}>

                    <Text style={styles.headerText}>{this.props.title}</Text>
                </View>}
        </View>

    )}
};


export default Header;