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
import { Dimensions } from 'react-native'


//  we sprit the form into three section , each for defferent inspection types 
type inspectionFormProps={ 

navigation : any 

}

// Vergitative data collection form
const InspectionDetailsForm = (props: inspectionFormProps) => {

    // pre-harvest data collection form

    const { inspectionType } = useInspectionType()
    return (

        <View >

            {inspectionType === 0 ? <VergitativeForm navigation={props.navigation} inspectionType={'vergitative'}/> : inspectionType === 1 ? <FloweringForm navigation={props.navigation} inspectionType={'flowering'}/> : <PreHarvest navigation={props.navigation} inspectionType={'pre_harvest'}/>}


        </View>

    )


}
const styles = StyleSheet.create({

    

})

export default InspectionDetailsForm