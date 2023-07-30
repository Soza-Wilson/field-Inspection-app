import { View, Text } from 'react-native'
import React from 'react'
import BottomNavigator from '../navigation/custom/bottomNavigator'
import { StyleSheet } from 'react-native'

const Map = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text>New</Text>
      <BottomNavigator navigation={navigation} page="map"/>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247,247,249)',
    flexDirection:"column",
    justifyContent:"space-between"
  },
  profile_image: {
    width: 55,
    height: 55,

    alignItems: 'center',
    borderRadius: 60,


  }
  
 } )

export default Map