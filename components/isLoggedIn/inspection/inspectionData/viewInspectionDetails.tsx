import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Mate from 'react-native-vector-icons/Entypo'
import Font from 'react-native-vector-icons/FontAwesome';
import Ion from 'react-native-vector-icons/Ionicons';
import Font5 from 'react-native-vector-icons/FontAwesome5'
import InspectionCardComponent from './inspectionCardComponent';
import { NoDataCardComponent } from './inspectionCardComponent';
import { TouchableHighlight } from 'react-native';
import ViewInspection from '../viewInspection';
import Inspection from '../../../../models/inspection';
import { useInspectionfarmId } from '../../../../context/farmDetailsProvider';


const ViewInspectionDetails = ({ navigation }: any) => {

  useEffect(() => {
  GetVergitativeData()


  }, []);
  const { farmId } = useInspectionfarmId()
  const [vergitativeData,setVergitativeData] :any = useState([])
  const [floweringTempData, setFloweringData] = useState([])
  const [preHarvestData, setPreHarvestData] = useState([])


  


  const getData = async (inspectionType: string): Promise<object> => {

    const inspection = new Inspection('', '', farmId, 0, 0, inspectionType, 0, '', 0, 0, 0, 0, 0, 0, 0, 0, '')
    const inspectionData = await inspection.getInspectionData()
    if (inspectionData == null) {

      return {inspectionType:'no_data'}

    }
    else {
      console.log(inspectionData.inspection_time)
      const objectData = {
        inspectionType: inspectionType,
        inspectionTime: inspectionData.inspection_time,
        inspectionDate: inspectionData.inspection_Date,
      }
      return objectData
    }

  }


 


  const GetVergitativeData = async() =>{
    const data :any= await getData('vergitative')
    console.log(data.inspectionType)
    setVergitativeData(data)

    return(

      <View>
   
      </View>
      
      
    )


  }


  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>


        <View style={styles.headerWrapper}>

          <TouchableHighlight
            activeOpacity={2}
            underlayColor="green"
            style={{ borderRadius: 10 }}
            onPress={() => { navigation.navigate('farmLibrary') }}>

            <View style={styles.backButton}>
              <Mate
                name='chevron-left'
                size={20}
                color={'white'}

              />
            </View>
          </TouchableHighlight>
          <Text style={styles.idText}>ID: {farmId}</Text></View>




      </View>

      <View style={styles.bodyContainer}>

        <View style={styles.farmDetailsContainer}>

          <View style={styles.farmDetails}>

            <Font
              name="user"
              size={11}
              color="black"
              style={{

                color: "grey",
                borderColor: 'grey',
                borderWidth: 0.2,
                padding: 10,
                borderRadius: 100





              }}
            />

            <Text style={styles.growerDetailsText}>

              Wilson soza
            </Text>


          </View>

          <View style={styles.farmDetails}>

            <Font5
              name="seedling"
              size={11}
              color="black"
              style={{
                margin: 3,

                color: "grey",

                borderColor: 'grey',
                borderWidth: 0.2,
                padding: 6,
                borderRadius: 100


              }}
            />
            <View style={[styles.farmDetails, { padding: 5, paddingLeft: 0 }]}>

              <Text style={styles.cropDetailsText}>Maize ,</Text>
              <Text style={styles.cropDetailsText}>
                Tiwf
              </Text>

            </View>

          </View>

        </View>

        <ScrollView style={styles.inspectionCardContainer}
          showsVerticalScrollIndicator={false}>

{vergitativeData.inspectionType === 'no_data' ? <NoDataCardComponent navigation={navigation}/>:   <InspectionCardComponent /> }
{vergitativeData.inspectionType === 'no_data' ? <NoDataCardComponent navigation={navigation}/>:   <InspectionCardComponent /> }
{vergitativeData.inspectionType === 'no_data' ? <NoDataCardComponent navigation={navigation}/>:   <InspectionCardComponent /> }
           
        </ScrollView>

      </View>







    </View>
  )
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',

    backgroundColor: '#2DA15F'


  },

  headerContainer: {



    backgroundColor: '#2DA15F',




  },
  bodyContainer: {

    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: 'rgb(247,247,249)',
    paddingTop: 60


  },
  idText: {
    fontFamily: "Poppins-SemiBold",
    color: "white",
    fontSize: 11,


  },

  farmDetailsContainer: {

    margin: 10,
    borderBottomWidth: 0.3,
  },
  farmDetails: {

    flexDirection: 'row',

  },

  growerDetailsText: {

    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: 'black',
    padding: 3


  },

  cropDetailsText: {

    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: 'grey',
    padding: 2


  },

  inspectionCardContainer: {
    borderRadius: 30,
    borderColor: 'grey',


  },


  headerWrapper: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'


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
    borderColor: "grey"

  },
  titleWrapper: {


    flexDirection: "column",
    padding: 20,

  },

});

export default ViewInspectionDetails