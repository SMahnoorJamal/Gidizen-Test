import Carousel, {Pagination} from 'react-native-banner-carousel';
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native';
import React, { Component } from 'react';
import { ManInCoat1 } from '../../Images/index';
import { Photo3 } from '../../Images/index';
import { Photo4 } from '../../Images/index';

const images = [
  ManInCoat1,
  Photo3,
  Photo4
];

const { width: screenWidth } = Dimensions.get('window')

export default class Carousal extends React.Component {
  
  pagination () {
    const { entries, activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={3}
          // activeDotIndex={activeSlide}
          // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          // dotStyle={{
          //     width: 10,
          //     height: 10,
          //     borderRadius: 5,
          //     marginHorizontal: 8,
          //     backgroundColor: 'rgba(255, 255, 255, 0.92)'
          // }}
          // inactiveDotStyle={{
          //     // Define styles for inactive dots here
          // }}
          // inactiveDotOpacity={0.4}
          // inactiveDotScale={0.6}
        />
    );
}
  render() {
    return (
      <View>
   
      <Carousel>
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
   {/* <Dots  length={3}></Dots> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: screenWidth +30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    // marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    resizeMode: 'contain'
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})