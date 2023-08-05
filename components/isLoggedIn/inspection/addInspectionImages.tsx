import { View, Text, TouchableHighlight, PermissionsAndroid, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import StageTips from './stageTips'
import Enty from 'react-native-vector-icons//Entypo';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import Ios from 'react-native-vector-icons/Ionicons';
import { CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ImageCropPicker, openCamera } from 'react-native-image-crop-picker';
import { UseTempImageContext } from '../../../context/tempImagesProvider';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';


const AddInspectionImages = ({ navigation }: any) => {

    const [tempImageFiles, setTempImageFiles]: any = useState([])
    // state for camera and image upload 
    const [showButton, setShowButton] = useState(false)
    // adding images to the groball tempImagesContext



    // ImageHight and width 

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;


    // requesting user camera permissions 
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


    // using the react native image picker library to take images and upload already existing
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

            const result = await launchCamera(options, (response: any)=> {
                if(response.didCancel){
                    console.log(response)
                }

                else{
                    response.assets.forEach((element: any) => {
                        setTempImageFiles([...tempImageFiles, element.uri]);
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

                quality: 1,
                includeBase64: true,
                saveToPhotos: true,



            }

            const result = await launchImageLibrary(options, (response: any) => {
                if(response.didCancel){
                    console.log(response)
                }
                else{
                    response.assets.forEach((element: any) => {
                        setTempImageFiles([...tempImageFiles, element.uri]);
                    });

                }
               

               

            });

        })




    }

    // using the showButton state hook to manipulate the take image and upload image buttons
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

    const TempImageGallary = () => {

        if (tempImageFiles[0] == null) {

            return (<Text>
                emputy
            </Text>)

        } else {

            return (
                <ScrollView showsVerticalScrollIndicator={false}>


                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', alignItems: 'center' }}>

                        {tempImageFiles.map((data: any, index: number) => (
                            // Step 3: Render components based on the array elements
                            <TouchableHighlight key={index} >

                                <Image
                                    style={{ height: 150, width: 90 * 2, margin: 4, borderRadius: 5 }}
                                    source={{ uri: data }}


                                />

                            </TouchableHighlight>
                        ))}


                    </View>



                </ScrollView>

            )
        }






    }





    return (


        <View style={styles.mainContainer}>
            <StageTips stage={3} heading='Field Images' description='Take or upload field images ' />

            <View style={styles.galleryView}>
                <TempImageGallary />

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
        flex: 1,
        flexDirection: "row",
        margin: 5,
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 5,
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