import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const GetUserData = async (requestedTocken: any) => {


    // try {
    //     const value: string | null = await AsyncStorage.getItem('user-data');

    //     if (value) {
    //         const parsedData: any = JSON.parse(value);

    //         if (requestedTocken === 'fullname') {
    //             return parsedData.fullName
    //         }
    //         else if (requestedTocken === 'profile') {
    //            return  parsedData.profile
    //         }
    //         else if (requestedTocken === 'id') {
    //             return parsedData.id
    //         }
    //     }
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }
 
}

