import { View, Text, Image, Alert, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomNavigator from '../../navigation/custom/bottomNavigator'
import { StyleSheet } from 'react-native'
import Mate from 'react-native-vector-icons/Entypo'
import Evil from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Material from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableHighlight } from 'react-native'
import { UseLogIn } from '../../../context/logInProvider'
import RNFetchBlob from 'rn-fetch-blob'
import Util from '../../../models/Util'
import { string } from 'yup'
import IOS from 'react-native-vector-icons/Ionicons';

const Settings = ({ navigation }: any) => {

  const [userName, setUserName] :any = useState()
  const [userProfilePicture, setUserProfilePicture] = useState('')
  const { setIsLoggedIn }: any = UseLogIn()
  const cacheDir = RNFetchBlob.fs.dirs.CacheDir
  const util = new Util()

  useEffect(() => {
    const timer = setTimeout(() => {
      getUserData()
    }, 0);
    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);




  const getUserData = async () => {

    try {
        const value: string | null = await AsyncStorage.getItem('user-data');

        if (value) {
            const parsedData: any = JSON.parse(value);
            const name :string = util.setCapitalLatter(parsedData.fullName)
            setUserName(name)
           
            const date = Date

           


            if (parsedData.profilePicture == null) {
                setUserProfilePicture('')

            } else {
                setUserProfilePicture('file://' + cacheDir + '/' + parsedData.profilePicture) 
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}



  const confirmSignOut = () => {

    Alert.alert(
      'Sign Out ',
      'are you sure ?',
      [

        {
          text: "YES",
          onPress: () => { handleSignOut() }
        }, {
          text: "NO",
          onPress: () => { console.log("no") }
        }
      ]

    )

  }


 const handleSignOut = async () => {


    //  Delete all user tockens from asyncStorage 

    try {
      await AsyncStorage.removeItem('user-data')
    } catch (error) {
      console.log(error)
    }



    //  Change isLoggedIn in context to false 
    setIsLoggedIn(false)


  }

  return (
    <View style={styles.container}>
     
      <View>
        <View style={styles.clipBoard}>


        </View>

        <Image
          source={userProfilePicture !== '' ?{uri : userProfilePicture }: require('../../../assets/images/user.jpg')}
          style={styles.profile_image}></Image>



        <View style={styles.userNameContainer}><Text style={styles.userName}>{userName}</Text></View>

        <View style={styles.optionsContainer}>
          <TouchableHighlight activeOpacity={0.8}
            underlayColor="" onPress={() => navigation.navigate('userProfile')}>
            <View style={styles.userProfile}>
              <View style={{ flexDirection: 'row' }}>

                <Evil
                  name='user'
                  size={30}
                  color={'black'}
                  style={{ margin: 2 }}
                />

                <Text style={{ paddingTop: 12, fontFamily: 'Poppins-Medium', fontSize: 10,color:'black'}}>Profile</Text>


              </View>



              <Mate
                name='chevron-right'
                size={25}
                color={'grey'}
                style={{ margin: 7 }}
              />

            </View>


          </TouchableHighlight>


          

          <TouchableHighlight activeOpacity={0.8}
            underlayColor="" onPress={() => navigation.navigate('syncData')}>

            <View style={styles.userProfile}>
              <View style={{ flexDirection: 'row' }}>

                <IOS

                  name="cloud-upload-outline"
                  size={20}
                  color="black"
                  style={{ margin: 7 }}
                />



                <Text style={{ paddingTop: 12, fontFamily: 'Poppins-Medium', fontSize: 10,color:'black'}}>Sync Data</Text>


              </View>



              <Mate
                name='chevron-right'
                size={25}
                color={'grey'}
                style={{ margin: 7 }}
              />

            </View>


            


          </TouchableHighlight>

          <TouchableHighlight activeOpacity={0.8}
            underlayColor="" onPress={() => confirmSignOut()}>

            <View style={styles.userProfile}>
              <View style={{ flexDirection: 'row' }}>

                <IOS

                  name="exit-outline"
                  size={20}
                  color="black"
                  
                  style={{ margin: 7 }}
                />



                <Text style={{ paddingTop: 12, fontFamily: 'Poppins-Medium', fontSize: 10,color:'black' }}>Sign Out</Text>


              </View>




            </View>


          </TouchableHighlight>


        </View>


      </View>




      <BottomNavigator navigation={navigation} page={"settings"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: "column", justifyContent: 'space-between'

  },




  clipBoard: {

    padding: 60,
    backgroundColor: '#2DA15F',
    borderBottomColor: 'white',
    borderBottomWidth: 5,


  },


  userNameContainer: {
    marginTop: 10,


  },

  userName: {

    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    fontSize: 12,
    marginRight: 45



  },
  profile_image: {
    position: 'absolute',
    top: 80,
    right: 0,
    left: 5,
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    padding: 50,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2

  },

  profileWrapper: {
    flexDirection: 'row',
  },
  optionsContainer: {
    marginTop: 50,
    padding: 5,
   
    margin: 2,
    
  },

  userProfile: {

    flexDirection: 'row',
   
    margin: 5,
    padding: 15,
    
    justifyContent: 'space-between',
    borderBottomColor:"black",
    borderBottomWidth: 1.5,
    
    
    




  }

})

export default Settings