// Form.js
import React from 'react';
// import Toast from 'react-native-toast-message';
import { ToastAndroid, View, Text, ScrollView, TouchableOpacity } from 'react-native';
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
  handleInputChange = (text) => {
    console.log("inputsss", text)
    this.setState({ email: text })

  };

  handleInputChange2 = (text) => {
    console.log("inputsss", text)
    this.setState({ name: text })
  };


  handleSave = () => {
    const { name, email } = this.state;
    const userData = { name, email };

    if (this.state.name === '' || this.state.email === '') { this.showToast() }
    else {
      this.props.saveUserData(userData);
      this.props.navigation.navigate('FormHome')
    }
  }

  showToast() {
    ToastAndroid.show('Please fill all the requirements', ToastAndroid.SHORT);
  }
  render() {
    return (
      <ScrollView>
        <BoxL></BoxL>
        <View style={formStyles.container}>
          <Text style={formStyles.text}>{'User Form'}</Text>
          <View style={{ padding: '8%' }}>
            <Input
              placeholder="*Email"
              icon="true"
              onChangeText={(text) => this.handleInputChange(text)}
              style={formStyles.inputContainer}
            />
            <Input
              placeholder="*Username"
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
                  this.handleSave()}
              />


              <View style={{ marginTop: 15, alignItems: 'center' }}>
                <View>
                  <Text style={{ width: '130%' }}>Don't have an account?</Text>
                </View>


              </View>
              {/* <CustomText onPress={navigation.navigate('Cart')} touchable={true}/> */}

              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Shipping')}>
                  <Text style={{ width: '150%' }}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>

      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  saveUserData,
};

export default connect(null, mapDispatchToProps)(Form);