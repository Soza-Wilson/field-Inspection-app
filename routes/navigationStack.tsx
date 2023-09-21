import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/isLoggedIn/home';
import Settings from '../components/isLoggedIn/settings/settings';
import LandingPage from '../components/landingPage';
import Splash from '../components/splashScreen';
import SignIn from '../components/isLoggedOut/signIn';
import Loader from '../components/loaders/loader';
import DeviceSetup from '../components/isLoggedOut/setup';
import { NavigationContainer } from '@react-navigation/native';
import { UseLogIn } from '../context/logInProvider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Map from '../components/isLoggedIn/map';
import ViewInspection from '../components/isLoggedIn/inspection/viewInspection';
import FarmLibrary from '../components/isLoggedIn/library';
import BottomNavigator from '../components/navigation/custom/bottomNavigator';
import AddInspection from '../components/isLoggedIn/inspection/addInspectionDetails';
import AddGeoLocation from '../components/isLoggedIn/inspection/addGeoLocation';
import AddInspectionImages from '../components/isLoggedIn/inspection/addInspectionImages';
import SelectedInspectionType from '../context/inspectionType';
import SelectedInspectionFarmId from '../context/farmDetailsProvider';
import UserProfile from '../components/isLoggedIn/settings/userProfileComponents/profile';
import EditProfileDetails from '../components/isLoggedIn/settings/userProfileComponents/editProfileDetails';
import ViewInspectionDetails from '../components/isLoggedIn/inspection/inspectionData/viewInspectionDetails';
import ViewDetailsData from '../components/isLoggedIn/inspection/inspectionData/viewDetailsData';






const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const mainStack = createStackNavigator();







const IsLoggedOutStack = () => {


    return (


        <AuthStack.Navigator initialRouteName="splash">
            <AuthStack.Screen name="signin" component={SignIn} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <AuthStack.Screen name="setup" component={DeviceSetup} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <AuthStack.Screen name="splash" component={Splash} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <AuthStack.Screen name="landingPage" component={LandingPage} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <AuthStack.Screen name="loader" component={Loader} options={{ headerShown: false, presentation: 'transparentModal' }} />

        </AuthStack.Navigator>



    )

}




function MyTabs() {
    return (


        <mainStack.Navigator>

            <mainStack.Screen name="home" component={Home} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <mainStack.Screen name="settings" component={Settings} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <mainStack.Screen name="farmLibrary" component={FarmLibrary} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <mainStack.Screen name="map" component={Map} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <mainStack.Screen name="addInspection" component={AddInspection} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <mainStack.Screen name="addGeoLocation" component={AddGeoLocation} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <mainStack.Screen name="addInspectionImages" component={AddInspectionImages} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <mainStack.Screen name="userProfile" component={UserProfile} options={{ headerShown: false, presentation: 'card' }} />
            <mainStack.Screen name="editDetails" component={EditProfileDetails} options={{ headerShown: false, presentation:'modal' }} />
            <mainStack.Screen name="viewInspection" component={ViewInspectionDetails} options={{ headerShown: false, presentation:'modal' }} />
            <mainStack.Screen name="inspectionData"  component={ViewDetailsData}  options={{ headerShown: false, presentation:'modal' }} />






        </mainStack.Navigator>




    );
}

function MyStack() {
    const { isLoggedIn }: any = UseLogIn()
    return (<NavigationContainer>
        {isLoggedIn ? <SelectedInspectionType><SelectedInspectionFarmId><MyTabs /></SelectedInspectionFarmId></SelectedInspectionType> : <IsLoggedOutStack />}
    </NavigationContainer>)

}

export default MyStack;