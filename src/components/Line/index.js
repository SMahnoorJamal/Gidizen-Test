import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// import { styles } from '../Input/styles';
export default class Line extends Component {

    render() {
        return(
            <View  style={this.props.style ? this.props.style : styles.line}></View>
        )
    }


}
 const styles = StyleSheet.create({
   line: {
    height: '1%',
           marginTop: '3.5%',
           width: '100%',
           backgroundColor: 'grey'}
})