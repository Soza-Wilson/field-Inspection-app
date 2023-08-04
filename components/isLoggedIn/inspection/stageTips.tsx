import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import Mate from 'react-native-vector-icons/Entypo'

type StageTippsProps ={
    stage:number,
    heading:string,
    description:string
}

const StageTips = ({stage,heading,description} :StageTippsProps) => {
  return (
    <View style={styles.container}>

<View style={styles.headerWrapper}><View style={styles.backButton}>
                    <Mate
                        name='chevron-left'
                        size={15}
                        color={'black'}
                    />
                </View><View></View></View>    
   <Text style={styles.stages}>{stage}/3</Text>
   <Text style={styles.heading}>{heading}</Text>
   <Text style={styles.description}>{description} </Text>


    </View>
  )
}


const styles = StyleSheet.create({
    container: {
   
      backgroundColor: '#FFFFFF',
      flexDirection:'column',
      marginBottom:10,

    },

    headerWrapper: {
        padding: 20,

        flexDirection: "row",
        justifyContent: "space-between"

    },
    backButton: {

        padding: 10,
        borderRadius: 10,

        backgroundColor: "white",
        elevation: 2,
        borderColor: "grey"

    },
    heading:{

        textAlign:"center",
        fontFamily:"Poppins-Bold",
        fontSize:16,
        color:"#2DA15F",


    },


  stages:{ 

    fontFamily:"Poppins-SemiBold",
    color:"black",
    fontSize:12,textAlign:"center"

    


  },


  description:{

    fontFamily:"Poppins-SemiBold",
    textAlign:"center",
    fontSize:10


  }


  
  
  
    })
  


export default StageTips