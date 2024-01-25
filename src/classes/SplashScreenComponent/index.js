
// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenComponent = () => {
  useEffect(() => {
    // Hide splash screen after component mounts
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/logo.jpg')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Adjust the background color as needed
  },
  logo: {
    width: 200, // Adjust the width and height as needed
    height: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreenComponent;