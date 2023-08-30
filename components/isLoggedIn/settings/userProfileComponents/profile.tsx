import { View, Text, ScrollView, TextInput, TouchableHighlight, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import Com from 'react-native-vector-icons/MaterialCommunityIcons'
import Mate from 'react-native-vector-icons/Entypo'
import { styles } from '../../inspection/inspectionForms/inspectionFromStyle/formStyle'
import { Formik } from 'formik'
import { object, number, string } from 'yup'

import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UseLogIn } from '../../../../context/logInProvider'

const UserProfile = ({ navigation }: any) => {

    const validationSchema = object().shape({
        // Define your form fields and their validation rules here
        // For example:
        offTypeCobs: number().required('Off-type cobs at shelling percentage is required').lessThan(100),
        defectiveCobs: number().required('Defective Cobs percentage is required').lessThan(100),
        inspectionRemarks: string().required('Enter inspection remarks'),
        // Add more fields and their validations as needed
    });



    const [userName, setUserName] = useState()
    const [userId, setUserId] = useState()
    const [email, setEmail] = useState()
    const [userProfilePicture, setUserProfilePicture] = useState('')
    const { setIsLoggedIn }: any = UseLogIn()

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
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }


    }

    return (
        <View style={styless.container}>


            <View style={styless.headerWrapper}>
                <TouchableHighlight activeOpacity={0.8}
                    underlayColor="" onPress={() => navigation.navigate('settings')}>
                    <View style={styles.backButton}>
                        <Mate
                            name='chevron-left'
                            size={15}
                            color={'black'}
                        />
                    </View>
                </TouchableHighlight></View>


            <View>




                <View>




                    <View style={[styles.formContainer, { margin: 20, height: 500, borderWidth: 2 }]} >



                        <View style={[styles.textWrapper, { marginTop: 60, backgroundColor: 'white' }]}>

                            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:10,color:'black'}}> User ID*</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(247,247,249)', borderRadius: 5, margin: 10 }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Mate
                                        name='list'
                                        size={15}
                                        color={'grey'}
                                        style={{ margin: 15, backgroundColor: 'rgb(247,247,249)' }}
                                    />
                                    <Text style={{ marginTop: 12, backgroundColor: 'rgb(247,247,249)', fontFamily: 'Poppins-SemiBold' }}>
                                        {userId}
                                    </Text>

                                </View>




                            </View>





                        </View>


                        <View style={[styles.textWrapper, { backgroundColor: 'white' }]}>

                            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:10,color:'black'}}> Fullname*</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(247,247,249)', borderRadius: 5, margin: 10 }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Mate
                                        name='user'
                                        size={15}
                                        color={'grey'}
                                        style={{ margin: 15, backgroundColor: 'rgb(247,247,249)' }}
                                    />
                                    <Text style={{ marginTop: 12, backgroundColor: 'rgb(247,247,249)', fontFamily: 'Poppins-SemiBold' }}>
                                        {userName}
                                    </Text>

                                </View>


                                 <TouchableHighlight
                                    activeOpacity={0.8}
                                    underlayColor="" onPress={() => navigation.navigate('editDetails')}>

                                    <MaterialIcons
                                        name='pen'
                                        size={20}
                                        color={'grey'}
                                        style={{ margin: 15, marginLeft: 20, color: "#2DA15F" }}
                                    />

                                </TouchableHighlight>

                            </View>





                        </View>


                        <View style={[styles.textWrapper, { backgroundColor: 'white' }]}>

                            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:10,color:'black'}}> Email *</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(247,247,249)', borderRadius: 5, margin: 10 }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Com
                                        name='email'
                                        size={15}
                                        color={'grey'}
                                        style={{ margin: 15, backgroundColor: 'rgb(247,247,249)' }}
                                    />
                                    <Text style={{ marginTop: 12, backgroundColor: 'rgb(247,247,249)', fontFamily: 'Poppins-SemiBold' }}>
                                        {email}
                                    </Text>



                                </View>

                                <TouchableHighlight
                                    activeOpacity={0.8}
                                    underlayColor="" onPress={() => navigation.navigate('editDetails')}>

                                    <MaterialIcons
                                        name='pen'
                                        size={20}
                                        color={'grey'}
                                        style={{ margin: 15, marginLeft: 20, color: "#2DA15F" }}
                                    />

                                </TouchableHighlight>


                            </View>





                        </View>

                        <View style={[styles.textWrapper, { backgroundColor: 'white' }]}>

                            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:10,color:'black'}}> Password*</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(247,247,249)', borderRadius: 5, margin: 10 }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Mate
                                        name='lock'
                                        size={15}
                                        color={'grey'}
                                        style={{ margin: 15, backgroundColor: 'rgb(247,247,249)' }}
                                    />


                                    <TextInput
                                        style={{ backgroundColor: 'rgb(247,247,249)', fontFamily: 'Poppins-SemiBold' }}
                                        placeholderTextColor="rgb(100,101,118)"
                                        placeholder="Password"
                                        keyboardType="ascii-capable"
                                        secureTextEntry={true}
                                        passwordRules={null}
                                        autoCorrect={false}

                                        value={userId}
                                    />

                                </View>


                                <TouchableHighlight
                                    activeOpacity={0.8}
                                    underlayColor="" onPress={() => navigation.navigate('editDetails')}>

                                    <MaterialIcons
                                        name='pen'
                                        size={20}
                                        color={'grey'}
                                        style={{ margin: 15, marginLeft: 20, color: "#2DA15F" }}
                                    />

                                </TouchableHighlight>

                            </View>





                        </View>










                    </View>

                    <Image
                        source={userProfilePicture !== '' ? userProfilePicture : require('../../../../assets/images/user.jpg')}
                        style={styless.profile_image}></Image>

                    <View style={styless.uploadProfilePicture}>

                        <MaterialIcons
                            name='camera'
                            size={20}
                            color={'grey'}
                            style={{ color: 'white' }}
                        />

                    </View>






                </View>







            </View>



        </View>
    )
}

const styless = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",

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

    profile_image: {
        position: 'absolute',
        top: 0,
        right: 100,
        left: 140,
        width: 100,
        height: 100,
        backgroundColor: "black",
        padding: 50,
        borderRadius: 50,
        borderColor: 'grey',
        borderWidth: 2,


    },

    uploadProfilePicture: {

        position: 'absolute',
        top: 75,
        left: 175,
        width: 35,
        height: 35,
        backgroundColor: "#2DA15F",
        elevation: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'

    }


})

export default UserProfile