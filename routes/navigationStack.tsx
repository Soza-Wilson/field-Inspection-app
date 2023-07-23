import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/isLoggedIn/home';
import LandingPage from '../components/landingPage';
import Splash from '../components/splashScreen';
import SignIn from '../components/isLoggedOut/signIn';
import Loader from '../components/loaders/loader';
import DeviceSetup from '../components/isLoggedOut/setup';
import { NavigationContainer } from '@react-navigation/native';
import logInProvider, { UseLogIn } from '../context/logInProvider';
import { useContext, useState } from 'react';




const AuthStack = createStackNavigator();
const mainStack = createStackNavigator()


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

const IsLoggedInStack = () => {


    return (


        <mainStack.Navigator initialRouteName="splash">
            <mainStack.Screen name="home" component={Home} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <mainStack.Screen name="splash" component={Splash} options={{ headerShown: false, presentation: 'transparentModal' }} />
            <mainStack.Screen name="loader" component={Loader} options={{ headerShown: false, presentation: 'transparentModal' }} />
        </mainStack.Navigator>



    )


}
function MyStack() {
    const { isLoggedIn }: any = UseLogIn()
    return (<NavigationContainer>
        {isLoggedIn ? <IsLoggedInStack /> : <IsLoggedOutStack />}
        </NavigationContainer>)

}

export default MyStack;