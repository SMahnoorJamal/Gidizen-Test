
import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    ImageBackground
} from 'react-native';
import { BoxL } from '../../components/BoxL';
import { BorderComp } from '../../components/BorderComp';
import CartBox from '../../components/CartBox';
import { ManInCoat1, Photo3 } from '../../Images';
import Button from '../../components/Button';
import Header from '../../components/Header';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data1: [ {
                image: ManInCoat1,
                price: 30050
            },
            {
                image: ManInCoat1,
                price: 39050 
            },
            {
                image: Photo3,
                price: 30050 
            },
              {
                image: ManInCoat1,
                price: 30050 
            }]
            
        }
    }
    // const data1 =
    //     [
    //         {
    //             image: ManInCoat1,
    //             price: 1
    //         },
    //         {
    //             image: ManInCoat1,
    //             price: 2
    //         },
    //         {
    //             image: Photo3,
    //             price: 3
    //         },
    //           {
    //             image: ManInCoat1,
    //             price: 3
    //         }
    //     ]
    // function Cart( {navigation}) {
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Header title="Cart" backButton={true} />
                    <Image style={{ marginTop: 35 }} source={require('../../Images/Search.png')}>

                    </Image>


                </View>
                {/* <Text style={{fontStyle: 'Bold'}}>Cart</Text> */}


                        <View>

                            {this.state.data1 ? this.state.data1.map(item => {
                                return (
                                    <CartBox data={item}></CartBox>
                                )
                            }) : null}

                            {/* <View style={{
                                width: '100%', marginTop: '-5%',
                                marginBottom: '-15', backgroundColor: 'grey', height: 1
                            }}></View> */}

                        </View>

                {/* <View style={{width: '100%', backgroundColor: 'grey', height: 2}}></View>    */}

                <View style={{ marginTop: 20, marginLeft: 29, width: '100%', justifyContent: 'center' }}>
                    <View style={{
                        flexDirection: 'row', borderRadius: 42, justifyContent: 'space-between',
                        padding: 20, width: '83%', backgroundColor: '#F4F4F4'
                    }}>
                        <Text>Total Price</Text>
                        <Text>68,148 NGN</Text>
                    </View>

                    <View style={{ marginTop: 15, marginBottom: 18 }}>
                        <Button text="Go to Shipping" onPress={() => { this.props.navigation.navigate('Shipping') }} />
                    </View>

                </View>

            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    button1: {
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: 12,
        height: 51,
        width: '80%',
        justifyContent: 'center',
        left: '10%'
    },

});

export default Cart;
