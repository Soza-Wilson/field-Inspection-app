import React from 'react';
import {View, Text, StyleSheet, Colors, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

function BottomNavigation() {
  return (
    <View style={styles.iconWripper}>
      <View style={styles.icon}>
        <IonIcons
          style={styles.category_icon}
          name="home-outline"
          size={25}
          color="black"
        />
      </View>

      <View style={styles.icon}>
        <IonIcons
          style={styles.category_icon}
          name="list-circle-outline"
          size={25}
          color="black"
        />
      </View>

      <View style={styles.icon}>
        <IonIcons
          style={styles.category_icon}
          name="search-circle-outline"
          size={25}
          color="black"
        />
      </View>

      <View style={styles.icon}>
        <IonIcons
          style={styles.category_icon}
          name="settings-outline"
          size={25}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category_icon: {
    paddingBottom: 5,
  },

  iconWripper: {
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  icon: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    alignItems: 'center',
    marginTop: 15,
    margin: 15,
    paddingHorizontal: 12,
  },
});

export default BottomNavigation;
