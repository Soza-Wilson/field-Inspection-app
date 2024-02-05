import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Loader from '../loaders/loader';
import CheckLoader from '../loaders/check';
import ApiHandler from '../../models/api';
import { object, string } from 'yup';



type DeviceSetupProps = {
  url: string;
  navigation: any;
  host: string;
  loderObject: object
}

const DeviceSetup = ({ navigation }: { navigation: any }) => {
  const host = 'https://c546-137-115-0-33.ngrok-free.app/requests';
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [loaderData, setLoaderData] = useState("");
  const [isConnected, setIsConnection] = useState()
  const [apiData, setApiData]: any = useState({ 'userName': '', 'key': 'key' })
  const apiHandler = new ApiHandler();
  const [userName,setUserName] : any = useState(null)
  const [key,setKey]:any = useState(null)


  const validationSchema = object().shape({
    // Define your form fields and their validation rules here
    // For example:

    username: string().required('Host user name is required'),
    key: string().required('key is required'),
    // Add more fields and their validations as needed
  });

  useEffect(() => {
    const timer = setTimeout(async () => {
      getApiData();


    }, 0);
    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);


  const closeLoader = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }

  const closeCheck = () => {
    setTimeout(() => {
      setIsDone(false);
    }, 2000);



  }

  /*
  Sending a fetch request to the STTS API 
  if connected getting required table data and inserting into the SQlite database
  */
  const connectToServer = async () => {
    setIsLoading(true);
    setLoaderData("connecting....")

    const isConnected = await apiHandler.checkConnection();
    if (isConnected) {
      apiAuthenticate()
    } else {
      setIsLoading(false)
      Alert.alert("failed to connect to server")
    
    }

    // isLoading will open up the loader 
  }
  const getApiData = async () => {
    const apiData: object | boolean |any = await apiHandler.getApiRegisteredData()
    setApiData(apiData);
    setUserName(apiData.userName)
    setKey(apiData.key)
  }


  const apiAuthenticate = async () => {
    setLoaderData("Authenticating...")
    const isAuthenticated = await apiHandler.apiSignIn(userName,key)
  
    if(!isAuthenticated){
      Alert.alert("Error during API Authentication")
      setIsLoading(false);
    }
    else{getDeviceData()}
  }
  const getDeviceData = async ()=>{
    setLoaderData("Fetching data ...")
    await apiHandler.getUsers()
    await apiHandler.getCrops()
    await apiHandler.getVarieties()
    await apiHandler.getGrowers()
    await apiHandler.getFarms()
    
    setIsDone(true)
    setIsLoading(false)
    closeCheck()
   
    
    
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
     
      <View style={styles.info_container}>
        <Text style={styles.text}>Connect to server</Text>
      </View>


      {/* 
     Calling the custom loader when isLoading = true */}
      {isLoading ? (
        <Loader status={loaderData} />
      ) : (<></>

      )}
      {isDone ? (
        <CheckLoader />
      ) : (<></>

      )}



      <View>

        <View>
          <TextInput
            placeholderTextColor="rgb(100,101,118)"
            style={styles.input}
            placeholder="Host name "
            onChangeText={newText => setUserName(newText)}
            defaultValue={apiData === null ? "" : apiData.userName}
            keyboardType="default"
            
          />

        </View>

        <View>
          <TextInput
            placeholderTextColor="rgb(100,101,118)"
            style={styles.input}
            placeholder=" Access key "
            keyboardType="default"
            secureTextEntry={true}
            passwordRules={null}
            onChangeText={newText => setKey(newText)}
            defaultValue={apiData === null ? "" : apiData.key}

          // value={apiData === null ? "" : apiData.key}


          />


        </View>

        <TouchableHighlight
          activeOpacity={0.9}
          underlayColor=""
          onPress={() => {connectToServer()}}>
          <View style={styles.signInButton}>
            <Text style={styles.connectButtonText}>Connect</Text>


          </View>
        </TouchableHighlight>



      </View>



      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor=""
        onPress={() => navigation.navigate('signin')}>
        <View style={styles.configureButton}>
          <Text style={styles.connectButtonText}>Back</Text>
        </View>
      </TouchableHighlight>


    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'rgb(247,247,249)',
  },
  info_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 240,
    paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#2DA15F',
    alignItems: 'center',
    alignContent: 'center',
  },

  header: {
    marginTop: 5,

    alignItems: 'center',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    textAlign: 'center',
    alignContent: 'center',
  },

  validationText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#FF0000',
    marginLeft: 20

  },

  input: {
    color: 'black',
    borderBottomWidth: 3,
    borderColor: '#2DA15F',
    marginTop: 30,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,

    marginLeft: 20,
    marginRight: 20,
  },
  signInButton: {
    marginTop: 50,
    backgroundColor: '#2DA15F',
    borderRadius: 15,
    alignItems: 'center',
    padding: 9,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    textAlign: 'center',
  },

  configureButton: {
    marginTop: 35,
    backgroundColor: '#2DA15F',
    borderRadius: 15,
    alignItems: 'center',
    padding: 9,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  connectButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 11,
    color: '#FFFFFF',
    marginRight: 5,
  },

  splitButtons: {
    fontFamily: 'Poppins-Bold',
    fontSize: 11,
    color: 'Black',
  },
});
export default DeviceSetup;
