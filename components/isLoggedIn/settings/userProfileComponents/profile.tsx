import { View, Text, ScrollView, TextInput, TouchableHighlight, Image, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import Com from 'react-native-vector-icons/MaterialCommunityIcons'
import Mate from 'react-native-vector-icons/Entypo'
import { styles } from '../../inspection/inspectionForms/inspectionFromStyle/formStyle'
import { Formik } from 'formik'
import { object, number, string } from 'yup'

import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import design from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UseLogIn } from '../../../../context/logInProvider'
import Enty from 'react-native-vector-icons//Entypo';
import { requestCameraPermission } from '../../../../util/appPermisions'
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob'
import user from '../../../../models/user'
import UploadedImages from '../../../../models/images'
import Util from '../../../../models/Util'
import IOS from 'react-native-vector-icons/Ionicons';
import Evil from 'react-native-vector-icons/EvilIcons'
import { color } from 'react-native-elements/dist/helpers'






const UserProfile = ({ navigation }: any) => {



    const [showImageButtons, setShowImageButton] = useState(false)
    const cacheDir = RNFetchBlob.fs.dirs.CacheDir

    const [userName, setUserName] :any = useState()
    const [userId, setUserId]: any = useState()
    const [email, setEmail] = useState()
    const [userProfilePicture, setUserProfilePicture] = useState('')
    const { setIsLoggedIn }: any = UseLogIn()
    const util = new Util()
    


    useEffect(() => {
        const timer = setTimeout(() => {
            getUserData()
          
        }, 0);
        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []);


    const UploadButtons = () => {
        if (showImageButtons) {
            return (
                <View style={styless.buttonsContainer}>

                    <Pressable style={styless.photoLibrary} onPress={() => {
                        openLibrary()
                    }}>

                        <View>

                            <MaterialIcons
                                name="folder-image"
                                size={15}
                                color="black"
                                style={{

                                    color: "#FFFFFF",




                                }}
                            />

                        </View>

                    </Pressable>

                    <Pressable style={styless.useCamera} onPress={() => {
                        openCamera()
                    }}>
                        <View >

                            <MaterialIcons
                                name='camera'
                                size={15}
                                color={'grey'}
                                style={{ color: 'white' }}
                            />

                        </View>


                    </Pressable>


                </View>
            )


        }



    }




    const openCamera = async () => {
        const res = requestCameraPermission();
        res.then(async () => {

            const options: CameraOptions = {
                mediaType: 'photo',
                cameraType: 'back',
                quality: 1,
                includeBase64: true,
                saveToPhotos: true,
            }

            const result = await launchCamera(options, (response: any) => {
                if (response.didCancel) {

                }

                else {
                    response.assets.forEach((element: any) => {
                         setUserProfilePicture(element.uri)
                         setShowImageButton(false)
                        UpdateProfilePicture(element.uri)
                        
                        
                    });

                }
            })

        }
        )

    }



    const openLibrary = () => {

        const res = requestCameraPermission();
        res.then(async () => {

            const options: CameraOptions = {
                mediaType: 'photo',
                includeBase64: true,
                saveToPhotos: true,
            }
            const result = await launchImageLibrary(options, (response: any) => {
                if (response.didCancel) {

                }
                else {
                    response.assets.forEach((element: any) => {
                        setUserProfilePicture(element.uri)
                        setShowImageButton(false)
                        UpdateProfilePicture(element.uri)

                    });
                }
            });
        })
    }

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
                    setUserProfilePicture('file://' + cacheDir + '/' + parsedData.profilePicture) 
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const UpdateProfilePicture = async (image:string) => {
        let imageData = image.split('cache/')
        const data = {
            id: userId,
            email: email,
            fullName: userName,
            profilePicture: imageData[1]
        }
        const userClass= new user(userId,"","","")
        userClass.updateProfilePicture(imageData[1])
        updateUserTempData(data)

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



    return (
        <View style={styless.container}>


            <View style={styless.headerWrapper}>
                <TouchableHighlight activeOpacity={0.8}
                    underlayColor="" onPress={() => navigation.navigate('settings')}>
                    <View style={[{backgroundColor:'#2DA15F',margin:10}]}>
                        <Mate
                            name='chevron-left'
                            size={20}
                            color={'white'}
                        />
                    </View>
                </TouchableHighlight></View>


            <View>




                <View>




                    <View style={[styles.formContainer, { margin: 20, height: 500, borderRadius:20,backgroundColor:'white'}]} >



                        <View style={[styles.textWrapper, { marginTop: 60, backgroundColor: 'white' }]}>

                            {/* <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 10, color: 'black' }}> User ID*</Text>
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




                            </View> */}





                        </View>


                        <View style={[styles.textWrapper, { backgroundColor: 'white' }]}>

                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 10, color: 'black' }}> Fullname*</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(247,247,249)', borderRadius: 20, margin: 10 }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <Evil
                                        name='user'
                                        size={25}
                                        color={'grey'}
                                        style={{ margin: 10, backgroundColor: 'rgb(247,247,249)' }}
                                    />
                                    <Text style={styless.textData}>
                                        {userName}
                                    </Text>

                                </View>


                                <TouchableHighlight
                                    activeOpacity={0.8}
                                    underlayColor="" onPress={() => navigation.navigate('editDetails', { type: 'fullname' })}>

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

                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 10, color: 'black' }}> Email *</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(247,247,249)', borderRadius: 20, margin: 10 }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <IOS
                                        name='ios-mail-outline'
                                        size={15}
                                        color={'grey'}
                                        style={{ margin: 14, backgroundColor: 'rgb(247,247,249)' }}
                                    />
                                    <Text style={styless.textData}>
                                        {email}
                                    </Text>



                                </View>

                                <TouchableHighlight
                                    activeOpacity={0.8}
                                    underlayColor="" onPress={() => navigation.navigate('editDetails', { type: 'email' })}>

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

                            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 10, color: 'black' }}> Password*</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'rgb(247,247,249)', borderRadius: 20, margin: 10 }}>
                                <View style={{ flexDirection: 'row' }}>

                                    <IOS
                                        name='lock-closed-outline'
                                        size={15}
                                        color={'grey'}
                                        style={{ margin: 13, backgroundColor: 'rgb(247,247,249)' }}
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
                                    underlayColor="" onPress={() => navigation.navigate('editDetails', { type: 'password' })}>

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
                        source={userProfilePicture !== '' ? {uri : userProfilePicture} : require('../../../../assets/images/user.jpg')}
                       
                        style={styless.profile_image}
                        ></Image>
                    <Pressable style={styless.uploadProfilePicture} onPress={() => { showImageButtons ? setShowImageButton(false) : setShowImageButton(true) }} >
                        <View>

                            <Enty

                                name="plus"
                                size={20}
                                color="black"
                                style={{

                                    color: "#FFFFFF",




                                }}
                            />

                        </View>

                    </Pressable>

                    <UploadButtons />








                </View>







            </View>



        </View>
    )
}

const styless = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#2DA15F",
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
        top: 87,
        left: 175,
        width: 35,
        height: 35,
        backgroundColor: "#2DA15F",
        elevation: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },


    photoLibrary: {
        position: 'absolute',
        top: 110,
        left: 150,
        width: 25,
        height: 25,
        backgroundColor: "#2DA15F",
        elevation: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'


    },

    useCamera: {
        position: 'absolute',
        top: 110,
        left: 210,
        width: 25,
        height: 25,
        backgroundColor: "#2DA15F",
        elevation: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'


    },

    buttonsContainer: {
        position: 'absolute',
        top: 3,
        right: 100,
        left: 0,


        borderRadius: 50,



    },

    textData:{

        marginTop: 14, backgroundColor: 'rgb(247,247,249)', fontFamily: 'Poppins-Bold', fontSize: 10
    }


})

export default UserProfile