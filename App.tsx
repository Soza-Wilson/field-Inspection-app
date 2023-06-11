

import React from 'react';
import { Text, View } from 'react-native';
import Splash from './components/splash';
import SignIn from './components/signIn';
import Loading from './components/loading';
import Home from './components/home';

const App = () => {
  return (
    <View style={{flex: 1}}><Home /></View>
  )
}


export default App;
