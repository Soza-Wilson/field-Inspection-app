import { object, number, string } from "yup";
import { Formik } from "formik";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { styles } from "./inspectionFromStyle/formStyle";
import { ScrollView } from "react-native-gesture-handler";





const PreHarvest = () => {


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




                        </View>


                    </ScrollView>

                    <TouchableHighlight activeOpacity={0.9}
                        underlayColor="" onPress={() => { handleSubmit }}>

                        <View style={styles.saveButton}>

                            <Text style={styles.saveText} > Next</Text>

                        </View>


                    </TouchableHighlight>


                </View>



            )}

        </Formik>


    )




}

export default PreHarvest

