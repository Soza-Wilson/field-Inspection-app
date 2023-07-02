import { Text, View, StyleSheet, Image, Button, TouchableHighlight, Alert } from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Custom_colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';




const Splash = ({ navigation }) => {
  return (

    <View style={styles.container}>


      <View style={styles.info_container}>

        <Image source={require("../assets/images/map-bro.png")}
          style={styles.home_image}
        ></Image>

        <Text style={styles.header}>
          Field Inspection
        </Text>

        <Text style={styles.text}>

          assess all registered farms,
          streamlining the process and ensuring
          thorough evaluation.
        </Text>


      </View>



      <View style={styles.swipe_container}>

        <Text style={styles.swipe_text}>

          swipe to sign in

        </Text>

        <TouchableHighlight activeOpacity={0.9}
          underlayColor="#DDDDDD"
          onPress={() => navigation.navigate('signin')}>

          <View style={styles.home}>

            <Icon style={styles.home_icon} name="arrow-right" size={15} color="#FFFFFF" />

          </View >
        </TouchableHighlight>



      </View>
    </View>

  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },
  home_image: {

    width: 300, height: 300,
    marginLeft: 40,
    alignItems: "center"

  },
  info_container: {



    paddingBottom: 90,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#2DA15F',


  },
  swipe_container: {
    borderRadius: 20,
    marginTop: 170,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,

    backgroundColor: 'rgb(247,247,249)'


  },

  swipe_text: {

    color: Colors.black,
    textAlign: 'center',
    marginLeft: 70,
    marginRight:100




  },

  home: {
    marginLeft: 0,
    backgroundColor: '#2DA15F',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 100,


  },

  home_icon: {
    marginLeft: 22,
    marginRight: 22,


  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  header: {

    marginTop: 10,
    alignItems: "center",
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    textAlign: 'center',




  },

  text: {

    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    alignItems: "center",
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    textAlign: 'center',




  }
});


export default Splash;
