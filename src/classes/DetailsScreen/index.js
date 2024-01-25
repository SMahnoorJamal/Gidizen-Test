import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
// import { connect } from 'react-redux';
// import { addPlace } from './src/actions/place';
import DetailsComp  from '../../components/DetailsComp';
import Carousal from '../../components/Carousal/index';

function DetailsScreen( {navigation}) {

  return (
    <ScrollView style={{marginBottom: -90}}>
      <Carousal />
      <DetailsComp navigation={navigation} />
    </ScrollView>

  );
}


// const mapStateToProps = (state) => {
//   console.log("hggh", state.places.places)
//   return {
//     places: state.places.places
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: (name) => {
//       dispatch(addPlace(name))
// //     }
// //   }
// // }
// export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)

export default DetailsScreen;