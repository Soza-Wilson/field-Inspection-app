
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import Splash from './components/landingPage';
import SignIn from './components/isLoggedOut/signIn';
import Loading from './components/splashScreen';
import Home from './components/isLoggedIn/home';
import "react-native-gesture-handler";
import MyStack from './routes/navigationStack';
import Loader from './components/loaders/loader';
import { NavigationContainer } from '@react-navigation/native';
import LogInProvider from './context/logInProvider';
import StageTips from './components/isLoggedIn/inspection/stageTips';
import SelectedInspectionType from './context/inspectionType';
import ViewInspectionDetails from './components/isLoggedIn/inspection/inspectionData/viewInspectionDetails';
import ViewDetailsData from './components/isLoggedIn/inspection/inspectionData/viewDetailsData';
import BottomSheetData from './components/isLoggedIn/inspection/inspectionData/bottomSheet/mapBottomSheet';
import SelectedGrowerName from './context/growerSearch';
import BottomSheetContextStatusProvider from './context/bottomSheetEditor';
import EditDataProvider from './context/editInspectionDetails';
import ListSkeloton from './components/skelotons/listSkeloton';






const App = () => {
  return (


    <View style={{ flex: 1 }}>
      <EditDataProvider>
        <BottomSheetContextStatusProvider>
          <SelectedGrowerName>
            <LogInProvider>
              <MyStack />
            </LogInProvider>
          </SelectedGrowerName>
        </BottomSheetContextStatusProvider>
      </EditDataProvider>
    

    </View>



  )
}


export default App;
