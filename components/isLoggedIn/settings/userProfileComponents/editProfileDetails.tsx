import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import Mate from 'react-native-vector-icons/Entypo'
import Community from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UseLogIn } from '../../../../context/logInProvider'
import { Dimensions } from 'react-native'



const EditProfileDetails = ({ type,navigation }: any) => {

    const [userName, setUserName] = useState()
        const [userId, setUserId] = useState()
        const [email, setEmail] = useState()
        const [userProfilePicture, setUserProfilePicture] = useState('')
        const { setIsLoggedIn }: any = UseLogIn()
        const screenWidth = Dimensions.get('window').width
        const screenHeight = Dimensions.get('window').height

        useEffect(() => {
            const timer = setTimeout(() => {
                getUserData()
                console.log(type)
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


    const EditName = () => {

        return (

            <View style={{flexDirection:'column',justifyContent:'space-between',height:screenHeight}}>

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
                            Enter new password
                        </Text>

                        <TextInput
                            placeholder='Enter new name' style={{ padding: 10, backgroundColor: "rgb(247,240,246)", margin: 5, borderRadius: 5, fontFamily: 'Poppins-SemiBold', fontSize: 12 }}
                            placeholderTextColor="rgb(100,101,118)"
                            keyboardType="ascii-capable"
                            autoCorrect={false}>


                        </TextInput>





                    </View>

                </View>





                <TouchableHighlight activeOpacity={0.9}
                    underlayColor="" onPress={() => navigation.navigate("addGeoLocation")}>

                    <View style={styles.saveButton}>

                        <Text style={styles.saveText} > update</Text>

                    </View>


                </TouchableHighlight>

            </View>
        )
    }

    const EditEmail = () => {

        return (

            <View style={{flexDirection:'column',justifyContent:'space-between',height:screenHeight}}>

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
                            autoCorrect={false}>


                        </TextInput>





                    </View>

                </View>





                <TouchableHighlight activeOpacity={0.9}
                    underlayColor="" onPress={() => navigation.navigate("addGeoLocation")}>

                    <View style={styles.saveButton}>

                        <Text style={styles.saveText} > update</Text>

                    </View>


                </TouchableHighlight>

            </View>
        )
    }


    const EditPassword = () => {

        return (

            <View style={{flexDirection:'column',justifyContent:'space-between',height:screenHeight}}>

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
                            autoCorrect={false}>


                        </TextInput>





                    </View>

                </View>





                <TouchableHighlight activeOpacity={0.9}
                    underlayColor="" onPress={() => navigation.navigate("addGeoLocation")}>

                    <View style={styles.saveButton}>

                        <Text style={styles.saveText} > update</Text>

                    </View>


                </TouchableHighlight>

            </View>
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

           {type =="name" ?  <EditName /> :type =="email" ? <EditEmail />:<EditPassword />}
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
        marginBottom:110

    },
    saveText: {

        textAlign: "center",
        fontFamily: "Poppins-SemiBold",
        fontSize: 12,
        color: "#FFFFFF"




    },
})

export default EditProfileDetails