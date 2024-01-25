import React, { Component } from 'react'

import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,

} from 'react-native';
import Input from '../Input';
import Button from '../Button';
import { CustomText } from '../CustomText';

export default class DetailsComp extends Component {

  constructor(props) {
    super();
    this.state ={
      count : 0
    }  
  }

increment =( ) => {

  this.setState({count: this.state.count +1})
  return (
  this.state.count)
}

decrement =( ) => {

  // this.setState({count: this.state.count -1})

  // if(this.state.count == 0)  {
  // return (0) }
}
  render() {
  return(

      <ScrollView style={styles.container}>

        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={styles.Text}
        >
          {"Yoruba Boys"}
        </Text>


<View style={{flexDirection: 'row'}}>
<Text style={styles.Text1}>
          Complete set of Agba, Buba, Trousers and Cap for Men. Suitable for Owambe Events. It can be worn
          without the Agbada.
        </Text>

<View style={{marginTop: '7%',
 marginLeft: '1%',}}>
<Button onPress ={() => {this.increment()}} textStyle={{color: 'gray'}} text="+" style={styles.button1}/>
<Text 
style={{marginLeft: 45, marginBottom: 9}}>{this.state.count}</Text>
<Button onPress ={this.decrement} textStyle={{color: 'gray'}} text="-" style={styles.button2}/>
</View>

</View>
      
        <View
          style={{
            marginLeft: '10%',
            justifyContent: 'space-between',
            height: '5%',
            // backgroundColor: 'orange',
             marginTop: '-6%',
            flexDirection: 'row',
            width: '35%'
          }}>


          <Button style={{
            alignItems: "center",
            backgroundColor: "#EAEAEA",
            borderRadius: 10,
            height: 50,
            width: '240%',
            justifyContent: 'center',
          }}
          textStyle={{color: "#6E7179",
          fontSize: 16}}
            text="M" />

          <Button style={{
            alignItems: "center",
            backgroundColor: "#989494",
            borderRadius: 10,
            height: 50,
            width: '390%',
            justifyContent: 'center',
          }}
            text="L" />
          <Button style={{
            alignItems: "center",
            backgroundColor: "#E4E4E4",
            borderRadius: 10,
            height: 50,
            width: '180%',
            justifyContent: 'center',
          }}
          textStyle={{color: "#6E7179",
          fontSize: 16}}
            text="XL" />

            {/* <Button /> */}
          </View>


          <View style={{
            marginTop: '14%',
            width: '70%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: '4%',
            marginBottom: 60,
            // marginLeft: '1%'
          }}>
            <View>
              <Text style={styles.Text2}>
             34098, NGN
              </Text>
              </View>

<View style={{ paddingRight: '0%'}}>
<Button 
onPress={() => this.props.navigation.navigate('Cart')}
text="Add to Cart" style={styles.button}/>
</View>
            
        </View>
      </ScrollView>
  )
        }
  }



const styles = StyleSheet.create({

  container:
  {
    marginTop: '-14%',
    borderRadius: 50,
    borderColor: '#c0c0c0',
    borderWidth: 2,
    height: '120%',
    width: '100%',
    marginBottom: '10%',
    backgroundColor: 'white'
  },
  Text:
  {
    // fontWeight: 'bold',
    fontSize: 27,
    marginTop: '7%',
    marginLeft: '10%',
    color: 'black'
  },
  Text1:
  {
    fontSize: 14,
    marginTop: '7%',
    marginLeft: '10%',
    color: 'black',
    width: '60%'
  },

  Text2:
  {
    fontSize: 24,
    marginTop: '10%',
    marginLeft: '9%',
    width: '100%',
    color: 'black',
  }
,
  button: {     
    alignItems: "center",
    // backgroundColor: "red",
    backgroundColor: "#989494",
    // padding: 20,
    marginTop: 8,
    borderRadius: 10,
    marginLeft: 24,
    height: 56,
    width: '140%',
    justifyContent: 'center',
},
button2: {
  alignItems: "center",
  backgroundColor: "#EAEAEA",
  // padding: 20,
  // marginBottom: 8,
  borderRadius: 10,
  marginLeft: 30,
  height: 40,
  width: '75%',
  justifyContent: 'center',
},
button1: {
  alignItems: "center",
  backgroundColor: "#EAEAEA",
  // padding: 20,
  marginBottom: 8,
  borderRadius: 10,
  marginLeft: 30,
  height: 40,
  width: '75%',
  justifyContent: 'center',
},
})