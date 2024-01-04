import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EditDataBottomSheet from './bottomSheet/editDataBottomSheet';
import EditInspectionDetails, { UseEditDataContext } from '../../../../context/editInspectionDetails';
import BottomSheetContextStatusProvider, { UseBottomSheetProvider } from '../../../../context/bottomSheetEditor';
import EditDataProvider from '../../../../context/editInspectionDetails';


interface dornatChartProps {
  title: string,
  numberValue: number
  good: boolean
  inspectionId: string
  dbParamName: string
  dataType: string
  

}


const DonartChartComponent = (Props: dornatChartProps) => {

  const {bottomSheetStatus,setBottomSheetStatus}: any = UseBottomSheetProvider()
  const {inspectionData,setInspectionData} :any = UseEditDataContext() 


  return (
   

      <View>
        <View style={styles.container}>

          <Text style={styles.headingText}>

            {Props.title}
          </Text>

          <View></View>


          <View style={styles.progress}>
            <AnimatedCircularProgress
              size={50}
              width={8}
              fill={Props.numberValue == null ? 0 : Props.numberValue}
              delay={700}
              rotation={0}
              tintColor={Props.good ? "#2DA15F" : 'tomato'}
              backgroundColor='lightgrey'
            >
              {
                (fill) => (
                  <Text style={[{ fontFamily: 'Poppins-SemiBold', fontSize: 10 }]}>
                    {Props.numberValue} %
                  </Text>
                )
              }
            </AnimatedCircularProgress>

          </View>

        </View>
        <Pressable onPress={() => {[(bottomSheetStatus ? setBottomSheetStatus(false):setBottomSheetStatus(true)),(setInspectionData([Props.inspectionId,Props.title,Props.numberValue,Props.dbParamName]))]}} style={styles.editButton}>

          <MaterialIcons
            name='pen'
            size={15}
            color={'grey'}
            style={{ margin: 15, marginLeft: 20, color: "#2DA15F" }}
          />


        </Pressable>


      </View>

    






  )
}

const styles = StyleSheet.create({

  container: {

    borderWidth: 0.4,
    borderColor: '#2DA15F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 5,
    borderTopLeftRadius:30,
    borderBottomRightRadius:30,
    borderBottomLeftRadius: 30,

  },

  headerContainer: {
    backgroundColor: '#2DA15F',
  },

  headingText: {

    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    textAlign: 'center',
    margin: 30




  },

  progress: {
    elevation: 10,
    borderWidth: 4,
    borderColor: '#2DA15F',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10
  },
  editButton: {
    elevation: 13,
    position: 'absolute',
    top: 0,
    right: 3




  }

})


export default DonartChartComponent





