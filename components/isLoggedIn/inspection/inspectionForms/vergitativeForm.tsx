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
  };


const VergitativeForm = (props:formProps) => {

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







    const addvergitativeInspectionDetails = async(inspectionData: any) => {

        

        //  Inserting temp data into aysnc storage vergitative inpection tocken   
        //  We are not directiry inserting data into the datadase incase the user goes back without completing the registration process 
        
            try {
              const jsonValue = JSON.stringify(inspectionData);
              await AsyncStorage.setItem('vergitative-data', jsonValue);
              props.navigation.navigate('addGeoLocation');
              
              
            } catch (e) {
              console.log(e)
            }

        // adding data to the inspection modal
        // const inspection = new Inspection(inspectionId, userId, farmId, Date.now(), Date.now(), 'vergitative',
        //     inspectionData.isolationDistance, inspectionData.plantingPattern, inspectionData.offTypePercentage,
        //     inspectionData.pestDiseaseIncidence, inspectionData.defectivePlants, 0, 0, 0, 0, 0, inspectionData.remarks)
        // const insertOperation = inspection.addVergitativeInspection()

        //  console.log(await insertOperation)



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


        <Formik
            initialValues={{ isolationDistance: '', plantingPattern: '', offTypePercentage: '', pestDiseaseIncidence: '', defectivePlants: '', inspectionRemarks: '' }}
            validationSchema={validationSchema}
            onSubmit={(values): any => { addvergitativeInspectionDetails(values) }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (


                <View>
                    <ScrollView>

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
                                {errors.defectivePlants && <Text style={styles.validationText}>{errors.inspectionRemarks}</Text>}
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

                            <View style={{ height: 200 }}>



                            </View>
                        </View>


                    </ScrollView>

                    <TouchableHighlight activeOpacity={0.9}
                        underlayColor="" onPress={handleSubmit}>

                        <View style={styles.saveButton}>

                            <Text style={styles.saveText} > Next</Text>

                        </View>


                    </TouchableHighlight>


                </View>

            )}

        </Formik>

    )

}



export default VergitativeForm