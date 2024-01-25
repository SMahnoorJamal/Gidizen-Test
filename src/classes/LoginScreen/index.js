
import React from 'react';
import {
  StyleSheet,
  ScrollView,Text
} from 'react-native';
import { BoxL } from '../../components/BoxL';
import BorderComp from '../../components/BorderComp';

function LoginScreen({navigation}) {
  return (
          <ScrollView>
             <BoxL ></BoxL>
             <BorderComp navigation={navigation}/>
   
    </ScrollView>

  );
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

export default LoginScreen;
