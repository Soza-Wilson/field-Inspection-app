
import React from 'react';
import { View, ScrollView, TouchableOpacity, TouchableHighlight, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';



import Font from 'react-native-vector-icons/FontAwesome';
import FarmCard from './farm/farm_card';
import DynamicHeader from './farm/dynamicHeader';
import { Animated } from 'react-native';
import { useRef, useState } from 'react';
import db from '../../util/database';
import farmDetailsModal from './farm/farmDetailsModal';
import { useEffect } from 'react';
import FarmDetailsModal from './farm/farmDetailsModal';
import BottomNavigator from '../navigation/custom/bottomNavigator';




// Now use the Farm interface in your component
interface FarmCardProps {



  location: string;

  farm_id: string;
  fullname: string;
  area_name: string;
  crop: string;
  variety: string;

  hectors: string;
  district: string;
}



const MyComponent = ({navigation}:any) => {

  // hooks

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [farms, setFarms] = useState([])
  const [farmDetails, setFarmDetails] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  let tempFarmData: any = []

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  //  Calling the getFarmsItems in the main library component was causing an infinity loop , instead i have used the use effect hook
  useEffect(() => {
    const timer = setTimeout(() => {

      getFarmItems();

    }, 0);
    //  <createDatabase/>
    return () => clearTimeout(timer); // Clear the timer if the component unmounts

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);





  const handleLongPress = (farm_id:string,grower_name:string,crop:string,variety:string,hectors:string,district:string,area_name:string,physical_address:string) => {

   let farmDetails : any = [farm_id,grower_name,crop,variety,hectors,district,area_name,physical_address,]
    setFarmDetails(farmDetails)
    handleOpenModal();

   



  };


  const getFarmItems = async () => {


    try {


      //  using async and await to wait for the data to be retrived first before displaying the data 
      const tx: any = await new Promise((resolve, reject) => {
        db.transaction((tx) => resolve(tx), reject);
      });

      const results: any = await new Promise((resolve, reject) => {
        tx.executeSql(

          // query for getting all registered farms 

          'SELECT farm_id,variety,crop,Hectors,fullname,physical_address,district,area_name FROM farms INNER JOIN crop ON crop.crop_id = farms.crop_id LEFT JOIN variety ON variety.variety_id = farms.variety_id INNER JOIN growers ON growers.grower_id = farms.grower_id',
          [],
          (tx: any, results: any) => resolve(results),
          (_: any, error: any) => reject(error)
        );
      });

      const len = results.rows.length;

      if (len > 0) {
        // getting each row and pushing it to the tempFamData array 
        for (let i = 0; i < len; i++) {

          tempFarmData.push(results.rows.item(i))
        }
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














  //  adding default value for animating the header 



  const scrollOffsetY = useRef(new Animated.Value(0)).current;


  return (
    <View style={styles.container} >
       <DynamicHeader animHeaderValue={scrollOffsetY} />
      <View style={styles.viewWrappper}>
     
      <ScrollView style={styles.scrollView}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}>


      
        {farms.map((farm: any) => (
          <View key={farm.farm_id}>
            <TouchableHighlight  onPress={() => { console.log(farm) }} onLongPress={() => { handleLongPress(farm.farm_id,farm.fullname,farm.crop,farm.variety,farm.hectors,farm.district,farm.area_name,farm.physical_address) }} activeOpacity={0.9}
              underlayColor="">
              <View  >
                <FarmCard farmDetails={farm} />
              </View>
            </TouchableHighlight>

            

          </View>

        ))}
      </ScrollView>

      </View>

      
              <FarmDetailsModal visible={isModalOpen} onClose={handleCloseModal} >

             <View style={styles.growerWrapper}><Text style={styles.growerModalNameTitle}>Grower name: </Text><Text style={styles.growerModalName}> {farmDetails[1]}</Text></View> 

             <View style={styles.modalSeparator}></View>
             <View style={styles.growerWrapper}><Text style={styles.growerModalNameTitle}>Crop: </Text><Text style={styles.cropDetailsText}> {farmDetails[2]}</Text></View> 
             <View style={styles.growerWrapper}><Text style={styles.growerModalNameTitle}>Variety: </Text><Text style={styles.cropDetailsText}> {farmDetails[3]}</Text></View> 
             <View style={styles.growerWrapper}><Text style={styles.growerModalNameTitle}>Class: </Text><Text style={styles.cropDetailsText}> -</Text></View> 
             <View style={styles.growerWrapper}><Text style={styles.growerModalNameTitle}>Hectors: </Text><Text style={styles.cropDetailsText}> {farmDetails[4]}</Text></View> 

             <View style={styles.modalSeparator}></View>

             <View style={styles.growerWrapper}><Text style={styles.growerModalNameTitle}>District: </Text><Text style={styles.cropDetailsText}> {farmDetails[5]}</Text></View> 
             <View style={styles.growerWrapper}><Text style={styles.growerModalNameTitle}>Area name : </Text><Text style={styles.cropDetailsText}> {farmDetails[6]}</Text></View> 
            
             <View style={styles.modalSeparator}></View>


             <View style={styles.growerWrapper}><Text style={styles.growerModalNameTitle}>Physical Address: </Text></View> 
             <Text style={styles.cropDetailsText}>{farmDetails[7]}</Text>
          
            
             <View style={styles.modalSeparator}></View>

             

             
            


            </FarmDetailsModal>


      
      <BottomNavigator navigation={navigation} page={"library"}/>

     
    </View>

  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
   
    justifyContent:"space-between"

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

  viewWrappper:{

    flex:1,
  },
  text: {
    fontSize: 42,
  },


  // style for modal items 

  growerWrapper: {
    flexDirection:"row"


  },

  growerModalNameTitle:{

    fontFamily:"Poppins-SemiBold",
    fontSize:10,
  color:"grey"
  },
  growerModalName:{

    fontFamily:"Poppins-SemiBold",
    fontSize:13,
  color:"black"

  },
 cropDetailsText:{


  
  fontFamily:"Poppins-Medium",
  fontSize:11,
color:"black"


 },
 modalSeparator:{


  borderBottomColor: 'black',
  borderBottomWidth: 2,
  marginTop:5

 }

});
export default MyComponent;