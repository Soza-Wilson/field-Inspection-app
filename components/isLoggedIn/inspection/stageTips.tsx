import { View, Text,TouchableHighlight } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'
import Mate from 'react-native-vector-icons/Entypo'


type StageTippsProps ={
    stage:number,
    heading:string,
    description:string
    inspectionType:string
    navigation:any
    previousPage:string
}

const StageTips = ({stage,heading,description,inspectionType,navigation,previousPage} :StageTippsProps) => {
  return (
    <View style={styles.container}>

<View style={styles.headerWrapper}>
  
  <TouchableHighlight onPress={()=>{
    navigation.navigate(previousPage)

  }}>
  <View style={styles.backButton}>
                    <Mate
                        name='chevron-left'
                        size={15}
                        color={'black'}
                    />
                </View>
                </TouchableHighlight><View><Text style={styles.typeText}>{inspectionType} stage</Text></View></View>    
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
    typeText:{

      fontFamily:"Poppins-SemiBold",
      fontSize:13,
      textAlign:'center',
      color:'grey',
     
     borderColor:'black',
      borderWidth:0.6,
      borderRadius:5,
      padding:5
      
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