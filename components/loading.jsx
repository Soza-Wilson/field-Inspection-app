import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { StatusBar } from 'react';
import React from 'react';





function Loading() {

 

  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <View style={styles.icon_home}>
          <Icon
            style={styles.home_icon}
            name="map-o"
            size={40}
            color="#FFFFFF"
          />
        </View>
        <View style={styles.logoWriper}>
          <Text style={styles.header}>Field</Text>

          <Text style={styles.text}>Inspection</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2DA15F',
  },
  headerWripper: {
    flexDirection: 'row',
    paddingTop: 240,
    paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: 'rgb(108,178,103)',
    alignItems: 'center',
    alignContent: 'center',
  },

  icon_home: {
    marginLeft: 165,
    marginTop: 300,
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    color: '#FFFFFF',
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    marginLeft: 5,
  },
  logoWriper: {
    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: 120,
    marginTop: 20,
  },
});
export default Loading;
