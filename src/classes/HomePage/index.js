import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import { styles } from '../../classes/HomePage/styles';
import ApiService from '../../Api/ApiService'; // Import ApiService

const HomePage = () => {
  const apiService = ApiService(); // Initialize ApiService
  const [imageData, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const imageData = await apiService.get('images');
      console.log('Retrieved Images:', imageData);
      setData(imageData)
    };

    fetchData();
  }, [apiService]);

  const [data] = useState([
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
    require('../..//Images/WebDress.png'),
  ]);
  function renderImages(item)  {
    console.log("renderImages", item)
    return(
    <View style={styles.imageContainer}>
      <ImageBackground source={{uri:item.image}} style={styles.image}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Hand-Made</Text>
          <Text style={{ color: 'white' }}> For You</Text>
        </View></ImageBackground>
    </View>)
  }
  return ( 
    <ScrollView style={{ flex: 1, marginLeft: 21 }}>
      <Text style={{ marginTop: 20, marginBottom: 10 }}> Welcome, Toyln</Text>
      <View style={{ height: 50, width: '93%', flexDirection: 'row', backgroundColor: 'white' }}>
        <TextInput
          secureTextEntry={false}
          multiline={false}
          style={styles.input}
          placeholder="Search"
        />
        <TouchableOpacity style={{ width: '10%', height: '36%', marginTop: 17, marginLeft: 18 }}>
          <Image source={require('../../Images/Search.png')} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>

      <Text style={{ marginTop: 30 }}>What's Trending?</Text>

      <View style={{ width: '92%', marginTop: 22, height: '91%' }}>
        <FlatList
          data={[{ key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' }]}
          renderItem={({ item }) => (
            <View>
              <Image
                style={{
                  backgroundColor: 'red',
                  marginLeft: 9,
                  width: 90,
                  height: 86,
                  borderRadius: 100,
                  borderWidth: 0.5,
                }}
                source={require('../../Images/Photo4.png')}
              />
              <View style={{ marginLeft: 11, marginTop: 5 }}>
                <Text>Jk. Rowling</Text>
                <Text>{item.key}</Text>
              </View>
            </View>
          )}
          horizontal
          ItemSeparatorComponent={() => <View style={{ margin: 5 }} />}
        />

        <View style={{ marginTop: -10, borderRadius: 250, height: 90, width: '90%', backgroundColor: 'red' }}>
          <ImageBackground
            source={require('../..//Images/WebDress.png')}
            imageStyle={{ height: 150, width: '110%', borderRadius: 27 }}>
            <View style={{ justifyContent: 'center', marginTop: 80, alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Hand-Made</Text>
              <Text style={{ color: 'white' }}> For You</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 80, justifyContent: 'space-between' }}>
          <Text>Explore by fashion</Text>
          <Text>See all</Text>
        </View>

        <View style={styles.container2}>
          <View style={styles.row}>
            <FlatList
            numColumns={2}
               contentContainerStyle={styles.flatListContainer}
              data={imageData}
              renderItem={({ item }) => renderImages(item)}
              keyExtractor={(item) => (item && item.key ? item.key.toString() : '')}>
            </FlatList>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;