import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Mate from 'react-native-vector-icons/Entypo'
import { TextInput } from 'react-native'
import BackHeader from './backHeader'
import StageTips from './stageTips'
import { useInspectionType } from '../../../context/inspectionType'
import InspectionDetailsForm from './inspectionDetailsForm'
import VergitativeForm from './inspectionForms/vergitativeForm'
import { Formik } from 'formik'
import FloweringForm from './inspectionForms/floweringForm'
import PreHarvest from './inspectionForms/preHarvestForm'

type StageTippsProps = {

}




const AddInspection = ({ navigation }: any) => {

    const { inspectionType } = useInspectionType()


    if (inspectionType === 0) {
        return (
            <VergitativeForm navigation={navigation} inspectionType={'vergitative'} />
        )
    }
    else if (inspectionType === 1) {
        return (
            <FloweringForm navigation={navigation} inspectionType={'flowering'}/>
    )

    }
    else{

        return (
            <PreHarvest navigation={navigation} inspectionType={'pre_harvest'}/>
    )
    }



}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
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

    textWrapper: {
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        padding: 10,


    },


    labelText: {

        fontFamily: "Poppins-Medium",
        fontSize: 11,
        textAlign: "left",
        color: "black"
    },

    userInput: {

        backgroundColor: 'rgb(247,247,249)',
        borderRadius: 5,
        borderColor: "grey",



    },
    remarks: {

        height: 100, textAlignVertical: 'top',
        backgroundColor: 'rgb(247,247,249)',
        borderRadius: 5,
        borderColor: "grey",




    }








})


export default AddInspection