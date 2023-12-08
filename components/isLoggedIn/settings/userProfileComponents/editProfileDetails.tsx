import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Mate from 'react-native-vector-icons/Entypo'
import Community from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UseLogIn } from '../../../../context/logInProvider'
import { Dimensions } from 'react-native'
import user from '../../../../models/user'
import { Formik } from 'formik'
import { nameSchema } from './dataSchema'
import { emailSchema } from './dataSchema'
import { passwordSchema } from './dataSchema'



const EditProfileDetails = ({ route, navigation }: any) => {

    const [userName, setUserName] = useState()
    const [userId, setUserId] = useState()
    const [email, setEmail] = useState()
    const [userProfilePicture, setUserProfilePicture] = useState('')
    const { setIsLoggedIn }: any = UseLogIn()
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
    const type = route.params.type;
    const userClass = new user("", "", "", "")

    useEffect(() => {
        const timer = setTimeout(() => {
            getUserData()
        }, 0);
        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []);







    const getUserData = async () => {


        try {
            const value: string | null = await AsyncStorage.getItem('user-data');

            if (value) {
                const parsedData: any = JSON.parse(value);
                setUserName(parsedData.fullName)
                setUserId(parsedData.id)
                setEmail(parsedData.email)
                const date = Date



                if (parsedData.profilePicture == null) {
                    setUserProfilePicture('')

                } else {
                    setUserProfilePicture(parsedData.profilePicture)
                }

                return parsedData
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }


    }

    const updateConformation = async (title: string, data: string, type: string) => {
        Alert.alert(
            title,
            'are you sure ?',
            [
                {
                    text: "YES",
                    onPress: () => { [editData(type, data), navigation.navigate('userProfile')] }
                }, {
                    text: "NO",
                    onPress: () => { console.log("no") }
                }
            ]

        )

    }



    const verifyPasswordData = async (currentPassword: string, newPassword: string, repeatPassword: string) => {
        let userData = await getUserData()
        const currentId = await userClass.getCurrentPassword(userData.id)
        if (currentPassword != currentId) {
            Alert.alert('Error', 'Wrong Current Password')
        }
        else if (newPassword != repeatPassword) {
            Alert.alert('Error', 'New Password not martching Repeat Password')
        }
        else {
            // logging out after changing password 
            await updateConformation('Update Password', newPassword, 'password')
            try {
                await AsyncStorage.removeItem('user-data')
            } catch (error) {
                console.error(error)
            }
           

        }





    }






    const editData = async (type: string, data: string) => {

        //  this function is updating user data 
        //  and resetting the Async Storage to add new updated data 

        let userData = await getUserData()


        let name = userData.fullName
        let email = userData.email

        type == 'name' ? [userClass.updateName(data, userData.id), name = data] : type == 'email' ? [userClass.updateEmail(data, userData.id), email] : userClass.updatePassword(data, userData.id)
        const Data = {
            id: userData.id,
            email: email,
            fullName: name,
            profilePicture: userData.profile_picture
        }
        updateUserTempData(Data)
    }


    const updateUserTempData = async (userData: Object) => {
        try {
            await AsyncStorage.removeItem('user-data');
            const jsonValue = JSON.stringify(userData);
            await AsyncStorage.setItem('user-data', jsonValue);
        } catch (e) {
            console.log(e)
        }
    }








    const EditName = () => {




        return (



            <Formik initialValues={{ name: '' }}
                validationSchema={nameSchema}
                onSubmit={values => updateConformation('Update Name', values.name, 'name')}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (


                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: screenHeight }}>
                        <View>
                            <View>

                                <Text style={{ padding: 10, fontFamily: 'Poppins-SemiBold', fontSize: 10 }}>
                                    Current name
                                </Text>

                                <View style={{ flexDirection: 'row', padding: 5, backgroundColor: "rgb(247,240,246)", margin: 5, borderRadius: 5 }}>

                                    <Mate
                                        name='user'
                                        size={20}
                                        color={'black'}
                                        style={{ margin: 10 }}

                                    />

                                    <Text style={{ margin: 5, fontFamily: 'Poppins-SemiBold' }}>

                                        {userName}


                                    </Text>


                                </View>

                            </View>

                            <View>
                                <Text style={{ margin: 10, fontFamily: 'Poppins-SemiBold', fontSize: 10 }}>
                                    Enter New Name
                                </Text>

                                <TextInput
                                    placeholder='Enter new name' style={{ padding: 10, backgroundColor: "rgb(247,240,246)", margin: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 12 }}
                                    placeholderTextColor="rgb(100,101,118)"
                                    keyboardType="ascii-capable"
                                    autoCorrect={false}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}>


                                </TextInput>
                                {errors.name && <Text style={styles.validationText}>{errors.name}</Text>}





                            </View>

                        </View>



                        <TouchableHighlight activeOpacity={0.9}
                            underlayColor="" onPress={() => handleSubmit()}>

                            <View style={styles.saveButton}>

                                <Text style={styles.saveText} > update</Text>

                            </View>


                        </TouchableHighlight>


                    </View>









                )}

            </Formik>









        )
    }

    const EditEmail = () => {

        return (

            <Formik

                initialValues={{ email: '' }}
                validationSchema={emailSchema}
                onSubmit={values => updateConformation('Update Email', values.email, 'email')}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: screenHeight }}>

                        <View>

                            <View>

                                <Text style={{ padding: 10, fontFamily: 'Poppins-SemiBold', fontSize: 10 }}>
                                    Current Email
                                </Text>

                                <View style={{ flexDirection: 'row', padding: 5, backgroundColor: "rgb(247,240,246)", margin: 5, borderRadius: 5 }}>

                                    <Community
                                        name='email'
                                        size={20}
                                        color={'black'}
                                        style={{ margin: 5 }}


                                    />

                                    <Text style={{ margin: 5, fontFamily: 'Poppins-SemiBold' }}>

                                        {email}


                                    </Text>


                                </View>

                            </View>

                            <View>
                                <Text style={{ margin: 10, fontFamily: 'Poppins-SemiBold', fontSize: 10 }}>
                                    Enter new Email Address
                                </Text>

                                <TextInput
                                    placeholder='Enter new name' style={{ padding: 10, backgroundColor: "rgb(247,240,246)", margin: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 12 }}
                                    placeholderTextColor="rgb(100,101,118)"
                                    keyboardType="ascii-capable"
                                    autoCorrect={false}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}>




                                </TextInput>

                                {errors.email && <Text style={styles.validationText}>{errors.email}</Text>}



                            </View>





                        </View>





                        <TouchableHighlight activeOpacity={0.9}
                            underlayColor="" onPress={() => handleSubmit()}>

                            <View style={styles.saveButton}>

                                <Text style={styles.saveText} > update</Text>

                            </View>


                        </TouchableHighlight>

                    </View>


                )}




            </Formik>


        )
    }


    const EditPassword = () => {

        return (



            <Formik initialValues={{ currentPassword: '', newPassword: '', repeatPassword: '' }}
                validationSchema={passwordSchema}
                onSubmit={values => verifyPasswordData(values.currentPassword, values.newPassword, values.repeatPassword)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (


                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: screenHeight }}>

                        <View>

                            <View>

                                <Text style={{ padding: 10, fontFamily: 'Poppins-SemiBold', fontSize: 10 }}>
                                    Enter Current Password
                                </Text>

                                <TextInput
                                    placeholder='Current password' style={{ padding: 10, backgroundColor: "rgb(247,240,246)", margin: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 12 }}
                                    placeholderTextColor="rgb(100,101,118)"
                                    keyboardType="ascii-capable"
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    onChangeText={handleChange('currentPassword')}
                                    onBlur={handleBlur('currentPassword')}
                                    value={values.currentPassword}>

                                </TextInput>

                                {errors.currentPassword && <Text style={styles.validationText}>{errors.currentPassword}</Text>}

                            </View>

                            <View>
                                <Text style={{ margin: 10, fontFamily: 'Poppins-SemiBold', fontSize: 10 }}>
                                    Enter new Password
                                </Text>

                                <TextInput
                                    placeholder='Enter New Password ' style={{ padding: 10, backgroundColor: "rgb(247,240,246)", margin: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 12 }}
                                    placeholderTextColor="rgb(100,101,118)"
                                    keyboardType="ascii-capable"
                                    autoCorrect={false}
                                    passwordRules={"required:upper,required:lower;required:digit;max-consecutive:2;minlength:8;"}
                                    secureTextEntry={true}
                                    onChangeText={handleChange('newPassword')}
                                    onBlur={handleBlur('newPassword')}
                                    value={values.newPassword}>


                                </TextInput>

                                {errors.newPassword && <Text style={styles.validationText}>{errors.newPassword}</Text>}


                                <Text style={{ margin: 10, fontFamily: 'Poppins-SemiBold', fontSize: 10 }}>
                                    Repeat Password
                                </Text>

                                <TextInput
                                    placeholder='Repeat Passoword' style={{ padding: 10, backgroundColor: "rgb(247,240,246)", margin: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 12 }}
                                    placeholderTextColor="rgb(100,101,118)"
                                    keyboardType="ascii-capable"
                                    autoCorrect={false}
                                    passwordRules={"required:upper,required:lower;required:digit;max-consecutive:2;minlength:8;"}
                                    secureTextEntry={true}
                                    onChangeText={handleChange('repeatPassword')}
                                    onBlur={handleBlur('repeatPassword')}
                                    value={values.repeatPassword}>

                                </TextInput>

                                {errors.repeatPassword && <Text style={styles.validationText}>{errors.repeatPassword}</Text>}


                            </View>

                        </View>





                        <TouchableHighlight activeOpacity={0.9}
                            underlayColor="" onPress={() => handleSubmit()}>

                            <View style={styles.saveButton}>

                                <Text style={styles.saveText} > update</Text>

                            </View>


                        </TouchableHighlight>

                    </View>




                )}




            </Formik>


        )
    }


    return (


        <View style={styles.container}>

            <View style={styles.headerWrapper}>
                <TouchableHighlight activeOpacity={0.8}
                    underlayColor="" onPress={() => navigation.navigate('userProfile')}>
                    <View style={styles.backButton}>
                        <Mate
                            name='chevron-left'
                            size={15}
                            color={'black'}
                        />
                    </View>
                </TouchableHighlight></View>

            {type == "fullname" ? <EditName /> : type == "email" ? <EditEmail /> : <EditPassword />}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: "column",



    },
    backButton: {

        padding: 10,
        borderRadius: 10,

        backgroundColor: "white",
        elevation: 2,
        borderColor: "grey"

    },

    headerWrapper: {
        padding: 20,

        flexDirection: "row",
        justifyContent: "space-between"

    },
    saveButton: {

        padding: 25,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#2DA15F",
        marginBottom: 110

    },
    saveText: {

        textAlign: "center",
        fontFamily: "Poppins-SemiBold",
        fontSize: 12,
        color: "#FFFFFF"




    },
    validationText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 8,
        color: 'red',
        marginLeft: 10


    }
})

export default EditProfileDetails