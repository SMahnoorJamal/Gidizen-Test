import {View, Image, Text} from 'react-native';
import React from 'react';

function Boxes (props) {
        return(
<View style ={{ backgroundColor: 'white', justifyContent: 'space-between', marginLeft: 20, borderRadius: 10}}>
<Image style={{borderRadius: 10, resizeMode: 'contain',
 width: '20%', padding: 70, height: '5%'}} source={require('../../Images/Photo4.png')}></Image>

<Text>{props.text}</Text>
<Text>34,040 NGN</Text>
</View>
        )
    }
export default Boxes;