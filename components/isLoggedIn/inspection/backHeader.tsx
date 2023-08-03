import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Mate from 'react-native-vector-icons/Entypo'

const BackHeader = () => {
  return (

     <View>
                <View style={styles.headerWrapper}><View style={styles.backButton}>
                    <Mate
                        name='chevron-left'
                        size={15}
                        color={'black'}
                    />
                </View><View></View></View>
                <View style={styles.titleWrapper}><Text style={styles.heading}>Inspection</Text><Text style={styles.title}>Land verification</Text></View>

    </View>
  )
}

const styles = StyleSheet.create({

  

    

    headerWrapper: {
        padding: 20,

        flexDirection: "row",
        justifyContent: "space-between"

    },
    heading: {

        fontFamily: "Poppins-Medium",
        color: "black",
        fontSize: 15,
    },
    title: {

        fontFamily: "Poppins-Medium",
        color: "grey",
        fontSize: 13,


    },

    backButton: {

        padding: 10,
        borderRadius: 10,

        backgroundColor: "white",
        elevation: 2,
        borderColor: "grey"

    },
    titleWrapper: {


        flexDirection: "column",
        padding: 20,

    },

});

export default BackHeader