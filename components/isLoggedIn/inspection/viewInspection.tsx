

import React from 'react';
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



import Mate from 'react-native-vector-icons/Entypo'
import { Image } from 'react-native-elements';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Land verification',
    color: "#C2E0C1"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Vergitative',
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

  return (<View style={styles.title}>

    <Animated.View style={{ transform: [{ translateY }] }}>
      {DATA.map(({ title }, index) => {
        return <Text key={index} style={styles.titleText}>{title}</Text>

      })}
    </Animated.View>


  </View>



  )


}

const Pagination = ({ scrollx }: any) => {

  const inputRange = [-width, 0, width]
  const translateX = scrollx.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE]
  })


  return (

    <View style={styles.pagination}>

      <Animated.View style={[styles.paginationIndicator, {
        position: 'absolute',

        transform: [{ translateX }]
      }]}

      />




      {DATA.map((item => {

        return (

          <View key={item.id} style={styles.paginationDotContainer}>

            <View

              style={[styles.paginationDot, { backgroundColor: item.color }]}>


            </View>




          </View>
        )


      }))}


    </View>



  )
}


const ViewInspection = ({ navigation }: any) => {

  const scrollx = React.useRef(new Animated.Value(0)).current;

  return (<View style={styles.container}>



    
      <View>

        <View style={styles.headerWrapper}><TouchableHighlight 
         activeOpacity={0.9}
         underlayColor="" onPress={() => navigation.navigate("farmLibrary") }><View style={styles.backButton}>
        
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
          onScroll={Animated.event([{
            nativeEvent: { contentOffset: { x: scrollx } }

          }], { useNativeDriver: true }
          )}

          keyExtractor={(item) => item.id}
          scrollEventThrottle={16}
          renderItem={({ item, index }) =>

          <View style={styles.item}>

              <Image source={require("../../../assets/images/no_data.png")}
          style={styles.noDataImage}

        
        ></Image>

        <Text style={{fontFamily:"Poppins-SemiBold",
      fontSize:11,
      color:"grey"}}>
          No Data Found !!
        </Text>



              
           

          </View>

           
          }

        />
      </SafeAreaView>
    
      <View style={styles.saveButton}>
      <TouchableHighlight onPress={()=>navigation.navigate("addInspection")}>

      <Text style={styles.saveText} > Add </Text>

      </TouchableHighlight>

      </View>



     
      

    </View>

    <Pagination scrollx={scrollx} />

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
    justifyContent:"center",
    
    alignItems: "center"

  },

  heading: {

    fontFamily: "Poppins-Medium",
    color: "black",
    fontSize: 15,
  },

  saveButton: {

    marginTop: 165,
    padding: 20,
    margin: 10,
    borderRadius: 10,
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
    color: "white",
    fontFamily: "Poppins-Medium"




  },
});

export default ViewInspection;