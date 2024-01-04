import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const ListSkeloton = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.content}>

               
                </View>

            </View>

            <View style={styles.card}>
                <Text>wdqdwwe</Text>

            </View>

            <View style={styles.card}>
                <Text>wdqd</Text>

            </View>

            <View style={styles.card}>
                <Text>wdqd</Text>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column",


    },

    card: {
        
       
        backgroundColor: 'rgb(211,211,211)',
        borderRadius: 20,
        marginBottom: 10,
        
        width:'100%',
        height:'20%'




    },content:{
        backgroundColor:'red',
        padding:10
      


    }


})

export default ListSkeloton