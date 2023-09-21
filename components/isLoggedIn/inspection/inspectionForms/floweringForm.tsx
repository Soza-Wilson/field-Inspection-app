
import { object, number, string } from "yup";
import { Formik } from "formik";
import { View, ScrollView, Text, TextInput, Alert } from "react-native";
import { styles } from "./inspectionFromStyle/formStyle";
import { TouchableHighlight } from "react-native";
import StageTips from "../stageTips";
import { useInspectionType } from "../../../../context/inspectionType";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Flowering data collection form
type floweringFormProps = {

    navigation: any
    inspectionType: string

}



const FloweringForm = (Props: floweringFormProps) => {
    const { setInspectionType } = useInspectionType()

    const addFloweringInspectionDetails = async (inspectionData: any) => {
        //  Inserting temp data into aysnc storage flowering inspection tocken   
        //  We are not directiry inserting data into the datadase incase the user goes back without completing the registration process 
    
        try {

            setInspectionType('flowering')
            const jsonValue = JSON.stringify(inspectionData);
            await AsyncStorage.setItem('flowering-data', jsonValue);
            Props.navigation.navigate('addGeoLocation');
    
    
        } catch (e) {
            console.log(e)
        }
    
     
    
    }   


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

        <View style={{
            flex: 1,
            backgroundColor: "white", justifyContent: 'space-between'
        }}>
            <StageTips stage={1} heading='Inspection Details' description='Verify inspection requirements and add details' inspectionType={'Flowering'} navigation={Props.navigation} previousPage='farmLibrary' />

            <Formik

                initialValues={{ pollinatingFemales: '', femaleReceptiveSkills: '', maleElemination: '', pestDiseaseIncidence: '', inspectionRemarks: '' }}
                validationSchema={validationSchema}
                onSubmit={values => {addFloweringInspectionDetails(values)}}>

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
                                        placeholder='Enter pest disease incidence'
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


                                <TouchableHighlight activeOpacity={0.9}
                                    underlayColor="" onPress={handleSubmit}>

                                    <View style={styles.saveButton}>

                                        <Text style={styles.saveText} > Next</Text>

                                    </View>


                                </TouchableHighlight>

                                <View style={{ height: 200 }}></View>

                            </View>





                        </ScrollView>


                    </View>


                )}

            </Formik>


        </View>



    )




}

export default FloweringForm