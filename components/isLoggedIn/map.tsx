import { View, Text } from 'react-native'
import React from 'react'
import BottomNavigator from '../navigation/custom/bottomNavigator'
import { StyleSheet } from 'react-native'
import RNFS from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import RNFetchBlob from "rn-fetch-blob";


const Map = ({navigation}:any) => {

 const createNewFolder = async()=>{

  // const folderName = 'NewFolder'; // Replace with your desired folder name
  // const folderPath = RNFS.ExternalDirectoryPath + `/${folderName}`; 


  // try {
  //   await RNFS.mkdir(folderPath);
  //   console.log(`Folder '${folderName}' created at: ${folderPath}`);
  // } catch (error) {
  //   console.error(`Error creating folder: ${error}`);
  // }

 }

  return (
    <View style={styles.container}>
      
       <TouchableHighlight  onPress={()=>{createNewFolder()}}>
       <Text>New</Text>
        </TouchableHighlight>        

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