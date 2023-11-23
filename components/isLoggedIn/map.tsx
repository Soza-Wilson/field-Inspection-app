import { View, Text } from 'react-native'
import React from 'react'
import BottomNavigator from '../navigation/custom/bottomNavigator'
import { StyleSheet } from 'react-native'
import RNFS from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import RNFetchBlob from "rn-fetch-blob";
import Mate from 'react-native-vector-icons/Entypo'


const Map = ({ navigation }: any) => {

  const createNewFolder = async () => {

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

      <View style={styles.textContainer}>
        <Text style={styles.warningText}>Unavailable</Text>

        <Mate
          name='warning'
          size={13}
          color={'white'}
          style={{ margin: 13, backgroundColor: '#2DA15F' }}
        />
      </View>

      <BottomNavigator navigation={navigation} page="map" />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247,247,249)',
    flexDirection: "column",
    justifyContent: "space-between"
  },
  profile_image: {
    width: 55,
    height: 55,
    alignItems: 'center',
    borderRadius: 60,


  },
  warningText: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    borderRadius: 20


  },

  textContainer: {
    marginTop: 300,
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    backgroundColor: '#2DA15F',

  }

})

export default Map