import React from 'react';
import BottomNavigation from './navigation/bottom-navigation';
import {View, Text, StyleSheet, Colors, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';

function Home() {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor='rgb(247,247,249)'/>
       <StatusBar color='rgb(247,247,249)'/>
       
      <View style={styles.headerWrapper}>
        <View style={styles.profileWrapper}>
          <Image
            source={require('../assets/images/user.jpg')}
            style={styles.profile_image}></Image>
          <Text style={styles.profileText}>John doe</Text>
        </View>

        <View>
          <Entypo
            style={styles.home_icon}
            name="list"
            size={20}
            color="black"
          />
        </View>
      </View>
      <View style={styles.headerSeparator}></View>

      <View style={styles.align_card}>
        <View style={styles.home_items}>
          <View style={styles.category_icon}>
            <MaterialIcons
              style={styles.category_icon}
              name="location-history"
              size={25}
              color="black"
            />
          </View>

          <Text style={styles.category_text}>New Location </Text>
        </View>

        <View style={styles.home_items}>
          <View style={styles.category_icon}>
            <Entypo
              style={styles.category_icon}
              name="add-to-list"
              size={25}
              color="black"
            />
          </View>

          <Text style={styles.category_text}>Farm Library </Text>
        </View>
      </View>

      <View style={styles.align_card}>
        <View style={styles.home_items}>
          <View style={styles.category_icon}>
            <CommunityIcons
              style={styles.category_icon}
              name="camera-marker-outline"
              size={25}
              color="black"
            />
          </View>

          <Text style={styles.category_text}>Inspected</Text>
        </View>

        <View style={styles.home_items}>
          <View style={styles.category_icon}>
            <CommunityIcons
              style={styles.category_icon}
              name="database-sync-outline"
              size={25}
              color="black"
            />
          </View>
          <Text style={styles.category_text}>Sync Data</Text>
        </View>
      </View>

      <BottomNavigation/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247,247,249)',
  },
  profile_image: {
    width: 55,
    height: 55,

    alignItems: 'center',
    borderRadius: 60,
  },

  profileWrapper: {
    flexDirection: 'row',
  },
  headerWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  profileText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    marginTop: 17,
    marginLeft: 5,
    color: 'black',
  },
  headerSeparator: {
    width: 350,
    backgroundColor: 'red',
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginLeft: 20,
  },

  home_items: {
    backgroundColor: '#FFFFFF',
    width: 160,
    height: 160,
    borderRadius: 10,
    alignSelf: 'center',
  },
  align_card: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },

  category_icon: {
    alignItems: 'center',
    marginTop: 10,
  },
  category_text: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    marginTop: 75,
    color: 'black',
  },
  // info_container: {

  //   paddingBottom: 90,
  //   borderBottomLeftRadius: 40,
  //   borderBottomRightRadius: 40,
  //   backgroundColor: '#2DA15F',

  // },
  // swipe_container: {
  //   borderRadius: 20,
  //   marginTop: 170,
  //   padding: 15,
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginLeft: 20,
  //   marginRight: 20,

  //   backgroundColor: 'rgb(247,247,249)'

  // },

  // swipe_text: {

  //   color: Colors.black,
  //   textAlign: 'center',
  //   marginLeft: 70,
  //   marginRight: 0,

  // },

  // home: {
  //   marginLeft: 100,
  //   backgroundColor: '#2DA15F',
  //   paddingTop: 20,
  //   paddingBottom: 20,
  //   borderRadius: 100,

  // },

  // home_icon: {
  //   marginLeft: 22,
  //   marginRight: 22,

  // },
  // image: {
  //   width: 200,
  //   height: 200,
  //   resizeMode: 'contain',
  // },
  // header: {

  //   marginTop: 10,
  //   alignItems: "center",
  //   color: '#FFFFFF',
  //   fontFamily: 'Poppins-Bold',
  //   fontSize: 24,
  //   textAlign: 'center',

  // },

  // text: {

  //   marginTop: 10,
  //   marginLeft:50,
  //   marginRight:50,
  //   alignItems: "center",
  //   color: '#FFFFFF',
  //   fontFamily: 'Poppins-SemiBold',
  //   fontSize: 10,
  //   textAlign: 'center',

  // }
});

export default Home;
