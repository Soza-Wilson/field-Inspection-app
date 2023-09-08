import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import Mate from 'react-native-vector-icons/Entypo'


type StageTippsProps = {
  stage: number,
  heading: string,
  description: string
  inspectionType: string
  navigation: any
  previousPage: string
}

const StageTips = ({ stage, heading, description, inspectionType, navigation, previousPage }: StageTippsProps) => {
  return (
    <View style={styles.container}>

      <View style={styles.headerWrapper}>

        <TouchableHighlight 
        activeOpacity={2}
        underlayColor="green"
         style={styles.backButton}  onPress={() => {
          navigation.navigate(previousPage)

        }}>
        
            <Mate
              name='chevron-left'
              size={20}
              color={'white'}
            />
         
        </TouchableHighlight >
        
        <View><Text style={styles.typeText}>{inspectionType} stage</Text></View></View>
      <View style={{ padding: 20,backgroundColor:"white",borderTopLeftRadius:30,borderTopRightRadius:30 }}>

        <Text style={styles.stages}>{stage}/3</Text>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.description}>{description} </Text>

      </View>



    </View>
  )
}


const styles = StyleSheet.create({
  container: {

    backgroundColor: '#2DA15F',
    flexDirection: 'column',
    marginBottom: 10,

  },
  typeText: {

    fontFamily: "Poppins-SemiBold",
    fontSize: 11,
    textAlign: 'center',
    color: 'white',
   margin:10

    
  },

  headerWrapper: {
    padding: 20,

    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#2DA15F'

  },
  backButton: {

    padding: 10,
    borderRadius: 10,

    backgroundColor: "#2DA15F",



  },
  heading: {

    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#2DA15F",


  },


  stages: {

    fontFamily: "Poppins-SemiBold",
    color: "black",
    fontSize: 12, textAlign: "center"




  },


  description: {

    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
    fontSize: 10


  }





})



export default StageTips