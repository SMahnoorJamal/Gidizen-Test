
import React, { useState, useEffect } from 'react';
import SplashScreenComponent from './src/classes/SplashScreenComponent/index';
// import MainApp from './path/to/MainApp';
import Form from  './src/classes/Form/index';
import Navigation from './src/Navigation/index';
import { Provider } from 'react-redux';
import store from './src/Redux/store';

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after a delay (e.g., 2000 milliseconds)
    const splashTimeout = setTimeout(() => {
      setSplashVisible(false);
    }, 2000);

    return () => clearTimeout(splashTimeout);
  }, []);

  return isSplashVisible ? <SplashScreenComponent /> :
 
 <Provider store={store}>
 
    <Navigation/>
</Provider>
 
  
};

export default App;