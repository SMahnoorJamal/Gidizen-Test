import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import Input from "../../components/Input";
//import CheckBox from "@react-native-community/checkbox";
import CustomCheckBox from "../../components/CustomCheckBox";
import Button from "../../components/Button";
import Line from "../../components/Line";
import Header from "../../components/Header";
import styles from "./styles";

function ShippingScreen({navigation}) {

    return (
        <ScrollView style={{
            flex: 1, backgroundColor: 'white'
        }}>
              <Header 
              headerText={styles.headerText}
              title="Shipping" backButton={true}></Header>
            <View style={{

                width: '79%', marginLeft: 50, justifyContent: 'center',
                // backgroundColor: 'lightgreen'
            }}>
                {/* <Header title="Shipping" backButton={true}></Header> */}
                
                <Text style={{ marginTop: '10%', marginLeft: -17,
                fontSize: 17, fontWeight: 'bold' }}>Shipping Address</Text>

                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    width: '105%',
                    // marginTop: '12%',
                    marginLeft: -17
                }}>
                    <Input
                        inputContainer={{ backgroundColor: '#F4F4F4' }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: '#C4C4C4',
                            height: 56,
                            backgroundColor: '#F4F4F4',
                            width: '45%',
                            marginTop: 10
                        }}
                        placeholder="First Name"></Input>
                        <View style>
                        <Input
                        inputContainer={{ marginLeft: 19 }}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: '#C4C4C4',
                            height: 56,
                            backgroundColor: '#F4F4F4',
                            width: '91%',
                            marginTop: 10,
                            marginLeft: 20
                        }}
                        placeholder="Last Name"></Input>
                        </View>
                  

                </View>


                <Input
                    inputContainer={{ backgroundColor: '#F4F4F4', marginLeft: 19 }}
                    style={{
                        justifyContent: 'center',
                        borderRadius: 8,
                        borderWidth: 2,
                        borderColor: '#C4C4C4',
                        height: 56,
                        //backgroundColor: 'red',
                         backgroundColor: '#F4F4F4',
                        width: '105%',
                        marginTop: 17,
                        marginLeft: -17
                    }}
                    placeholder="Adress" />




                <View style={{
                    flexDirection: 'row',
                    marginTop: '3%',
                    marginLeft: -17
                    // marginLeft: 10
                }}>
                    <Input
                        inputContainer={{ backgroundColor: '#F4F4F4' }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: '#C4C4C4',
                            height: 56,
                            backgroundColor: '#F4F4F4',
                            width: '45%',
                            marginTop: 10
                        }}
                        placeholder="Town/City"></Input>
                    <Input
                        inputContainer={{ backgroundColor: '#F4F4F4', marginLeft: 19 }}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 8,
                            borderWidth: 2,
                            borderColor: '#C4C4C4',
                            height: 56,
                            backgroundColor: '#F4F4F4',
                            width: '45%',
                            marginTop: 10,
                            marginLeft: 25
                        }}
                        placeholder= "Zip Code" />

                </View>

                <Line style={{ backgroundColor: 'grey', height: 1, width: '105%', marginTop: 40,
            marginLeft: -17 }} />


                <View>

                    <Text style={{ marginTop: 30,
                        marginBottom: 27, marginLeft: -17, fontSize: 17, fontWeight: 'bold' }}>Shipping Options</Text>


                    <CustomCheckBox  title="Standard 5 to 7 working days"></CustomCheckBox>
                   <View style={{marginTop: 10,}}>
                   <CustomCheckBox title=" Express 2 to 3 days"></CustomCheckBox>
                
                   </View>
                 {/* <View style={{ marginLeft: '10%', marginTop: 20 }}>
                        <CustomCheckBox title="Standard 5 to 7 days" />
                        <CustomCheckBox title="Express 5 to 7 days" />
                    </View> */}
                    <Button style={{
                        alignItems: "center",
                        backgroundColor: "#989494",
                        marginTop: 66,
                        borderRadius: 10,
                        height: 56,
                        width: '105%',
                        marginLeft: -17,
                        justifyContent: 'center',
                    }} text="Check Out" 
                    
                    onPress={()=> {navigation.navigate('HomePage')}}/>
                </View>
            </View>
        </ScrollView>
    )

}

export default ShippingScreen;