
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text,Image } from 'react-native';
import ApiService from '../../Api/ApiService'; // Import ApiService

const AnotherComponent = () => {
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

  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: 'blue', height: 100, width: '100%' }}>
      {item.image? 
      <Image style={{height:'100%', width: '100%', resizeMode: 'contain'}}
       source={{uri: item.image}}></Image>
     : <Text>{item.title}</Text>} 
    </View>
    
  );

  return (
    <View>
      <FlatList
        data={imageData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};


export default AnotherComponent;