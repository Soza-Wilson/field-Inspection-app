import { View, Text } from 'react-native'
import React from 'react'
import BottomNavigator from '../../navigation/custom/bottomNavigator'
import { StyleSheet } from 'react-native'
import Mate from 'react-native-vector-icons/Entypo'

const Settings = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.clipBoard}>


        </View>
        <View style={styles.profilePicture}>

        </View>
        <View style={styles.userNameContainer}><Text style={styles.userName}>Wilson Soza</Text></View>

        <View style={styles.optionsContainer}>
          <View style={styles.userProfile}>

          <Mate
                        name='user'
                        size={25}
                        color={'black'}
                        style={{margin:10}}
                    />

          <Text>Profile</Text>

          </View>


          <View>


          </View>

          <View>


          </View>


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
  profilePicture: {

    position: 'absolute',
    top: 80,
    right: 0,
    left:5,
    width:100,
    backgroundColor: "#fff",
    padding: 50,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2


  },

userNameContainer:{
marginTop:10,    


  },

  userName:{

    fontFamily:'Poppins-SemiBold',
    textAlign:'center',
    marginRight:45
    


  },
  optionsContainer:{
    marginTop:50,
    borderTopColor:'grey',
    borderTopWidth:0.4
  },

  userProfile:{

    flexDirection:'row',
    backgroundColor:'grey',
    margin:2



  }

})

export default Settings