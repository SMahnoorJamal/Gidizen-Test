import Carousel from 'react-native-banner-carousel';
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import { ManInCoat1 } from '../../Images/index';


const images = [
  ManInCoat1,
  ManInCoat1,
  ManInCoat1
];

const { width: screenWidth } = Dimensions.get('window')

export default class MyCarousel extends React.Component {

  
  render() {
    return (
      <Carousel
      style={{width: '100%'}}>
        {images.map(item => {
          return (
            <View style={styles.item} key={item}>
              <Image
                source={item}
                style={styles.imageContainer}
              />
            </View>
          )
        })}
      </Carousel>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: screenWidth - 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    // marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
    resizeMode: 'contain'
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})