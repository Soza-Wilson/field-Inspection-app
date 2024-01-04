import { View, Text, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IOS from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState } from 'react'
import { color } from 'react-native-elements/dist/helpers';
import { TouchableHighlight } from 'react-native';

interface bottomnavProps {
    navigation: any
    page:any

}


const BottomNavigator = ({ navigation,page}: bottomnavProps) => {
    
    useEffect(() => {
        const timer = setTimeout(() => {
    
            setActivePage(page)
    
        }, 0);
        //  <createDatabase/>
        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


    const [activePage,setActivePage]= useState()

   


    return (
        <View style={styles.container}>





            <TouchableHighlight  activeOpacity={0.9}
        underlayColor=""onPress={() => navigation.navigate('home')}>

                <View style={styles.home}>
                    <IOS name={(activePage==="home")? "home" : "home-outline"} color={(activePage==="home")? "#2DA15F" : "grey"} size={30} />
                    <Text style={(activePage==="home")? { fontFamily: "Poppins-SemiBold",fontSize: 9, textAlign: "center",  marginTop: 5 ,color: "black"
                } :{ fontFamily: "Poppins-SemiBold",
                                fontSize: 8,
                            textAlign: "center",
                                marginTop: 5
                                    ,
                                color: "grey"
                                            }}>

                    home
                </Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight  activeOpacity={0.9}
        underlayColor=""onPress={() => navigation.navigate('map')}>
            <View style={styles.map}>

            <IOS name={(activePage==="map")? "map" : "map-outline"} color={(activePage==="map")? "#2DA15F" : "grey"} size={30} />
                <Text style={(activePage==="map")? { fontFamily: "Poppins-SemiBold",fontSize: 9, textAlign: "center",  marginTop: 5 ,color: "black"
                } :{ fontFamily: "Poppins-SemiBold",
                                fontSize: 8,
                            textAlign: "center",
                                marginTop: 5
                                    ,
                                color: "grey"
                                            }}>

                    Map
                </Text>




            </View>


            </TouchableHighlight>

            <TouchableHighlight activeOpacity={0.9}
        underlayColor="" onPress={() => navigation.navigate("farmLibrary")}>

                <View style={styles.library}>

                <IOS name={(activePage==="library")? "list" : "list-outline"} color={(activePage==="library")? "#2DA15F" : "grey"} size={30} />
                <Text style={(activePage==="library")? { fontFamily: "Poppins-SemiBold",fontSize: 9, textAlign: "center",  marginTop: 5 ,color: "black"
                } :{ fontFamily: "Poppins-SemiBold",
                                fontSize: 8,
                            textAlign: "center",
                                marginTop: 5
                                    ,
                                color: "grey"
                                            }}>

                    library
                </Text>


                </View>


            </TouchableHighlight>



            <TouchableHighlight activeOpacity={0.9}
        underlayColor="" onPress={() => navigation.navigate("settings")}>

                <View style={styles.settings}>

                <IOS name={(activePage==="settings")? "settings" : "settings-outline"} color={(activePage==="settings")? "#2DA15F" : "grey"} size={30} />
                 

                <Text style={(activePage==="settings")? { fontFamily: "Poppins-SemiBold",fontSize: 9, textAlign: "center",  marginTop: 5 ,color: "black"
                } :{ fontFamily: "Poppins-SemiBold",
                                fontSize: 8,
                            textAlign: "center",
                                marginTop: 5
                                    ,
                                color: "grey"
                                            }}>

                    settings
                </Text>

                </View>


            </TouchableHighlight>


        </View>
    )
}

const styles = StyleSheet.create({

    container: {

        backgroundColor: "white",
        borderTopColor: "black",
        borderTopWidth: 0.2,


        flexDirection: "row",
        justifyContent: "space-between",

        padding: 5,



    },

    home: {

        margin: 7


    },


    map: {

        margin: 7



    },

    library: {

        margin: 7



    },


    settings: {

        margin: 7




    },

    homeText: {

        fontFamily: "Poppins-SemiBold",
        fontSize: 8,
        textAlign: "center",
        marginTop: 3,
        color: "grey"

    }

    ,

    mapText: {

        fontFamily: "Poppins-SemiBold",
        fontSize: 8,
        textAlign: "center",
        marginTop: 3
        ,
        color: "grey"

    }
    ,

    libraryText: {

        fontFamily: "Poppins-SemiBold",
        fontSize: 8,
        textAlign: "center",
        marginTop: 3
        ,
        color: "grey"

    }

    ,

    settingsText: {

        fontFamily: "Poppins-SemiBold",
        fontSize: 8,
        textAlign: "center",
        marginTop: 5
        ,
        color: "grey"

    }

    ,

    activeText:{

        fontFamily: "Poppins-SemiBold",
        fontSize: 10,
        textAlign: "center",
        marginTop: 5
        ,
        color: "black"



    }







})

export default BottomNavigator