
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import Splash from './components/splash';
import SignIn from './components/isLoggedOut/signIn';
import Loading from './components/isLoggedOut/loading';
import Home from './components/isLoggedIn/home';
import BottomNavigation from './components/navigation/bottom-navigation';
import MyStack from './routes/StackNavigator';
import Loader from './components/loaders/loader';
import logInProvider from './context/logInProvider';



const App = () => {
  return (
    

<View style={{flex: 1}}><MyStack /></View>

      
  
  )
}


export default App;
