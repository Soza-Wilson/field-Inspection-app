import { View, Text, TouchableHighlight, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import StageTips from './stageTips'
import Enty from 'react-native-vector-icons//Entypo';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import Ios from 'react-native-vector-icons/Ionicons';
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ImageCropPicker, openCamera } from 'react-native-image-crop-picker';
import { UseTempImageContext } from '../../../context/tempImagesProvider';

const AddInspectionImages = ({ navigation }: any) => {

    const [tempImageFiles, setTempImageFiles] :any = useState([])
    // state for camera and image upload 
    const [showButton, setShowButton] = useState(false)
    // adding images to the groball tempImagesContext
    const { tempImages, setTempImages } = UseTempImageContext()



    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                return true
            } else {
                console.log("Camera permission denied");
                return false
            }
        } catch (err) {
            console.warn(err);
        }
    };



    const openCamera = () => {
        const res = requestCameraPermission();
        res.then(async () => {

            const options: CameraOptions = {
                mediaType: 'photo',
                cameraType: 'back',
                quality: 1,
                includeBase64: true,
                saveToPhotos: true,



            }

            const result = await launchCamera(options, response => {
                console.log(response)
            })

        }
        )

    }



    const openLibrary = () => {

        const res = requestCameraPermission();
        res.then(async () => {

            const options: CameraOptions = {
                mediaType: 'photo',
                cameraType: 'back',
                quality: 1,
                includeBase64: true,
                saveToPhotos: true,



            }

            const result = await launchImageLibrary(options, (response: any) => {
                response.assets.forEach((element: any) => {
                    setTempImageFiles([...tempImageFiles, element.uri]);
                });

                console.log(tempImageFiles[1])

            });

        })




    }


    const CameraButtons = () => {

        if (showButton) {

            return (



                <View>

                    <TouchableHighlight activeOpacity={0.9}
                        underlayColor="" onPress={() => openCamera()} style={styles.camera}>

                        <View >

                            <Ios

                                name="camera"
                                size={20}
                                color="black"
                                style={{

                                    color: "#FFFFFF",




                                }}
                            />




                        </View>
                    </TouchableHighlight>




                    <View style={styles.fileUpload}>

                        <TouchableHighlight activeOpacity={0.9}
                            underlayColor="" onPress={() => openLibrary()}>


                            <Mat

                                name="folder-image"
                                size={20}
                                color="black"
                                style={{

                                    color: "#FFFFFF",




                                }}
                            />
                        </TouchableHighlight>


                    </View>



                </View>


            )


        }


    }

    return (


        <View style={styles.mainContainer}>
            <StageTips stage={3} heading='Field Images' description='Take or upload field images ' />

            <View style={styles.galleryView}>


                <Text>
                    galleryView
                </Text>

                <TouchableHighlight activeOpacity={0.9}
                    underlayColor="" style={styles.uploadCategory} onPress={() => {
                        if (showButton) {
                            setShowButton(false)
                        }
                        else {

                            setShowButton(true)

                        }

                    }}>

                    <View >
                        {/* <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}></View> */}

                        <Enty

                            name="plus"
                            size={20}
                            color="black"
                            style={{

                                color: "#FFFFFF",




                            }}
                        />



                        <CameraButtons />


                    </View>


                </TouchableHighlight>





            </View>

            <TouchableHighlight activeOpacity={0.9}
                underlayColor="" onPress={() => navigation.navigate("addGeoLocation")}>

                <View style={styles.saveButton}>

                    <Text style={styles.saveText} > Save Data</Text>

                </View>


            </TouchableHighlight>




        </View>


    )
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",

        backgroundColor: "white"

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
    galleryView: {

        padding: 180,
        margin: 5,
        elevation: 10,
        borderRadius: 20,
        backgroundColor: "white"
    },

    uploadCategory: {

        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: 20,
        right: 15,
        height: 55,
        width: 55,
        borderRadius: 100,
        backgroundColor: "#2DA15F",
        elevation: 5




    },

    camera: {

        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: 60,
        right: 0,
        height: 30,
        width: 30,
        borderRadius: 100,
        backgroundColor: "#2DA15F",
        elevation: 5




    },
    fileUpload: {

        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: 25,
        right: 50,
        height: 30,
        width: 30,
        borderRadius: 100,
        backgroundColor: "#2DA15F",
        elevation: 5




    }



})

export default AddInspectionImages