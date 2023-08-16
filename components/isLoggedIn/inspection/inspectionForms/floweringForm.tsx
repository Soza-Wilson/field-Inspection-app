   
  import { object,number,string } from "yup"; 
  import { Formik } from "formik";
  import { View,ScrollView,Text,TextInput } from "react-native";
  import { styles } from "./inspectionFromStyle/formStyle";
  import { TouchableHighlight } from "react-native";
   
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
                    <ScrollView>
                        <View>


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

                            <View style={{ height: 200 }}></View>

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

export default FloweringForm