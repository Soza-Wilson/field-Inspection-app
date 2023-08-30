import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const getUserData = async () :Promise<object> => {

    let  parsedData:any = {};
    try {
        const value: string | null = await AsyncStorage.getItem('vergitative-data');
        
        if (value) {
            parsedData = JSON.parse(value);
            console.log(parsedData.isolationDistance)
            

            // if (parsedData.profilePicture == null) {
            //     setUserProfilePicture('')

            // } else {
            //     setUserProfilePicture(parsedData.profilePicture)
            // }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
   
    return parsedData

}

export const saveInspectionData = ()=>{

    console.log(getUserData())

    //  getting data from async Storage 



        

    //  passing inspection data to the data model


    //  calling the insert data function from the data model 



    // if data inserted successfully resert the async storage tocken 




} 


const HandleInspectionData = () => {

   




   


    const saveGeoLoactiondata = ()=>{



    }


    const saveInspectionImagesData = ()=> {



    }


   
  
}

export default HandleInspectionData