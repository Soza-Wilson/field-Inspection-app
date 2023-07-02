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
    const createTable = () => {
        db.transaction(async tx => {
            try {

                await tx.executeSql("CREATE TABLE IF NOT EXISTS "
                    + "user"
                    + "(user_ID varchar(100) PRIMARY KEY, fullname varchar(100),email varchar(100),password varchar(100),profile varchar(100))")

                await tx.executeSql("CREATE TABLE IF NOT EXISTS "
                    + "crop"
                    + "(crop_ID varchar(100) PRIMARY KEY,crop varchar(100))")

                await tx.executeSql("CREATE TABLE IF NOT EXISTS"
                    + "variety"
                    + "(variety_ID varchar(100) PRIMARY KEY, variety varchar(100),crop_ID varchar(100), FOREIGN KEY(crop_ID) REFERENCES crop(crop_ID))"

                )
                await tx.executeSql("CREATE TABLE IF NOT EXISTS"
                    + "grower"
                    + "(grower_id varchar(100) PRIMARY KEY,name varchar(100),phone varchar(100), email varchar(100), description varchar(100), creditor_status varchar(100))"
                )

                await tx.executeSql("CREATE TABLE IF NOT EXISTS"
                    + "farm"
                    + "( farm_ID varchar(100) PRIMARY KEY, Hectors varchar(100),crop_species varchar(100),crop_variety varchar(100), class varchar(100),region varchar(100), district varchar(100), area_name varchar(100), address varchar(100), physical_address varchar(300), EPA varchar(100),creditor_ID varchar(100), previous_year_crop varchar(100),other_year_crop varchar(100),longitude DICIMAL,latitude DICIMAL, FOREIGN KEY(crop_ID) REFERENCES crop(crop_ID),  FOREIGN KEY(variety_ID) REFERENCES variety(variety_ID),FOREIGN KEY(creditor_ID)REFERENCES grower(grower_ID))"
                )

                await tx.executeSql("CREATE TABLE IF NOT EXITS"
                    + "inspection"
                    + "(inspection_ID varchar(100) PRIMARY KEY,date varchar(100), time varchar(100), farm_ID varchar(100), user_ID varchar(100), type varchar(100), isolation varchar(100), planting_pattern varchar(100),off_type_percetage varchar(100), pest_disease_incidence varchar(100), defective_plants varchar(100),pollinating_females_percentage varchar(100),female_receptive_skills_percentage varchar(100), male_leimination varchar(100),off_type_cobs_at_shelling varchar(100), defective_cobs_at_shelling varchar(100),remarks varchar(100),image_directory varchar(100),FOREIGN KEY(farm_ID) REFERENCES farm(farm_ID),  FOREIGN KEY(user_ID) REFERENCES user(user_ID))")

                console.log("created");

            } catch (error) {

                console.log(error)

            }




        })
    }
    return null;
}

export default createDatabase

const styles = StyleSheet.create({})