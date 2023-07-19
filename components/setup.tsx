import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import db from '../util/database';
import user from '../models/user';
import Crop from '../models/crop';
import Loader from './loaders/loader';
import CheckLoader from './loaders/check';

type DeviceSetupProps = {
  url: string;
  navigation: any;
  host: string;

}


const DeviceSetup = ({ navigation }: { navigation: any }) => {
  const host = 'https://0a68-137-196-0-32.ngrok-free.app/requests';
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [data, setData] = useState("");



  const closeLoader = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
  const connectToServer = () => {
    // isLoading will open up the loader 
    setIsLoading(true);
    setData("Connecting...");
    fetch(host + '/connection')
      .then(response => response.json())
      .then(jsonData => {
        setData("Connected");
        closeLoader()
        if (jsonData[0].status == 'connected') {
          createUsers(host);
        }
      })
      .catch(error => {
        Alert.alert("failed to connect to server")
        console.log(error);
        closeLoader();
      });
  };



  // getting all required data

  function createUsers(url: string) {
    setIsLoading(true);
    setData("Fetching data...");
    fetch(url + '/getUsers')
      .then(response => response.json())
      .then(jsonData => {
        let counter = 0;
        try {
          jsonData.forEach((element: any) => {
            const User = new user(
              element.id,
              element.fullname,
              element.email,
              element.password,
            );
            // checking if all entries have been passed to the create user class if so move to the next function( insert crop data)
            counter++;
            User.registerUser();
            if (counter == jsonData.length) {
              closeLoader();
              setIsDone(true)
              closeCheck()

            } else {
            }
          });

        } catch (error) {

        }

      })
      .catch(error => {
        //   console.log(error);
        console.log(error);
      });
  }

  function createCrop(url: string) {
    let counter = 0;
    fetch(url + '/getCrops')
      .then(response => response.json())
      .then(jsonData => {

        try {
          jsonData.forEach((element: any) => {
            const crop = new Crop(element.crop_id, element.crop);
            crop.createCrop();
            // checking if all entries have been passed to the create crop class if so move to the next function( insert variety data)
            counter++;
            if (counter == jsonData.length) {
              createCrop(url);
            } else {
              console.log('error');
            }
          });

        } catch (error) {

        }

      })
      .catch(error => {
        //   console.log(error);
        console.log(error);
      });
  }


  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <Text style={styles.text}>Connect to server</Text>
      </View>


      {/* 
     Calling the custom loader when isLoading = true */}
      {isLoading ? (
        <Loader status={data} />
      ) : (<></>

      )}
      {isDone ? (
        <CheckLoader />
      ) : (<></>

      )}
      <View>
        <TextInput
          placeholderTextColor="rgb(100,101,118)"
          style={styles.input}
          placeholder="Host name "
          keyboardType="default"
        />
      </View>

      <View>
        <TextInput
          placeholderTextColor="rgb(100,101,118)"
          style={styles.input}
          placeholder=" Access key "
          keyboardType="default"
        />
      </View>

      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor=""
        onPress={() => connectToServer()}>
        <View style={styles.signInButton}>
          <Text style={styles.connectButtonText}>Connect</Text>

          <MaterialIcons

            name="database-sync"
            size={20}
            color="#FFFFFF"
          />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor=""
        onPress={() => navigation.navigate('signin')}>
        <View style={styles.configureButton}>
          <Text style={styles.connectButtonText}>Back</Text>
        </View>
      </TouchableHighlight>
    </View>
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
    borderRadius: 20,
    alignItems: 'center',
    padding: 15,
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
    marginTop: 50,
    backgroundColor: '#2DA15F',
    borderRadius: 20,
    alignItems: 'center',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  connectButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 5,
  },

  splitButtons: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: 'Black',
  },
});
export default DeviceSetup;
