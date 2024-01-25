import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

   
    input: {
        // position: 'relative',
        backgroundColor: 'white',
        width: '80%',
        // justifyContent: "center",
        // paddingVertical: 7,
        marginLeft: 8
        // alignItems:"center"

    },
    textStyle: {
        // marginLeft: '42%',
        color: '#000000',
        resizeMode: 'contain',
        height: '40%',
        width: '40%',
    },
    iconStyle: {
        color: '#000000',
        resizeMode: 'contain',
        height: '100%',
        // backgroundColor: 'green',
        width: '100%',
// alignSelf: 'flex-end'
    },
    container2: {
        //   flex: 1,
        // width: '90%',
        marginTop: '9%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        row: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: '100%', // Adjust as needed
  
        },
        flatListContainer:{
          paddingHorizontal: 8,
          paddingVertical: 8,
          borderRadius:9,
        },
        imageContainer: {
          borderTopEndRadius: 9,
          borderRadius: 15,
          overflow:'hidden',
          borderColor: 'grey',
          margin: 5,
          width: '48%', // Adjust the width to have two columns
          height: 100,
           marginVertical: 5,
           backgroundColor:'blue'
         },
        image: {
          // flex: 1,
          // borderRadius: 13,
          // borderWidth: 1, 
          width: '100%',
          overflow:'hidden', //for borderradius to take efect
          height: '100%',
          backgroundColor:'pink',
          resizeMode: 'cover',
        },

});