import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'

import { object, string, number } from 'yup';
import { Formik } from 'formik';
import { styles } from './inspectionFromStyle/formStyle';
import { TextInput } from 'react-native';
import Inspection from '../../../../models/inspection';
import idGenerator from './idGenerator/idGenerator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetUserData } from '../../../../util/ansyncDataTockens';
import SelectedInspectionFarmId from '../../../../context/farmDetailsProvider';
import { useInspectionfarmId } from '../../../../context/farmDetailsProvider';
import Farm from '../../../../models/farm';
import StageTips from '../stageTips';
import { Dimensions } from 'react-native';
import { useInspectionType } from '../../../../context/inspectionType';


interface vergitativeInspectionProps {

    isolationDistance: string,
    plantingPattern: string,
    offTypePercentage: number,
    pestDiseaseIncidence: number,
    defectivePlants: number,
    inspectionRemarks: number

}


type formProps = {
    navigation: any;
    inspectionType: string;

};


const VergitativeForm = (props: formProps) => {

    
    const { farmId } = useInspectionfarmId()
    useEffect(() => {
        const timer = setTimeout(() => {
            getUserData()
            getInspectionId()
        }, 0);
        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []);
    const [userId, setUserId]: any = useState()
    const [inspectionId, setInspectioId] = useState('')
    const{setInspectionType} = useInspectionType()

    const getUserData = async () => {
        try {
            const value: string | null = await AsyncStorage.getItem('user-data');

            if (value) {
                const parsedData: any = JSON.parse(value);
                setUserId(parsedData.id)


            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const getInspectionId = () => {
        const inspectioId = idGenerator()
        setInspectioId(inspectioId)
    }







    const addVergitativeInspectionDetails = async (inspectionData: any) => {


        //  First we will set the context inspection type  
        //  Inserting temp data into aysnc storage vergitative inpection tocken   
        //  We are not directry inserting data into the database incase the user goes back without completing the registration process 

        // props.navigation.navigate('addGeoLocation');

        try {
            //setInspectionType('vergitative')
            const jsonValue = JSON.stringify(inspectionData);
            await AsyncStorage.setItem('vergitative-data', jsonValue);
            props.navigation.navigate('addGeoLocation');
            console.log("yeah")


        } catch (e) {
            console.log(e)
        }


    }
    //  vergitative stage form schema 

    const validationSchema = object().shape({
        // Define your form fields and their validation rules here
        // For example:
        isolationDistance: string().required('Isolation details are required'),
        plantingPattern: string().required('Planting pattern details are required'),
        offTypePercentage: number().required('Off-type % Percentange is required').lessThan(100),
        pestDiseaseIncidence: number().required('Pest disease incidence is required').lessThan(100),
        defectivePlants: number().required('Defective plants percentage is required').lessThan(100),
        inspectionRemarks: string().required('Enter inspection remarks'),
        // Add more fields and their validations as needed


    });


    return (
        <View style={{
            flex: 1,
            backgroundColor: "white", justifyContent: 'space-between'
        }}>
            <StageTips stage={1} heading='Inspection Details' description='Verify inspection requirements and add details' inspectionType={props.inspectionType === 'vergitative'? 'Vergitative' : props.inspectionType === 'flowering' ? 'Flowering' : 'Pre Harvest'} navigation={props.navigation} previousPage='farmLibrary' />

            <Formik
                initialValues={{ isolationDistance: '', plantingPattern: '', offTypePercentage: '', pestDiseaseIncidence: '', defectivePlants: '', inspectionRemarks: '' }}
                validationSchema={validationSchema}
                onSubmit={(values): any => { addVergitativeInspectionDetails(values) }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (


                 

                        <ScrollView showsVerticalScrollIndicator={false}>

                            <View >

                                <View style={styles.textWrapper}>

                                    <Text style={styles.labelText}> Isolation Distance  *</Text>
                                    <TextInput style={styles.userInput}
                                        placeholder='Enter Isolation Distance'
                                        placeholderTextColor={"grey"}
                                        keyboardType="default"
                                        onChangeText={handleChange('isolationDistance')}
                                        value={values.isolationDistance}
                                    />
                                    {errors.isolationDistance && <Text style={styles.validationText}>{errors.isolationDistance}</Text>}
                                </View>

                                <View style={styles.textWrapper}>

                                    <Text style={styles.labelText}> Planting pattern *</Text>
                                    <TextInput style={styles.userInput}
                                        placeholder='Enter planting Pattern'
                                        placeholderTextColor={"grey"}
                                        keyboardType='default'
                                        onChangeText={handleChange('plantingPattern')}
                                        value={values.plantingPattern}
                                    />
                                    {errors.plantingPattern && <Text style={styles.validationText}>{errors.plantingPattern}</Text>}
                                </View>


                                <View style={styles.textWrapper}>

                                    <Text style={styles.labelText}> Off Type % *</Text>
                                    <TextInput style={styles.userInput}
                                        placeholder='Enter off-type percentage '
                                        placeholderTextColor={"grey"}
                                        keyboardType='numeric'
                                        onChangeText={handleChange('offTypePercentage')}
                                        onBlur={handleBlur('offTypePercentage')}
                                        value={values.offTypePercentage}
                                    />
                                    {errors.offTypePercentage && <Text style={styles.validationText}>{errors.offTypePercentage}</Text>}


                                </View>


                                <View style={styles.textWrapper}>

                                    <Text style={styles.labelText}> Pest Disease Incidence % *</Text>
                                    <TextInput style={styles.userInput}
                                        placeholder='Enter disease incidence percentage '
                                        placeholderTextColor={"grey"}
                                        keyboardType='numeric'
                                        onChangeText={handleChange('pestDiseaseIncidence')}
                                        onBlur={handleBlur('pestDiseaseIncidence')}
                                        value={values.pestDiseaseIncidence}
                                    />
                                    {errors.pestDiseaseIncidence && <Text style={styles.validationText}>{errors.pestDiseaseIncidence}</Text>}

                                </View>

                                <View style={styles.textWrapper}>

                                    <Text style={styles.labelText}> Defective Plants % *</Text>
                                    <TextInput style={styles.userInput}
                                        placeholder='Enter Defective Plants percetange '
                                        placeholderTextColor={"grey"}
                                        keyboardType='numeric'

                                        onChangeText={handleChange('defectivePlants')}

                                        value={values.defectivePlants}
                                    />
                                    {errors.defectivePlants && <Text style={styles.validationText}>{errors.defectivePlants}</Text>}
                                </View>


                                <View style={styles.textWrapper}>

                                    <Text style={styles.labelText}> Remarks *</Text>
                                    <TextInput style={styles.remarks}
                                        multiline={true}
                                        numberOfLines={4}
                                        placeholder='Inspection Remarks'
                                        placeholderTextColor={"grey"}
                                        onChangeText={handleChange('inspectionRemarks')}

                                        value={values.inspectionRemarks}
                                    />
                                    {errors.inspectionRemarks && <Text style={styles.validationText}>{errors.inspectionRemarks}</Text>}

                                </View>

                                <TouchableHighlight activeOpacity={0.9}
                                    underlayColor="" onPress={()=>handleSubmit()}

                                >

                                    <View style={styles.saveButton}>

                                        <Text style={styles.saveText} > Next</Text>

                                    </View>


                                </TouchableHighlight>



                            </View>





                        </ScrollView>

                 


                )}

            </Formik>
           
        </View>



    )

}



export default VergitativeForm