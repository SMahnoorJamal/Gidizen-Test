// Form.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { formStyles } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { BoxL } from '../../components/BoxL';
import { connect } from 'react-GidizenTest2';
import { saveUserData } from '../../Redux/userActions';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      // Add other form fields as needed
    };
  }

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handleSave = () => {
    const { name, email } = this.state;
    const userData = { name, email };
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
            onChange={(e) => this.handleInputChange('email', e.target.value)}
            style={formStyles.inputContainer}
          />
          <Input
            placeholder="Username"
            onChange={(e) => this.handleInputChange('name', e.target.value)}
            style={formStyles.inputContainer}
          />
          <Input
            placeholder="Age"
            icon="true"
            style={formStyles.inputContainer}
          />
          <View style={formStyles.buttonContainer}>
            <Button
              style={formStyles.button}
              text="Submit" 
              onPress={() => 
                {{this.handleSave}
                navigation.navigate('Home')}}
            />
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