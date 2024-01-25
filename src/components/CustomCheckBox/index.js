import React, { Component, useState } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { styles } from "./styles";

export default class CustomCheckBox extends Component  {

constructor(props) {
    super(props)
    this.state ={
        touchable: true,
        props: props
    }
}

componentDidMount() {
    console.log('props', this.props, this.state.touchable)
}
CheckBoxTouchable() {
   console.log('ghg', this.state.touchable)
    this.setState({touchable: !this.state.touchable})
}


render() {
    return(
        <View style={styles.item}>
                    <CheckBox
                    onValueChange={() =>this.CheckBoxTouchable()}
                    tintColors={{ true: 'green', false: ' grey'}}
                    value={this.state.touchable} style={ this.props.checkboxstyle ?
                        this.props.checkboxstyle:
                        {  borderColor: '#DADADA', 
                    // borderRadius: '10%' 
                    }} />


                <View style={{ marginLeft: 7 }}>
                    {/* <Text style={styles.task}>{item.task}</Text>  */}
                      <Text style={styles.date}>{this.props.title}</Text>
                </View> 
            </View>
    )
}}