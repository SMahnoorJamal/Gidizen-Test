import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,

} from 'react-native';
import Input from '../Input';
import Button from '../Button';
import { CustomText } from '../CustomText';
import ShippingScreen from '../../classes/ShippingScreen';
import { useNavigation } from '@react-navigation/native';

function BorderComp({  }) {
 const navigation = useNavigation();
  console.log("sjshjs", navigation)
  return (

    <View style={styles.container}>

      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={styles.Text}
      >
       {'Login'}
       
      </Text>

      <View style={{ padding: '8%' }}>
        <Input
          placeholder="Username"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 2,

            borderColor: '#C4C4C4',
            height: 56,
            backgroundColor: 'white',
            width: '100%',
            marginTop: 10
          }} />

        <Input
          placeholder="Password"
          icon="true"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 2,
            borderColor: '#C4C4C4',
            height: 56,
            backgroundColor: 'white',
            width: '100%',
            marginTop: 10
          }}
        />

        <View style={{ marginTop: '10%' }}>

          <Button style={{
            width: '100%', height: '43%', alignItems: 'center',
            borderRadius: 50,
            justifyContent: 'center', backgroundColor: 'gray'
          }} 
          text="Log In" 
          onPress={() => navigation.navigate('Home')} />
          <View style={{
            padding: '30%', marginTop: -150,
            alignItems: 'center'
          }}>

            <View style={{ marginTop: 15 }}>
              <View>
                <Text style={{ width: '130%' }}>Don't have an account?</Text>
              </View>
            </View>
            {/* <CustomText onPress={navigation.navigate('Cart')} touchable={true}/> */}
            <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
              <Text style={{ width: '150%' }}>Register</Text>
            </TouchableOpacity>
          </View>


        </View>



      </View>
    </View>

  );
}
export default BorderComp;
const styles = StyleSheet.create({

  container:
  {
    // marginTop: '10%',
    borderRadius: 50,
    borderColor: '#c0c0c0',
    borderWidth: 2,
    height: '100%',
    width: '100%',
    marginBottom: '100%',
    backgroundColor: 'white'
  },
  Text:
  {
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: '7%',
    marginLeft: '9%',
    color: '#989494'
  }
})