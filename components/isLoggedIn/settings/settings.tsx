import { View, Text, Image, Alert, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import BottomNavigator from '../../navigation/custom/bottomNavigator'
import { StyleSheet } from 'react-native'
import Mate from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Material from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableHighlight } from 'react-native'
import { UseLogIn } from '../../../context/logInProvider'

const Settings = ({ navigation }: any) => {

  const [userName, setUserName] = useState()
  const [userProfilePicture, setUserProfilePicture] = useState('')
  const { setIsLoggedIn }: any = UseLogIn()

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
        setUserName(parsedData.fullName)
        const date = Date


        if (parsedData.profilePicture == null) {
          setUserProfilePicture('')

        } else {
          setUserProfilePicture(parsedData.profilePicture)
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
      <StatusBar hidden />
      <View>
        <View style={styles.clipBoard}>


        </View>

        <Image
          source={userProfilePicture !== '' ? userProfilePicture : require('../../../assets/images/user.jpg')}
          style={styles.profile_image}></Image>



        <View style={styles.userNameContainer}><Text style={styles.userName}>{userName}</Text></View>

        <View style={styles.optionsContainer}>
          <TouchableHighlight activeOpacity={0.8}
            underlayColor="" onPress={() => navigation.navigate('userProfile')}>
            <View style={styles.userProfile}>
              <View style={{ flexDirection: 'row' }}>

                <Mate
                  name='user'
                  size={20}
                  color={'grey'}
                  style={{ margin: 7 }}
                />

                <Text style={{ paddingTop: 12, fontFamily: 'Poppins-SemiBold', fontSize: 10 }}>Profile</Text>


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

                <Material

                  name="phonelink-setup"
                  size={20}
                  color="grey"
                  style={{ margin: 7 }}
                />



                <Text style={{ paddingTop: 12, fontFamily: 'Poppins-SemiBold', fontSize: 10 }}>Device</Text>


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

                <MaterialIcons

                  name="database-sync"
                  size={20}
                  color="grey"
                  style={{ margin: 7 }}
                />



                <Text style={{ paddingTop: 12, fontFamily: 'Poppins-SemiBold', fontSize: 10 }}>Sync Data</Text>


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

                <Mate

                  name="log-out"
                  size={20}
                  color="grey"
                  style={{ margin: 7 }}
                />



                <Text style={{ paddingTop: 12, fontFamily: 'Poppins-SemiBold', fontSize: 10 }}>Sign Out</Text>


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
    backgroundColor: 'rgb(247,247,249)',
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
    borderTopColor: 'grey',
    borderWidth: 0.2,
    margin: 2,
    borderRadius: 5
  },

  userProfile: {

    flexDirection: 'row',
    backgroundColor: '#ffffff',
    margin: 5,
    padding: 15,
    borderRadius: 5,
    justifyContent: 'space-between',
    elevation: 5




  }

})

export default Settings