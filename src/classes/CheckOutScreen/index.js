import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Line from "../../components/Line";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ButtonIcon from "../../components/ButtonIcon";
class CheckOutScreen extends Component {

    render() {
        return (
            <ScrollView style={{width: '85%',
            flex: 1, marginLeft: 33}}
//             contentContainerStyle={{alignItems: 'center',
// }}
>
<Header title="Checkout"/>
                <View style={{ flexDirection: 'row', marginTop: 30,
                width: '90%', justifyContent: 'space-between' }}>
                    <Text>Order</Text>
                <Text>768768</Text>
                </View>
                <View style={{ flexDirection: 'row',
                width: '90%', justifyContent: 'space-between' }}>
                    <Text>Shipping</Text>
                <Text>768768</Text>
                </View>
                <View style={{ flexDirection: 'row',
                marginTop: '15%',
                width: '90%', justifyContent: 'space-between' }}>
                    <Text>Total</Text>
                <Text>768768</Text>
                </View>

                <Line style={{ backgroundColor: 'grey', height: 2, width: '100%', marginTop: 42 }} />

<Text   style={ {
        fontSize: 20,
        color: '#000000',
        fontStyle: 'normal',
        marginTop: 20

}}>Payment</Text>

<Button onPress={() => {this.props.navigation.navigate('HomePage')}}/>
<ButtonIcon/>
            </ScrollView>
        )
    }
}

export default CheckOutScreen;