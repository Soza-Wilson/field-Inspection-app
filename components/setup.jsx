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
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import db from '../util/database';
import user from '../models/user';
import Crop from '../models/crop';

const connectToServer = async() => {
  fetch('https://61e2-129-140-0-5.ngrok-free.app/requests/connection')
    .then(response => response.json())
    .then(jsonData => {
      if (jsonData[0].status == 'connected') {
        getAlldata();
      }
    })
    .catch(error => {
      //   console.log(error);
      console.log(error);
    });
};

// getting all required data
async function getAlldata() {
  const host = 'https://61e2-129-140-0-5.ngrok-free.app/requests';
 
  await createUsers(host);
  await createCrop(host);
  console.log("await worked ")
}

async function createUsers (url) {
  //   const User = new user(
  //    "0023","wilson","soza@outlook.com","00000"
  //   );
  // User.registerUser();

  fetch(url + '/getUsers')
    .then(response => response.json())
    .then(jsonData => {
      jsonData.forEach(element => {
        const User = new user(
          element.id,
          element.fullname,
          element.email,
          element.password,
        );
        User.registerUser();
      });
    })
    .catch(error => {
      //   console.log(error);
      console.log(error);
    });
};

async function createCrop (url) {
  fetch(url + '/getCrops')
    .then(response => response.json())
    .then(jsonData => {
      jsonData.forEach(element => {
        const crop = new Crop(element.crop_id, element.crop);
        crop.createCrop()
        
      });
    })
    .catch(error => {
      //   console.log(error);
      console.log(error);
    });
};

const DeviceSetup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <Text style={styles.text}>Connect to server</Text>
      </View>

      <View>
        <TextInput
          placeholderTextColor="rgb(100,101,118)"
          style={styles.input}
          placeholder="Host name "
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
            style={styles.sign_in_icon}
            name="wifi-sync"
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
