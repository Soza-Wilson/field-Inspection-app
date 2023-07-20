import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { StyleSheet, } from 'react-native'
import { Sequelize } from 'sequelize';



// Creating database in sqlite 

const db = SQLite.openDatabase(

  {
    name: "local-db",
    location: "default"
  }, () => { console.log("database created succesfully") }, error => { console.log(error) }
);

// Creating required tables 
// db.transaction((tx) => {
//   tx.executeSql(
//     'CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY,name TEXT,email TEXT,passsword TEXT)',
//     [],
//     () => {
//       console.log('Users table created successfully');
//     },
//     (error) => {
//       console.error('Failed to create table:', error);
//     }
//   );
// });

db.transaction((tx) => {
  tx.executeSql(
    
        'CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY NOT NULL, name TEXT, email TEXT, [password] TEXT)',
        [],
        () => {
          console.log('Users table created successfully');
        },
        (error) => {
          console.error('Failed to create table:', error);
        }
      );
    },
    (error) => {
      console.error('Failed to drop table:', error);
    }
  );


db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS growers (grower_id TEXT PRIMARY KEY NOT NULL, fullname TEXT, email TEXT)',
    [],
    () => {
      console.log('Growers table created successfully');
    },
    (error) => {
      console.error('Failed to create table:', error);
    }
  );
});


db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS crop (crop_id TEXT PRIMARY KEY NOT NULL, crop TEXT)',
    [],
    () => {
      console.log('Crop table created successfully');
    },
    (error) => {
      console.error('Failed to create table:', error);
    }
  );
});



db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS variety (variety_id TEXT PRIMARY KEY NOT NULL, variety TEXT,crop_id TEXT, FOREIGN KEY(crop_id)  REFERENCES crop(crop_id))',
    [],
    () => {
      console.log('variety table created successfully');
    },
    (error) => {
      console.error('Failed to create table:', error);
    }
  );
});


db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS farms (farm_id TEXT PRIMARY KEY NOT NULL, hectors TEXT,region_id TEXT,district TEXT,area_name TEXT,address TEXT,physical_address TEXT,epa TEXT, crop_id TEXT, variety_id TEXT,grower_id TEXT, FOREIGN KEY(crop_id)  REFERENCES crop(crop_id),FOREIGN KEY(variety_id)  REFERENCES variety(variety_id),FOREIGN KEY(grower_id) REFERENCES growers(grower_id))',
    [],
    () => {
      console.log('Farms table created successfully');
    },
    (error) => {
      console.error('Failed to create table:', error);
    }
  );
});



export default db



