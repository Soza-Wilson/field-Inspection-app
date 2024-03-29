import { View, Text, TouchableHighlight, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useEffect } from 'react'
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import { useState } from 'react';
import BackHeader from './backHeader';
import StageTips from './stageTips';
import { useInspectionType } from '../../../context/inspectionType';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddGeoLocation = ({navigation}:any) => {
    const [location, setLocation]: any[]  = useState(false);
    const {inspectionType} = useInspectionType()
    


     //  Calling the getFarmsItems in the main library component was causing an infinity loop , instead i have used the use effect hook
  useEffect(() => {
    const timer = setTimeout(() => {

     getLocation();

    }, 0);
    //  <createDatabase/>
    return () => clearTimeout(timer); // Clear the timer if the component unmounts

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    // using async storage to store temp GEO location data 

    const saveGeoLocation = async() => {


        const geoData = {
            altitude:location ? location.coords.latitude : null,
            latitude: location ? location.coords.latitude : null,
            longitude:location ? location.coords.latitude : null,
            accuracy :location ? location.coords.latitude : null,
            speed:location? location.coords.latitude : null

        }
        

        //  Inserting temp data into aysnc storage geo-location-data inpection tocken   
        //  We are not directiry inserting data into the datadase incase the user goes back without completing the registration process 
        
            try {
              const jsonValue = JSON.stringify(geoData);
              await AsyncStorage.setItem('geo-location-data', jsonValue);
              navigation.navigate('addInspectionImages');
              
              
            } catch (e) {
              console.log(e)
            }

            

        // adding data to the inspection modal
        // const inspection = new Inspection(inspectionId, userId, farmId, Date.now(), Date.now(), 'vergitative',
        //     inspectionData.isolationDistance, inspectionData.plantingPattern, inspectionData.offTypePercentage,
        //     inspectionData.pestDiseaseIncidence, inspectionData.defectivePlants, 0, 0, 0, 0, 0, inspectionData.remarks)
        // const insertOperation = inspection.addVergitativeInspection()

        //  console.log(await insertOperation)



    }

    //  conformation asking user to save all data 


   


    // Function to get permission for location
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Geolocation Permission',
                    message: 'Can we access your location?',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            console.log('granted', granted);
            if (granted === 'granted') {
                console.log('You can use Geolocation');
                return true;
            } else {
                console.log('You cannot use Geolocation');
                return false;
            }
        } catch (err) {
            return false;
        }
    };


    // function to check permissions and get Location
    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
            console.log('res is:', res);
            if (res) {
                Geolocation.getCurrentPosition(
                    (position: any) => {
                        console.log(position);
                        setLocation(position);
                    },
                    error => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                        setLocation(false);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        });
       
    };


    return (
        <View style={styles.container}>

            <View>
            <StageTips stage={2} heading='Geo Location' description='Get GPS Location' inspectionType={inspectionType===0 ? 'Vergitative' : inspectionType===1 ? 'Flowering' : 'Pre Harvest'} navigation={navigation} 
            previousPage='addInspection'/>

            <View style={{ borderWidth: 0.3, borderColor: "grey", margin: 5, borderRadius: 5, }}>


           

                <View style={styles.textWrapper}>

                    <Text style={styles.labelText}> Latitude  *</Text>
                    <TextInput style={[styles.userInput,{borderRadius:20}]}
                        placeholder='0000000'
                        placeholderTextColor={"black"}
                        editable ={false}>
                        {location ? location.coords.latitude : null}

                    </TextInput>



                </View>

                <View style={styles.textWrapper}>

                    <Text style={styles.labelText}> Longitude  *</Text>
                    <TextInput style={[styles.userInput,{borderRadius:20}]}
                        placeholder='000000'
                        placeholderTextColor={"black"}
                        
                        editable ={false}>
                        {location ? location.coords.longitude : null}

                    </TextInput>



                </View>


                <View style={styles.textWrapper}>

                    <Text style={styles.labelText}> Accurancy  *</Text>
                    <TextInput style={[styles.userInput,{borderRadius:20}]}
                        placeholder='000000'
                        placeholderTextColor={"black"}
                        editable ={false}>
                        {location ? location.coords.accuracy : null}    

                    </TextInput>



                </View>

                <View style={styles.textWrapper}>

                    <Text style={styles.labelText}> Speed  *</Text>
                    <TextInput style={[styles.userInput,{borderRadius:20}]}
                        placeholder='0000000'
                        placeholderTextColor={"black"}
                        editable ={false}>
                        
                        {location ? location.coords.speed : null}

                    </TextInput>



                </View>

                </View>

            </View>



            <TouchableHighlight activeOpacity={0.9}
              underlayColor="" onPress={() =>saveGeoLocation()}>
                <View style={styles.getLocation}>
                    <Text style={styles.buttonText}>Next</Text>
                </View>


            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1, alignContent: 'center', justifyContent: "space-between",
        flexDirection: 'column',
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

    getLocation: {

        padding: 10,
        margin: 5,
        marginTop: 40,
        borderRadius: 20,
        backgroundColor: "#2DA15F",

    },

    textWrapper: {
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        padding: 10,


    },


    labelText: {

        fontFamily: "Poppins-Medium",
        fontSize: 11,
        textAlign: "left",
        color: "black"
    },

    userInput: {

        marginTop: 14, backgroundColor: 'rgb(247,247,249)', fontFamily: 'Poppins-Bold', fontSize: 10



    },

    buttonText: {

        textAlign: "center",
        fontFamily: "Poppins-SemiBold",
        fontSize: 12,
        color: "#FFFFFF"
    }
})




export default AddGeoLocation