// Form.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { formStyles } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { BoxL } from '../../components/BoxL';
import { connect } from 'react-redux';
import { saveUserData } from '../../Redux/userActions';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     
        name: '',
        email: '',
        // Add more input keys as needed
      
      // Add other form fields as needed
    };
  }
  handleInputChange= (text) => {
    console.log("inputsss",text)
    this.setState({email: text})
  
  };

  handleInputChange2= (text) => {
    console.log("inputsss",text)
  this.setState({name: text})
  };


  handleSave = () => {
    const { name, email } = this.state;
    const userData = { name, email };
    console.log("namee", this.state.name, userData, this.state.name)
    this.props.saveUserData(userData);
  };
  render() {
  return (
    <ScrollView>
      <BoxL></BoxL>
      <View style={formStyles.container}>
        <Text style={formStyles.text}>{'Register'}</Text>
        <View style={{ padding: '8%' }}>
          <Input
            placeholder="Email"
            icon="true"
            onChangeText={(text) => this.handleInputChange(text)}
            style={formStyles.inputContainer}
          />
          <Input
            placeholder="Username"
            onChangeText={(text) => this.handleInputChange2(text)}
            style={formStyles.inputContainer}
          />
          {/* <Input
            placeholder="Age"
            icon="true"
            style={formStyles.inputContainer}
          /> */}
          <View style={formStyles.buttonContainer}>
            <Button
              style={formStyles.button}
              text="Submit" 
              onPress={() => 
                {{this.handleSave()}
                this.props.navigation.navigate('Home')}}
            />


<View style={{ marginTop: 15 }}>
              <View>
                <Text style={{ width: '130%' }}>Don't have an account?</Text>
              </View>
            </View>
            {/* <CustomText onPress={navigation.navigate('Cart')} touchable={true}/> */}
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('LoginScreen')}>
              <Text style={{ width: '150%' }}>Login</Text>
            </TouchableOpacity>
          </View>
          </View>
          
        </View>
        
    </ScrollView>
  );
}}

const mapDispatchToProps = {
  saveUserData,
};

export default connect(null, mapDispatchToProps)(Form);