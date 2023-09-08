import { object, number, string } from "yup";
import { Formik } from "formik";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { styles } from "./inspectionFromStyle/formStyle";
import { ScrollView } from "react-native-gesture-handler";
import StageTips from "../stageTips";


type floweringFormProps = {
    navigation: any
    inspectionType: number
}


const PreHarvest = (Props: floweringFormProps) => {


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


        <View style={{
            flex: 1,
            backgroundColor: "white", justifyContent: 'space-between'
        }}>
            <View>

                <StageTips stage={1} heading='Inspection Details' description='Verify inspection requirements and add details' inspectionType={'Pre Harvest'} navigation={Props.navigation} previousPage='farmLibrary' />
                <Formik
                    initialValues={{ offTypeCobs: '', defectiveCobs: '', inspectionRemarks: 
                    '' }}
                    validationSchema={validationSchema}
                    onSubmit={values => {console.log(values.defectiveCobs)}}>

                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

                        <View>
                            <ScrollView>

                                <View style={styles.formContainer} >

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

                                    <View>
                                        
                                    </View>

                                    <TouchableHighlight activeOpacity={0.9}
                                        underlayColor="" onPress={handleSubmit}>

                                        <View style={styles.saveButton}>

                                            <Text style={styles.saveText} > Next</Text>

                                        </View>


                                    </TouchableHighlight>




                                </View>






                            </ScrollView>



                        </View>



                    )}

                </Formik>
            </View>






        </View>




    )




}

export default PreHarvest

