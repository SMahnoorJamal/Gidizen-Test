

import React from 'react';
import {
  StyleSheet, Image, View, Text
} from 'react-native';
import Form from '../classes/Form';
import FormAddPost from '../classes/FormAddPost';
import FormHome from '../classes/FormHome';
import LoginScreen from '../classes/LoginScreen/index';
// import { TaskScreen } from './src/screens/TaskSceen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DetailsScreen from '../classes/DetailsScreen';
import ShippingScreen from '../classes/ShippingScreen';
import DetailsScreen from '../classes/DetailsScreen';
import Cart from '../classes/Cart';
import HomePage from '../classes/HomePage';
import RegisterScreen from '../classes/RegisterScreen';

const Stack = createNativeStackNavigator();
const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='LoginScreen'
        screenOptions={{
          headerShown: false,
        }}
      >
         <Stack.Screen
          name="Form"
          component={Form} />
          <Stack.Screen
          name="FormHome"
          component={FormHome} />
             <Stack.Screen
          name="FormAdd"
          component={FormAddPost} />
       <Stack.Screen
          name="LoginSceen"
          component={LoginScreen} />
  <Stack.Screen
          name="Home"
          component={DetailsScreen} />
<Stack.Screen
          name="Register"
          component={RegisterScreen} 
          />
           
      

        <Stack.Screen
          name="Cart"
          component={Cart} />

        <Stack.Screen
          name="Shipping"
          component={ShippingScreen} />

        <Stack.Screen
          name="HomePage"
          component={HomePage} />

      </Stack.Navigator>



    </NavigationContainer>


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;