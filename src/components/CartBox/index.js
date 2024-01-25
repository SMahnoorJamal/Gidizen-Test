import { Image, View, Text, ScrollView } from 'react-native'
import React, { Component } from "react";
import { Photo4 } from '../../Images';
import Button from '../Button';

import Line from '../Line';
import { styles } from './styles';
// import { connect } from 'react-redux';

class CartBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props,
            props: props
        }
    }

    componentDidMount = () => {
        this.setState({ data: this.props.places })
    }
    render() {
        console.log("hgh", this.props.places, this.props)
        return (

            <ScrollView style={{flex: 1}}>

                <View style={{justifyContent: 'center',
                width: '100%', flexDirection: 'row', marginTop: '-5%', }}>
{/* 
                    <View style={{ justifyContent: 'center' }}> */}

                        <View style={{ padding: 30, width: '50%', marginLeft: '20%', }}>
                            {/* {this.state.data ? this.state.data.map(item => {
                             return( */}
                            <Image style={styles.imageStyle} source={this.props.data.image}>
                            </Image>

                        </View>


                        <View style={{marginLeft: 10,
                            marginTop: 39, padding: 20, height: '60%'}}>


                            <Text>Coronam</Text>
                            {/* <Text>30,050 NGN</Text> */}
                            <Text>{this.props.data.price}</Text>


                            <View style={styles.container}>

<Button style={{
    padding: 17,
    backgroundColor: 'grey',
    borderRadius: 10,
    height: 44,
    padding: 9

}}
    textStyle={styles.textStyle}
    text='L'></Button>

<Button style={{
    marginLeft: 52,
    height: 44,
    width: 28,
    padding: 7,
    borderRadius: 10,
    backgroundColor: 'grey' 
}}
    textStyle={styles.textStyle}
    text='1'></Button>


</View>

<View style={{backgroundColor: 'grey', marginLeft: -190, height: 1, marginTop: 26, width: '160%'}}></View>
                        </View>

                        {/* <View>
                    <Text>gygyu</Text>
                    <Text>uhu2row</Text> */}
                        {/* //   <Text
                        //      style={{fontSize: 19,marginLeft: -15,color: 'black'}}>
                        //         {item}</Text> 
                               )}): null} */}


                        {/* 
                    </View> */}
                    </View>
                    {/* <View style={{width: '100%', marginTop: 9, backgroundColor: 'grey', height: 1}}></View>   
   
                </View> 
             */}
                {/* </View> */}
            </ScrollView>)
    }
}
export default CartBox;
// const mapStateToProps = (state) => {
//     console.log("hggh", state.places)
//     return {
//       places: state.places
//     }
//   }
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       add: (name) => {
//         dispatch(addPlace(name))
//       }
//     }
//   }
//   export default connect(mapStateToProps, mapDispatchToProps)(CartBox)