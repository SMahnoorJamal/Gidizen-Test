// styles.js
import { StyleSheet } from 'react-native';

export const formStyles = StyleSheet.create({
  container: {
    marginTop: '10%',
    borderRadius: 50,
    borderColor: '#c0c0c0',
    borderWidth: 2,
    height: '100%',
    width: '100%',
    marginBottom: '100%',
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: '7%',
    marginLeft: '9%',
    color: '#989494',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#C4C4C4',
    height: 56,
    backgroundColor: 'white',
    width: '100%',
    marginTop: 10,
  },
  button: {
    width: '100%',
    height: 59,
    borderRadius: 50,
    backgroundColor: 'gray', // Set your desired background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop: 26
  },
  buttonText: {
    color: 'white',
  },
  loginText: {
    marginTop: '11%',
    alignItems: 'center',
  },
});