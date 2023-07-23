import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/isLoggedIn/home';
import Loading from '../components/isLoggedOut/loading';
import Splash from '../components/splash';
import SignIn from '../components/isLoggedOut/signIn';
import Loader from '../components/loaders/loader';
import DeviceSetup from '../components/isLoggedOut/setup';
import { NavigationContainer } from '@react-navigation/native';
import logInProvider from '../context/logInProvider';
const Stack = createStackNavigator();
function MyStack() {
    return (
        
        <NavigationContainer>

            <Stack.Navigator initialRouteName="loading">
                <Stack.Screen name="home" component={Home} options={{headerShown:false,presentation: 'transparentModal'}}/>
                <Stack.Screen name="loading" component={Loading} options={{headerShown:false,presentation: 'transparentModal'}}/>  
                <Stack.Screen name="splash" component={Splash} options={{headerShown:false,presentation: 'transparentModal'}}/>
                <Stack.Screen name="signin" component={SignIn} options={{headerShown:false,presentation: 'transparentModal'}}/>
                <Stack.Screen name="setup" component={DeviceSetup} options={{headerShown:false,presentation: 'transparentModal'}}/>
                <Stack.Screen name="loader" component={Loader} options={{headerShown:false,presentation: 'transparentModal'}}/>
                
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default MyStack;