import { View, Text, Pressable, StyleSheet, Switch } from 'react-native'
import Material from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Mate from 'react-native-vector-icons/Entypo'
import React, { useRef, useState } from 'react'
import HistoryCardData from './historyCardData';
// import ConfigureDeviceBottomSheet from '../../inspection/inspectionData/bottomSheet/configureDeviceBottomSheet';

import Inspection from '../../../../models/inspection'
import { ScrollView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';



const SyncData = () => {
  const inspection = new Inspection("", "", "", 0, 0, "", 0, "", 0, 0, 0, 0, 0, 0, 0, 0, "",)
  const [deleteOnUpload, setDeleteOnUpload]: any = useState(false)
  const [showEditdataSheet,setShowEditDataSheet]:any = useState(false);
  const toggleSwitch = () => setDeleteOnUpload(true );
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [modalTitle, setModalTitle]= useState('BottomTitle');


  const getInspectionData = async () => {
    const data: any = await inspection.getAllData()


    data.forEach((element: any) => {
      console.log(element.farm_id)

    });
  }


  const sendInspectionData = async () => {

  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => getInspectionData()} style={styles.syncDataContainer}>
        <View style={styles.currentDataDetailsContainer}>



          <MaterialIcons

            name="database-sync"
            size={20}
            color="white"
            style={{ margin: 7 }}
          />

          <Text style={[styles.settingText, { color: 'white' }]}>Sync Data</Text>


        </View>

        <View style={styles.currentIconDetailsContainer} >

          <Mate
            name='chevron-right'
            size={25}
            color={'green'}
            style={{ margin: 7 }}
          />


        </View>

      </Pressable>

      <View style={styles.systemSettings}>

        <View style={styles.settingsHeader}>
          <Text style={styles.settingsHeaderText}>Settings</Text>
          <Text style={[styles.mainText, { color: 'grey', textAlign: 'center' }]}>Send data Options</Text>

        </View>

        <View style={styles.settingContainer}>

          <Text style={styles.settingText}>

            Delete sent data

          </Text>

          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={deleteOnUpload ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={deleteOnUpload} />


        </View>

        <View style={styles.settingContainer}>

          <Text style={styles.settingText}>
            Include Images

          </Text>

          <Switch value={deleteOnUpload} onChange={() => setDeleteOnUpload(false)} />


        </View>
        <View style={styles.settingContainer}>

           <Pressable onPress={()=>{}}>
          <Text style={[styles.settingText, { backgroundColor: '#2DA15F', color: 'white', padding: 10, borderRadius: 20 }]}>
            Configure device

          </Text>
          </Pressable> 

          <Text style={[styles.settingText, { backgroundColor: 'red', color: 'white', padding: 10, borderRadius: 20 }]}>
            Reset device

          </Text>




        </View>



      </View>

      <View style={styles.historyContainer}>
        <View style={styles.settingsHeader}>
          <Text style={styles.settingsHeaderText}>History</Text>
          <Text style={[styles.mainText, { color: 'grey', textAlign: 'center' }]}>Sent data details</Text>

        </View>

        <ScrollView style={styles.historyDataContainer} showsVerticalScrollIndicator={false}>

          <HistoryCardData />

          <HistoryCardData />


          <HistoryCardData />


          <HistoryCardData />


          <HistoryCardData />


          <HistoryCardData />



          <HistoryCardData />


          <View style={{height:100}}>

          </View>


        </ScrollView>


      </View>

     {/* <ConfigureDeviceBottomSheet ref={bottomSheetRef} title={modalTitle}/> */}

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',



  },
  mainText: {

    fontFamily: 'Poppins-Medium',
    fontSize: 8,
    color: 'white'
  },

  settingText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 8,
    color: 'black'

  },
  settingsHeaderText: {
    textAlign: 'center', fontFamily: 'Poppins-Bold', fontSize: 12, color: 'black'

  }
  ,


  systemSettings: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20

  },
  syncHistory: {


  },
  syncDataContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 10,
    margin: 10,






  },
  currentDataDetailsContainer: {
    backgroundColor: '#2DA15F',
    paddingTop: 30, paddingBottom: 30,
    paddingLeft: 50, paddingRight: 50,
    borderBottomRightRadius: 60,
    borderBottomleftRadius: 5,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'




  },
  currentIconDetailsContainer: {
    backgroundColor: 'white',
    paddingTop: 30, paddingBottom: 30,
    paddingLeft: 50, paddingRight: 50


  }, settingContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 40

  }
  , settingsHeader: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    margin: 10


  }
  ,
  historyContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20
  },
  historyDataContainer: {
    height: "55%"
  }
})




export default SyncData