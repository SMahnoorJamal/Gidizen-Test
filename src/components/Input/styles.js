import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
//justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        margin: 9,
        padding: 4,
        left: '8%',
        right: '17%',
        height: 40,
    //backgroundColor:'orange',
        backgroundColor:'#F6F6F6',
    },
    input: {
        // position: 'relative',
        backgroundColor: 'white',
        width: '84%',
        
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
backgroundColor: '#000000',
        resizeMode: 'contain',
        height: '40%',
        width: '30%',
alignSelf: 'flex-end'
    }
});