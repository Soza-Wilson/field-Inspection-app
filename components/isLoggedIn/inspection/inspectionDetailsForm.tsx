import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useInspectionType } from '../../../context/inspectionType'
import { ScrollView } from 'react-native-gesture-handler'
import { Formik } from 'formik'
import { object, string, number } from 'yup';
import { TouchableHighlight } from 'react-native'
import FloweringForm from './inspectionForms/floweringForm'
import VergitativeForm from './inspectionForms/vergitativeForm'
import PreHarvest from './inspectionForms/preHarvestForm'


//  we sprit the form into three section , each for defferent inspection types 


// Vergitative data collection form
const InspectionDetailsForm = ({ navigation }: any) => {

    // pre-harvest data collection form

    const { inspectionType } = useInspectionType()
    return (

        <View style={styles.formContainer}>

            {inspectionType === 0 ? <VergitativeForm /> : inspectionType === 1 ? <FloweringForm /> : <PreHarvest />}


        </View>

    )


}
const styles = StyleSheet.create({

    formContainer: {
        borderWidth: 0.3, borderColor: "grey", margin: 5, borderRadius: 5, height: 500

    },

})

export default InspectionDetailsForm