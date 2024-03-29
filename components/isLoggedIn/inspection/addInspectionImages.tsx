import { View, Text, TouchableHighlight, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import GalleryView from './imagesComponants/galleryView';
import { number } from 'yup';
import { useInspectionType } from '../../../context/inspectionType';
import { Alert } from 'react-native';
import { saveInspectionData } from './handleInspectionData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Inspection from '../../../models/inspection';
import UploadedImages from '../../../models/images';

import RNFetchBlob from 'rn-fetch-blob';
import { Platform } from 'react-native';
import idGenerator from './inspectionForms/idGenerator/idGenerator';
import SelectedInspectionFarmId from '../../../context/farmDetailsProvider';
import { useInspectionfarmId } from '../../../context/farmDetailsProvider';
import { requestCameraPermission } from '../../../util/appPermisions';




import GeoLocation from '../../../models/geo';


const AddInspectionImages = ({ navigation }: any) => {


    useEffect(() => {
        const timer = setTimeout(() => {
            getInspectionData()
            getUserData()
            handleInspectionId()
            getGeoLocationData()
            createImagesFolder()
            getCameraPermission();



        }, 0);
        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []);
    const [userData, setUserData]: any = useState()
    const [inspectionId, setInspectionId]: any = useState()
    const [inspectionData, setInspectionData]: any = useState()
    const [geoLoaction, setGeoLocation]: any = useState()
    const [cameraPer, setCameraPer]: any = useState()

    const { inspectionType } = useInspectionType()
    const { farmId } = useInspectionfarmId()
    const [tempImageFiles, setTempImageFiles]: any = useState([])
    // state for camera and image upload 
    const [showButton, setShowButton] = useState(false)
    const [fullImageView, setFullImageView] = useState(false)
    const [selectImageIndex, setSelectedImageIndex]: any = useState(0)
    // adding images to the groball tempImagesContext



    // ImageHight and width 

    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;



    //  getting data from cache
    const cacheDir = RNFetchBlob.fs.dirs.CacheDir;
    // Specify the destination folder
    const imagesFolderPath = RNFetchBlob.fs.dirs.DocumentDir + '/inspectionImages';

    const createImagesFolder = async () => {
        // creating images folder for each inspection entry

        try {
            const result: boolean = await RNFetchBlob.fs.exists(imagesFolderPath)
            result ? result : RNFetchBlob.fs.mkdir(imagesFolderPath)
            console.log('created images : ' + result + '')

        } catch (error) {

            console.log(error)

        }

    }

    const moveSelectedImages = async () => {

        tempImageFiles.forEach((element: string) => {
            const data = element.split("cache/")
            const uploadedImages = new UploadedImages(data[1], inspectionId)
            uploadedImages.addImage()
        });


    }


    // requesting user camera permissions 

    const getCameraPermission = () => {
        const res = requestCameraPermission()
        setCameraPer(res);





    }





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

            const result = await launchCamera(options, (response: any) => {
                if (response.didCancel) {

                }

                else {

                    console.log(response);
                    // response.assets.forEach((element: any) => {
                    //     setTempImageFiles([...tempImageFiles, element.uri]);
                    // });

                }
            })

        }
        ).catch(
            error => {
                console.log(error)
            }
        )

    }

    //  checking if user has taken or selected any image files before saving data 

    const checkAvailableImages = () => {

        if (tempImageFiles.length <= 0) {

            Alert.alert(
                'Warning ',
                'Please make sure you add images before saving data',

            )
        }

        else {

            saveInspectionData()

        }


    }


    const saveDataConformation = () => {

        Alert.alert(
            'Save inspection data ',
            'are you sure ?',
            [

                {
                    text: "YES",
                    onPress: () => { checkAvailableImages() }
                }, {
                    text: "NO",
                    onPress: () => { console.log("no") }
                }
            ]

        )

    }


    //  logic for opening image gallery

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
                        setTempImageFiles([...tempImageFiles, element.uri]);

                    });
                }
            });
        })
    }


    //  Saving all collected inspection data into the SQLite database 
    //    here we are playiing around with images data to see if we can use there somewhere else 
    const playWithFiles = async () => {
        let counter = 0
        let images: any = []
        const cacheDir = RNFetchBlob.fs.dirs.CacheDir
        const files = await RNFetchBlob.fs.ls(cacheDir);
        files.forEach(element => {
            if (element[0] == 'r') {
                images.push('file://' + cacheDir + '/' + element)
                console.log('file://' + cacheDir + '/' + element)
                counter++
            }
        });
        setTempImageFiles(images)
        console.log(counter)
    }


    const saveInspectionData = async () => {
        try {



            if (inspectionType == 'vergitative') {




                const inspection = new Inspection(inspectionId, userData.id, farmId, Date.now(), Date.now(), 'vergitative',
                    inspectionData.isolationDistance, inspectionData.plantingPattern, inspectionData.offTypePercentage,
                    inspectionData.pestDiseaseIncidence, inspectionData.defectivePlants, 0, 0, 0, 0, 0, inspectionData.inspectionRemarks)
                const insertOperation = await inspection.addVergitativeInspection()

            }

            else if (inspectionType == 'flowering') {

                const inspection = new Inspection(inspectionId, userData.id, farmId, Date.now(), Date.now(), 'flowering', 0, '', 0,
                    inspectionData.pestDiseaseIncidence, 0, inspectionData.pollinatingFemales, inspectionData.femaleReceptiveSkills,
                    inspectionData.maleElemination, 0, 0, inspectionData.inspectionRemarks)
                const insertOperation = await inspection.addFloweringInspection()



            }

            else {

                const inspection = new Inspection(inspectionId, userData.id, farmId, Date.now(), Date.now(), 'pre_harvest', 0, '', 0, 0, 0, 0, 0, 0,
                    inspectionData.offTypeCobs, inspectionData.defectiveCobs, inspectionData.inspectionRemarks)
                const insertOperation = await inspection.addPreHarvestInspection()

            }

        } catch (e) {

            console.log(e)

        }





        // inserting data into inspection 

        try {

            const geoLocation = new GeoLocation(inspectionId, geoLoaction.latitude, geoLoaction.longitude, geoLoaction.altitude, geoLoaction.accuracy, geoLoaction.speed)
            geoLocation.registerGeoLocation()

        } catch (e) {
            console.log(e)
        }
        try {
            moveSelectedImages()
        } catch (error) {

        }
        try {
            navigation.navigate('viewInspection')
        } catch (error) {

        }


    }

    const getInspectionData = async (): Promise<object> => {

        let parsedData: any = {};
        const dataType = inspectionType === 'vergitative' ? 'vergitative-data' : inspectionType === 'flowering' ? 'flowering-data' : 'pre-harvest-data'
        try {
            const value: string | null = await AsyncStorage.getItem(dataType);

            if (value) {

                parsedData = JSON.parse(value);
                setInspectionData(parsedData)

            }
        } catch (error) {
            console.log('Error fetching data: error');
        }
        console.log(parsedData)
        return parsedData


    }

    // getting user data 

    const getUserData = async (): Promise<object> => {

        let parsedData: any = {};
        try {
            const value: string | null = await AsyncStorage.getItem('user-data');

            if (value) {

                parsedData = JSON.parse(value);
                setUserData(parsedData)

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        return parsedData

    }


    // Get Geolocation from async data tocken 

    const getGeoLocationData = async (): Promise<object> => {

        let parsedData: any = {};
        try {
            const value: string | null = await AsyncStorage.getItem('geo-location-data');

            if (value) {
                parsedData = JSON.parse(value);
                setGeoLocation(parsedData)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        return parsedData

    }

    const handleInspectionId = () => {

        setInspectionId(idGenerator)



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

            return (

                <View style={{ alignContent: "center", justifyContent: "center" }}>


                    <Mat

                        name="image-plus"
                        size={350}
                        color="black"
                        style={{

                            color: "grey",




                        }}
                    />




                </View>
            )

        } else {

            return (
                <ScrollView showsVerticalScrollIndicator={false}>




                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', alignItems: 'center' }}>

                        {tempImageFiles.map((data: any, index: number) => (
                            // Step 3: Render components based on the array elements
                            <TouchableHighlight activeOpacity={0.9}
                                underlayColor="" key={index} onPress={() => navigation.navigate('imageGalleryView')}>

                                <Image
                                    style={{ height: 150, width: 91 * 2, margin: 4, borderRadius: 5 }}
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
            <StageTips stage={3} heading='Field Images' description='Take or upload field images' inspectionType={inspectionType === 0 ? 'Vergitative' : inspectionType === 1 ? 'Flowering' : 'Pre Harvest'} navigation={navigation}
                previousPage='addGeoLocation' />

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
                underlayColor="" onPress={() => saveDataConformation()}>

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

        padding: 10,
        margin: 5,
        marginTop: 40,
        borderRadius: 20,
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
        borderWidth: 0.3,
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