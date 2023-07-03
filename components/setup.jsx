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

const connectToServer = () => {
  fetch('http://192.168.56.1:8080/sts/android/get_user.php')
    .then(response => response.json())
    .then(data => {
      // fullname = data.fullname;
      console.log(data);
    })
    .catch(error => {
      //   console.log(error);
      Alert.alert(error.toString());
    });
};

// //    fetch("https://www.boredapi.com/api/activity")
// .then((response) => response.json())
// .then((data) => {
//   fullname = data.fullname;
//   console.log(fullname);
// })
// .catch((error) => {
//   console.log(error);
// });

const DeviceSetup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <Text style={styles.text}>Connect to local server</Text>
      </View>

      <View>
        <TextInput
          placeholderTextColor="rgb(100,101,118)"
          style={styles.input}
          placeholder="IP address"
          keyboardType="numeric"
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholderTextColor="rgb(100,101,118)"
          placeholder="Port"
          keyboardType="numeric"
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
