import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { StyleSheet, } from 'react-native'

const db = SQLite.openDatabase(

    {
        name: "STTSlite",
        location: "default"
    }, () => { }, error => { console.log(error) }
);

const createDatabase = () => {

    const createTable = () =>{

        db.transaction(async tx=>{

           await tx.executeSql("CREATE TABLE IF NOT EXISTS "
            +"user"
            +"(user_ID varchar(100) PRIMARY KEY, fullname varchar(100),email varchar(100),password varchar(100),profile varchar(100))")

           await tx.executeSql("CREATE TABLE IF NOT EXISTS "
           + "crop"
           +"(crop_ID varchar(100) PRIMARY KEY,crop varchar(100))")  

           await tx.executeSql("CREATE TABLE IF NOT EXISTS")
           +""
        })
    }
    return (
        <View>
            <Text>databasee</Text>
        </View>
    )
}

export default createDatabase

const styles = StyleSheet.create({})