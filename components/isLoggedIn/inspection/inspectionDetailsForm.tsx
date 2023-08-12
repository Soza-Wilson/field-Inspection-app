import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useInspectionType } from '../../../context/inspectionType'
import { ScrollView } from 'react-native-gesture-handler'
import { Formik } from 'formik'
import { object, string, number } from 'yup';


//  we sprit the form into three section , each for defferent inspection types 


// Vergitative data collection form

const VergitativeForm = () => {

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
            onSubmit={values => { }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
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
            )}

        </Formik>

    )




}


// Flowering data collection form


const FloweringForm = () => {

    //  Flowering stage form schema 

    const validationSchema = object().shape({
        // Define your form fields and their validation rules here
        // For example:
        pollinatingFemales: number().required('Pollinating females percentage is required').lessThan(100),
        femaleReceptiveSkills: number().required('Female receptive skills percentage is required').lessThan(100),
        maleElemination: number().required('Male elemination percentange is required').lessThan(100),
        pestDiseaseIncidence: number().required('Pest disease incidence percentage is required').lessThan(100),
        inspectionRemarks: string().required('Enter inspection remarks'),
        // Add more fields and their validations as needed
    });
    return (
        <Formik

            initialValues={{ pollinatingFemales: '', femaleReceptiveSkills: '', maleElemination: '', pestDiseaseIncidence: '', inspectionRemarks: '' }}
            validationSchema={validationSchema}
            onSubmit={values => { }}>

            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View >

                    <View style={styles.textWrapper}>

                        <Text style={styles.labelText}> Pollinating Females %*</Text>
                        <TextInput style={styles.userInput}
                            placeholder='Enter pollinating females percentage '
                            placeholderTextColor={"grey"}
                            keyboardType="numeric"
                            onChangeText={handleChange('pollinatingFemales')}
                            value={values.pollinatingFemales}
                        />

                        {errors.pollinatingFemales && <Text style={styles.validationText}>{errors.pollinatingFemales}</Text>}

                    </View>


                    <View style={styles.textWrapper}>

                        <Text style={styles.labelText}> Female Receptive Skills % *</Text>
                        <TextInput style={styles.userInput}
                            placeholder='Enter female receptive skills percentage '
                            placeholderTextColor={"grey"}
                            keyboardType="numeric"
                            onChangeText={handleChange('femaleReceptiveSkills')}
                            value={values.femaleReceptiveSkills}
                        />
                        {errors.femaleReceptiveSkills && <Text style={styles.validationText}>{errors.femaleReceptiveSkills}</Text>}

                    </View>

                    <View style={styles.textWrapper}>

                        <Text style={styles.labelText}> Male Elemination % *</Text>
                        <TextInput style={styles.userInput}
                            placeholder='Enter male elemination percentage'
                            placeholderTextColor={"grey"}
                            keyboardType="numeric"
                            onChangeText={handleChange('maleElemination')}
                            value={values.maleElemination}
                        />
                        {errors.maleElemination && <Text style={styles.validationText}>{errors.maleElemination}</Text>}

                    </View>

                    <View style={styles.textWrapper}>

                        <Text style={styles.labelText}> Pest Disease Incidence % *</Text>
                        <TextInput style={styles.userInput}
                            placeholder='Distance'
                            placeholderTextColor={"grey"}
                            keyboardType="numeric"
                            onChangeText={handleChange('pestDiseaseIncidence')}
                            value={values.pestDiseaseIncidence}
                        />
                        {errors.pestDiseaseIncidence && <Text style={styles.validationText}>{errors.pestDiseaseIncidence}</Text>}


                    </View>


                    <View style={styles.textWrapper}>

                        <Text style={styles.labelText}> Remarks *</Text>
                        <TextInput style={styles.remarks}
                            multiline={true}
                            numberOfLines={4}
                            placeholder='Inspection Remarks'
                            placeholderTextColor={"grey"}
                            keyboardType="default"
                            onChangeText={handleChange('inspectionRemarks')}
                            value={values.inspectionRemarks}
                        />
                        {errors.inspectionRemarks && <Text style={styles.validationText}>{errors.inspectionRemarks}</Text>}




                    </View>

                     <View style={{height:200}}></View>


                </View>
            )}

        </Formik>


    )




}



const Pre_harvest = () => {
  
     
    //  Flowering stage form schema 

    const validationSchema = object().shape({
        // Define your form fields and their validation rules here
        // For example:
        offTypeCobs: number().required('Off-type cobs at shelling percentage is required').lessThan(100),
        defectiveCobs: number().required('Defective Cobs percentage is required').lessThan(100),
        inspectionRemarks: string().required('Enter inspection remarks'),
        // Add more fields and their validations as needed
    });

    return (

        <Formik
        initialValues={{ offTypeCobs: '', defectiveCobs: '', inspectionRemarks: '' }}
        validationSchema={validationSchema}
        onSubmit={values => { }}>

        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (


<View >

<View style={styles.textWrapper}>

    <Text style={styles.labelText}> Off-types cobs at shelling %*</Text>
    <TextInput style={styles.userInput}
        placeholder='Enter off-types cobs at shelling % '
        placeholderTextColor={"grey"}     
        keyboardType="numeric"
        onChangeText={handleChange('offTypeCobs')}
        value={values.offTypeCobs}
    />
    {errors.offTypeCobs && <Text style={styles.validationText}>{errors.offTypeCobs}</Text>}



</View>


<View style={styles.textWrapper}>

    <Text style={styles.labelText}> Defective cobs at shelling % *</Text>
    <TextInput style={styles.userInput}
        placeholder='Enter defective cobs at shelling %'
        placeholderTextColor={"grey"}
         keyboardType="numeric"
        onChangeText={handleChange('defectiveCobs')}
        value={values.defectiveCobs}
    />
    {errors.defectiveCobs && <Text style={styles.validationText}>{errors.defectiveCobs}</Text>}


</View>


<View style={styles.textWrapper}>

    <Text style={styles.labelText}> Remarks *</Text>
    <TextInput style={styles.remarks}
        multiline={true}
        numberOfLines={4}
        placeholder='Inspection Remarks'
        placeholderTextColor={"grey"}
        keyboardType="default"
        onChangeText={handleChange('inspectionRemarks')}
        value={values.inspectionRemarks}
    />
    {errors.inspectionRemarks && <Text style={styles.validationText}>{errors.inspectionRemarks}</Text>}




</View>




</View>
        )}

        </Formik>


    )




}







// pre-harvest data collection form



const InspectionDetailsForm = () => {

    const { inspectionType } = useInspectionType()
    return (
        <ScrollView style={styles.formContainer}>

            {inspectionType === 0 ? <VergitativeForm /> : inspectionType === 1 ? <FloweringForm /> : <Pre_harvest />}

        </ScrollView>
    )


}
const styles = StyleSheet.create({

    formContainer: {
        borderWidth: 0.3, borderColor: "grey", margin: 5, borderRadius: 5, height: 500

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

    validationText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: '#FF0000',


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

export default InspectionDetailsForm