
import React from 'react';
import { View, ScrollView, TouchableOpacity,TouchableHighlight, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';



import Font from 'react-native-vector-icons/FontAwesome';
import FarmCard from './farm_components/farm_card';
import DynamicHeader from './farm_components/dynamicHeader';
import { Animated } from 'react-native';
import { useRef, useState } from 'react';
import db from '../../util/database';
import farmDetailsModal from './farm_components/farmDetailsModal';



// Now use the Farm interface in your component
interface FarmCardProps {
  
  
 
  location: string;

  farm_id: string;
  fullname:string;
  area_name:string;
  crop:string;
  variety:string;
 
  hectors: string;
  district: string;
}



const MyComponent = () => {

  const [farms, setFarms] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  let tempFarmData :any = [];


  const getFarmItems = async () => {

    try {

      const tx: any = await new Promise((resolve, reject) => {
        db.transaction((tx) => resolve(tx), reject);
      });

      const results: any = await new Promise((resolve, reject) => {
        tx.executeSql(

          'SELECT farm_id,variety,crop,Hectors,fullname,district,area_name FROM farms INNER JOIN crop ON crop.crop_id = farms.crop_id LEFT JOIN variety ON variety.variety_id = farms.variety_id INNER JOIN growers ON growers.grower_id = farms.grower_id',
          [],
          (tx: any, results: any) => resolve(results),
          (_: any, error: any) => reject(error)
        );
      });

      const len = results.rows.length;
      if (len > 0) {
      // getting each row and pushing it to the tempFamData array 
        for (let i = 0; i < len; i++) {
          tempFarmData.push(results.rows.item(i));   
          
        }
        // adding data to the setDfarms hook
        // I'm getting some sort of loop which is causing the app to under perfome
        // Need to the the last pushed item, after the last pushed item we should call the setFarms hook

        setFarms(tempFarmData)

      

      } else {
        // Sign-in failure code here

        console.log("Error getting data ")
      }
          // setFarms(tempFarmData)

    } catch (error) {
      // Error handling code here
      console.error("Error during sign-in:", error);
    }




  }

  getFarmItems()
  const handleItemClick = (item: any) => {
    // Handle the click action here
    console.log('Item clicked:', item);
  };
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const items: any = [];

  return (
    <SafeAreaView style={styles.container} >
      <DynamicHeader animHeaderValue={scrollOffsetY} />
      <ScrollView style={styles.scrollView}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}>
        {farms.map((farm : any)  => (
          <TouchableHighlight key={farm.farm_id} onPress={() => {console.log(farm)}} onLongPress={()=>{Alert.alert(farm.farm_id)}} activeOpacity={0.9}
          underlayColor="">
            <View  >
              <FarmCard farmDetails={farm} />
            </View>
          </TouchableHighlight>

        ))}
      </ScrollView>


    </SafeAreaView>

  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,

  },
  backItemsContainer: {

    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20



  },

  searchContainer: {

    margin: 30,


  },
  searchText: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgb(212,212,212)',
    height: 45,

  },

  customHeader: {
    fontFamily: "Poppins-Bold",

    color: "black",
    marginLeft: 15

  },
  backButton: {
    padding: 15,
    alignItems: "center",
    backgroundColor: 'rgb(247,247,249)',
    borderRadius: 10


  },
  scrollView: {
    backgroundColor: 'rgb(247,247,249)',

  },
  text: {
    fontSize: 42,
  },
});
export default MyComponent;