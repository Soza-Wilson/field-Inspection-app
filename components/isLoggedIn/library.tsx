
import React from 'react';
import { View, ScrollView, TouchableOpacity, TouchableHighlight, Text, StyleSheet, SafeAreaView, Alert, TextInput } from 'react-native';



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
import { useInspectionfarmId } from '../../context/farmDetailsProvider';
import Farm from '../../models/farm';
import Ion from 'react-native-vector-icons/Ionicons';
import SelectedGrowerName, { useInspectionType } from '../../context/growerSearch';
import Util from '../../models/Util'
import ListSkeloton from '../skelotons/listSkeloton';




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



const MyComponent = ({ navigation }: any) => {

  // hooks

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [farms, setFarms] = useState([])
  const [farmDetails, setFarmDetails] = useState([])

  const { growerName } = useInspectionType()
  const util = new Util()
  const farm = new Farm("", "", "", "", "", "", "", "", "", "", "")
  let tempFarmData: any = []

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // This function will run whenever contextData changes
    if (growerName != null) {
      searchByGrowerName(growerName);
    }else{
      getFarmItems()
    }
  }, [growerName]);

  //  Calling the getFarmsItems in the main library component was causing an infinity loop , instead i have used the use effect hook
 


  const handleLongPress = (farm_id: string, grower_name: string, crop: string, variety: string, hectors: string, district: string, area_name: string, physical_address: string) => {

    const name = util.setCapitalLatter(grower_name);
    let farmDetails: any = [farm_id, name, crop, variety, hectors, district, area_name, physical_address,]
    setFarmDetails(farmDetails)
    handleOpenModal();


  };

  const getFarmItems = async () => {
    const data = await farm.getFarmItems();
    const len = data.rows.length;

    if (len > 0)
      for (let i = 0; i < len; i++) {
        tempFarmData.push(data.rows.item(i))
      }



    setFarms(tempFarmData)

  }

  const searchByGrowerName = async (growerName: string) => {
    const data = await farm.searchFarmByGrower(growerName)
    if (data != 'None'){
      const len = data.rows.length;
      if (len > 0)
        for (let i = 0; i < len; i++) {
          tempFarmData.push(data.rows.item(i))
        }
      setFarms(tempFarmData)

    }

  }




  //  adding default value for animating the header 

  const searchText = () => {
    return (
      <View style={styles.searchContainer}>

        <Ion
          name="ios-search"
          size={15}
          color="grey"
          style={{

            padding: 10
          }}
        />
        <TextInput
          style={styles.searchText}
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"

          placeholder="Enter grower name...">

        </TextInput>

      </View>
    )
  }



  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const { setFarmId } = useInspectionfarmId();


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

              {/* passing the selected farm to the grobal context and navigating to the viewInspection page  */}
              <TouchableHighlight onPress={() => { [setFarmId(farm.farm_id), navigation.navigate('viewInspection')] }} onLongPress={() => { handleLongPress(farm.farm_id, farm.fullname, farm.crop, farm.variety, farm.hectors, farm.district, farm.area_name, farm.physical_address) }} activeOpacity={0.9}
                underlayColor="">
                <View  >
                  <FarmCard farmDetails={farm}growerName={util.setCapitalLatter(farm.fullname)} />
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



      <BottomNavigator navigation={navigation} page={"library"} />


    </View>

  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "space-between"

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

    backgroundColor: 'rgb(240,240,240)',

  },

  viewWrappper: {

    flex: 1,
  },
  text: {
    fontSize: 42,
  },


  // style for modal items 

  growerWrapper: {
    flexDirection: "row"


  },

  growerModalNameTitle: {

    fontFamily: "Poppins-SemiBold",
    fontSize: 10,
    color: "grey"
  },
  growerModalName: {

    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
    color: "black"

  },
  cropDetailsText: {



    fontFamily: "Poppins-Medium",
    fontSize: 11,
    color: "black"


  },
  modalSeparator: {


    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginTop: 5

  }

});
export default MyComponent;