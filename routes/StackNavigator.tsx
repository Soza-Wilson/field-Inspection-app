import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';
import Loading from '../components/loading';
import Splash from '../components/splash';
import SignIn from '../components/signIn';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="loading">
                <Stack.Screen name="home" component={Home} options={{headerShown:false}}/>
                <Stack.Screen name="loading" component={Loading} options={{headerShown:false}}/>
                <Stack.Screen name="splash" component={Splash} options={{headerShown:false}}/>
                <Stack.Screen name="signin" component={SignIn} options={{headerShown:false}}/>
                
            </Stack.Navigator>



        </NavigationContainer>

    );
}

export default MyStack;