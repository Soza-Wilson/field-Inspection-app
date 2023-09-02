
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import Splash from './components/landingPage';
import SignIn from './components/isLoggedOut/signIn';
import Loading from './components/splashScreen';
import Home from './components/isLoggedIn/home';

import MyStack from './routes/navigationStack';
import Loader from './components/loaders/loader';
import { NavigationContainer } from '@react-navigation/native';
import LogInProvider from './context/logInProvider';
import StageTips from './components/isLoggedIn/inspection/stageTips';
import SelectedInspectionType from './context/inspectionType';
import ViewInspectionDetails from './components/isLoggedIn/inspection/inspectionData/viewInspectionDetails';





const App = () => {
  return (


    <View style={{ flex: 1 }}>

  
     
      {/* <LogInProvider>
        <MyStack />
      </LogInProvider> */}

 <ViewInspectionDetails/>
   

 
    </View>
 


  )
}


export default App;
