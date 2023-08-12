import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Mate from 'react-native-vector-icons/Entypo'
import { TextInput } from 'react-native'
import BackHeader from './backHeader'
import StageTips from './stageTips'
import { useInspectionType } from '../../../context/inspectionType'
import InspectionDetailsForm from './inspectionDetailsForm'

import { Formik } from 'formik'

type StageTippsProps={

}




const AddInspection = ({navigation}:any) => {

    const {inspectionType}= useInspectionType()


    return (
        <View style={styles.mainContainer}>
            
               

               
                <View >
                   
                    <StageTips stage={1} heading='Inspection Details' description='Verify inspection requirements and add details' inspectionType={inspectionType===0 ? 'Vergitative' : inspectionType===1 ? 'Flowering' : 'Pre Harvest'}  navigation={navigation} 
            previousPage='viewInspection'/>

                    <InspectionDetailsForm/>
                 
       

            </View>

           
          
           <TouchableHighlight activeOpacity={0.9}
              underlayColor="" onPress={()=>{navigation.navigate('addGeoLocation')}}>

           <View style={styles.saveButton}>

<Text style={styles.saveText} > Next</Text>

</View>


           </TouchableHighlight>


            
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent:"space-between",
      
        backgroundColor: "white"

    },

    saveButton: {

        padding: 25,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#2DA15F",

    },
    saveText: {

        textAlign: "center",
        fontFamily: "Poppins-SemiBold",
        fontSize: 12,
        color: "#FFFFFF"




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
    titleWrapper: {


        flexDirection: "column",
        padding: 20,

    },
    heading: {

        fontFamily: "Poppins-Medium",
        color: "black",
        fontSize: 15,
    },
    title: {

        fontFamily: "Poppins-Medium",
        color: "grey",
        fontSize: 13,


    },
    
    textWrapper:{
     flexDirection:"column",
     justifyContent:"center",
     alignContent:"center",
     padding:10,
    

    },

    
    labelText:{

        fontFamily:"Poppins-Medium",
        fontSize:11,
        textAlign:"left",
        color:"black"
    },

    userInput:{

        backgroundColor:'rgb(247,247,249)',
        borderRadius:5,
        borderColor:"grey",
        
        

    },
    remarks:{

        height:100, textAlignVertical: 'top',
        backgroundColor:'rgb(247,247,249)',
        borderRadius:5,
        borderColor:"grey",
        



    }
    
    






})


export default AddInspection