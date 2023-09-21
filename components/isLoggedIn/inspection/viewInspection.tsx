

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Animated
} from 'react-native';
import { AnimationEventHandler } from 'react';
import { TouchableHighlight } from 'react-native';
import DataNotFound from '../../loaders/dataNotFound';
import GetData from './viewInspectionComponents/getData';
import Inspection from '../../../models/inspection';


import SelectedInspectionType from '../../../context/inspectionType';
import { useInspectionType } from '../../../context/inspectionType';
import { useInspectionfarmId } from '../../../context/farmDetailsProvider';


import Mate from 'react-native-vector-icons/Entypo'
import { Image } from 'react-native-elements';
import { number } from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Vergitative',
    color: "#C2E0C1"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Flowering',
    color: "#86C082"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Pre harvest',
    color: "#2DA15F"


  },


];




type ItemProps = { title: string };

const { width } = Dimensions.get('screen')

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const titleHeight = 25;
const DOT_SIZE = 40;

const screenWidth = Dimensions.get('window').width;


//  animating the instection type to change when we scroll the flatlist
const InspectionType = ({ scrollx }: any) => {




  const inputRange = [-width, 0, width]
  const translateY = scrollx.interpolate({
    inputRange,
    outputRange: [titleHeight, 0, -titleHeight]
  })

  return (

    <View style={styles.title}>

      <Animated.View style={{ transform: [{ translateY }] }}>
        {DATA.map(({ title }, index) => {


          return (

            <Text key={index} style={styles.titleText}>{title}</Text>)

        })}
      </Animated.View>


    </View>



  )


}











const ViewInspection = ({ navigation }: any) => {
  const { farmId } = useInspectionfarmId()

  //  storing inspection data 
  const [verigitativeData, setVergitativeData]:any= useState()
  const [floweringData, setFloweringData] = useState([])
  const [preHarvestData, setPreHarvestData] = useState([])



  useEffect(() => {

    setInspectionType(0)
    getInspectionData()
    getTempData()

  }, []);

    const getInspectionData = () => {
    const inspectioData = new Inspection('', '', farmId, 0, 0, 'vergitative', 0, '', 0, 0, 0, 0, 0, 0, 0, 0, '')
    inspectioData.getInspectionData()
  }


   
const getTempData = async()=>{


  try {
    const vergitativeValue: string | null = await AsyncStorage.getItem('vergitative-inspection-data');
    const floweringValue: string | null = await AsyncStorage.getItem('flowering-inspection-data');
    const preHarvestValue: string | null = await AsyncStorage.getItem('pre-harvest-inspection-data');

    if (vergitativeValue) { 
      const parsedData: any = JSON.parse(vergitativeValue);
       console.log(parsedData.inspectionTime)

       const vergitativeDataObject :any ={
        time:parsedData.inspectionTime
         
       }

       setVergitativeData(vergitativeDataObject)
       
      
    }
    else{
      console.log('empty')
    }
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }





}



  //  getting the current index on the flatlist and updating the insctionType contex, 0 = land-verification 1= vergitative 2= pre-harvest

  const scrollx = React.useRef(new Animated.Value(0)).current;
  const { inspectionType, setInspectionType } = useInspectionType()

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollx } } }],
    {
      useNativeDriver: true,
      listener: (event: any) => {
        const xOffset = event.nativeEvent.contentOffset.x;
        const index = Math.floor(xOffset / 300);
        setInspectionType(index);
        console.log(inspectionType)
      },
    }
  );

  return (


    <View style={styles.container}>



      <View>

        <View style={styles.headerWrapper}><TouchableHighlight
          activeOpacity={0.9}
          underlayColor="" onPress={() => navigation.navigate("farmLibrary")}><View style={styles.backButton}>

            <Mate
              name='chevron-left'
              size={15}
              color={'black'}
            />

          </View>
        </TouchableHighlight><View></View></View>
        <View style={styles.titleWrapper}><Text style={styles.heading}>Inspection</Text></View>


      </View>







      <View style={styles.body}>
        <SafeAreaView style={styles.mainContainer}>
          <Animated.FlatList
            data={DATA}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}

            onScroll={
              handleScroll

              //   Animated.event([{
              //   nativeEvent: { contentOffset: {x: scrollx } }




              // }], { useNativeDriver: true },
              // )
            }

            keyExtractor={(item) => item.id}
            scrollEventThrottle={16}
            renderItem={({ item, index }) => {



              return (<View style={styles.item}>

                <View>
                  <Text>
                      {verigitativeData ? "empty" : verigitativeData}

                  </Text>

                </View>






              </View>)
            }





            }

          />
        </SafeAreaView>







      </View>

      <TouchableHighlight activeOpacity={0.9}
        underlayColor="" style={styles.saveButton} onPress={() => { navigation.navigate("addInspection") }}>
        <View >


          <Text style={styles.saveText} > Add </Text>



        </View>
      </TouchableHighlight>


     

      <InspectionType scrollx={scrollx} />
    </View>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'




  },
  mainContainer: {


    backgroundColor: '#FFFFFF'

  },
  item: {
    width,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 3,
    borderWidth: 2,






    borderColor: "grey"




  },
  backButton: {

    padding: 10,
    borderRadius: 10,

    backgroundColor: "white",
    elevation: 2,
    borderColor: "grey"

  },
  body: {
    flexDirection: "column",
    justifyContent: "space-between"

  },

  titleWrapper: {


    flexDirection: "column",
    padding: 20,

  },

  noDataImage: {

    width: 300, height: 300,
    justifyContent: "center",

    alignItems: "center"

  },

  heading: {

    fontFamily: "Poppins-Medium",
    color: "black",
    fontSize: 15,
  },

  saveButton: {

    position: 'absolute',
    bottom: 0,
    width: width / 1.05,
    padding: 25,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#2DA15F",

  },

  headerWrapper: {
    padding: 20,

    flexDirection: "row",
    justifyContent: "space-between"

  },
  title: {
    position: "absolute",
    top: 120,
    left: 20,
    fontFamily: "Poppins-Medium",
    color: "black",

    height: titleHeight,
    overflow: 'hidden',
  },
  titleText: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    lineHeight: titleHeight,





    color: "grey",

  },
  pagination: {

    position: 'absolute',
    right: 20,
    top: 100,
    flexDirection: 'row',
    height: DOT_SIZE




  },

  paginationDotContainer: {

    alignItems: 'center',
    justifyContent: 'center',
    width: DOT_SIZE,





  },

  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,


  },

  paginationIndicator: {

    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd'

  },

  saveText: {



    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    fontSize: 12,
    color: "#FFFFFF"


  },
});

export default ViewInspection;