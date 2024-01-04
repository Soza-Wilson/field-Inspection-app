import { View, Text, StyleSheet, ScrollView, TouchableHighlight, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import DonartChartComponent from './donartChartComponent'
import Mate from 'react-native-vector-icons/Entypo'
import Font from 'react-native-vector-icons/FontAwesome5'
import TextDataComponent from './textDataComponent'
import { useRef, useState } from 'react';

import { NavigationScreenProp } from 'react-navigation';
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

import { color } from 'react-native-elements/dist/helpers'
import MapBottomSheet from './bottomSheet/mapBottomSheet'
import ImagesBottomSheet from './bottomSheet/imagesBotttomSheet'
import DeleteDataBottomSheet from './bottomSheet/editDataBottomSheet'
import EditDataBottomSheet from './bottomSheet/editDataBottomSheet'
import BottomSheetContextStatusProvider, { UseBottomSheetProvider } from '../../../../context/bottomSheetEditor'

export interface ViewDetailsScreenProps {
  navigation: NavigationScreenProp<any, any>
  route: any

};

const ViewDetailsData = (Props: ViewDetailsScreenProps) => {

  const { bottomSheetStatus }: any = UseBottomSheetProvider()
  const [bottomSheetType, setBottomSheetType]: any = useState(null);
  const [viewOptions, setViewOptions] = useState(false)
  const [inspectionData, setInspectionData]: any = useState({})
  useEffect(() => {
    setInspectionData(Props.route.params.inspectionData)
  })

  const scrollOffsetX = useSharedValue(0);

  const width = useSharedValue(0);
  const height = useSharedValue(0);
  const borderRadious = useSharedValue(0);
  const isOpen = useSharedValue(false);
  const padding = useSharedValue(0);
  const progress = useDerivedValue(() => isOpen.value ? withTiming(1) : withTiming(0),);
  const handleOpen = () => {

    if (!isOpen.value) {
      width.value = withSpring(150);
      height.value = withSpring(150);
      borderRadious.value = withSpring(10);
      padding.value = (20);
      isOpen.value = true;
    }
  }

  const handleClose = () => {
    if (isOpen.value) {
      width.value = withTiming(0);
      height.value = withTiming(0);
      borderRadious.value = withTiming(0);
      padding.value = (0);
      isOpen.value = false;
    }

  }
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      borderRadius: borderRadious.value,
      padding: padding.value,



    }
  })



 
  const OptionsComponant = () => {




    return (

      <Animated.View style={[styles.optionsPopUp, animatedStyle]}>

        <Pressable onPress={() => ([handleClose(), setBottomSheetType('images')])} style={{ flexDirection: 'row', borderBottomWidth: 0.2, borderBottomColor: 'black' }}>


          <Font


            name='image'
            size={12}
            color={'black'}
            style={{ margin: 7 }}

          />
          <Text style={[styles.headingText, { color: 'grey', fontSize: 12, }]}>
            View images
          </Text>

        </Pressable>
        <Pressable onPress={() => ([handleClose(), setBottomSheetType('map')])} style={{ flexDirection: 'row', borderBottomWidth: 0.2, borderBottomColor: 'black' }}>


          <Font


            name='map'
            size={12}
            color={'black'}
            style={{ margin: 7 }}

          />
          <Text style={[styles.headingText, { color: 'grey', fontSize: 12, }]}>
            Location
          </Text>

        </Pressable>


        <View style={{ flexDirection: 'row' }}>

          <Font

            name='trash'
            size={12}
            color={'black'}
            style={{ margin: 7 }}

          />
          <Text style={[styles.headingText, { color: 'grey', fontSize: 12, }]}>
            Delete data
          </Text>

        </View>
      </Animated.View>






    )



  }


  const VergitativeDataComponant = () => {

    return (


      <View style={{ marginTop: 20, flex: 1, backgroundColor: 'rgb(247,247,249)', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 10, }}>

        <ScrollView showsVerticalScrollIndicator={false}>


          <TextDataComponent title='Isolation Distance' content={Props.route.params.inspectionData.isolationDistance} />
          <TextDataComponent title='Planting Pattern' content={Props.route.params.inspectionData.plantingPattern} />
          <DonartChartComponent inspectionId={Props.route.params.inspectionData.inspectionId} dbParamName={'off_type_percentage'} numberValue={Props.route.params.inspectionData.offTypePercentage} title={'Off type percentage '} dataType={'int'} good={false} />
          <DonartChartComponent inspectionId={Props.route.params.inspectionData.inspectionId} dbParamName={'pest_diease_incidence'} numberValue={Props.route.params.inspectionData.pestDeseaseIncidence} title={'Pest disease incidence '} dataType={'int'} good={false} />
          <DonartChartComponent inspectionId={Props.route.params.inspectionData.inspectionId} dbParamName={'defective_plants'} numberValue={Props.route.params.inspectionData.defectivePlants} title={'Defective Plants '} dataType={'int'} good={false} />
          <TextDataComponent title='Inspection remarks' content={Props.route.params.inspectionData.remarks} />
          <View style={{ height: 50 }}></View>

        </ScrollView>
        {bottomSheetType == 'map' ? <MapBottomSheet /> : bottomSheetType == 'images' ? <ImagesBottomSheet inspectionId={Props.route.params.inspectionData.inspectionId} /> : bottomSheetType == 'images' ? <DeleteDataBottomSheet /> : <View></View>}
        {bottomSheetStatus ? <EditDataBottomSheet /> : <View></View>}

      </View>






    )

  }

  const FloweringDataComponant = () => {

    return (

      <View style={{ marginTop: 10, flex: 1, backgroundColor: 'rgb(247,247,249)', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 10, }}>
        <ScrollView

          showsVerticalScrollIndicator={false}>
          <DonartChartComponent inspectionId={Props.route.params.inspectionData.inspectionId} dbParamName={'pollinating_females'} numberValue={Props.route.params.inspectionData.pollinatingFemales} title={'Pollinating females '} dataType={'int'} good />
          <DonartChartComponent inspectionId={Props.route.params.inspectionData.inspectionId} dbParamName={'female_receptive_skills'} numberValue={Props.route.params.inspectionData.femalesReceptiveSkills} title={'Female receptive skills '} dataType={'int'}good />
          <DonartChartComponent inspectionId={Props.route.params.inspectionData.inspectionId} dbParamName={'male_elemination'} numberValue={Props.route.params.inspectionData.maleElemination} title={'Male elemination '} dataType={'int'} good />
          <DonartChartComponent inspectionId={Props.route.params.inspectionData.inspectionId} dbParamName={'pest_disease_incidence'} numberValue={Props.route.params.inspectionData.pestDeseaseIncidence} title={'Pest disease incidence'} dataType={'int'} good={false} />
          <TextDataComponent title='Inspection remarks' content={Props.route.params.inspectionData.remarks} />
          <View style={{ height: 50 }}></View>
        </ScrollView>
        {bottomSheetType == 'map' ? <MapBottomSheet /> : bottomSheetType == 'images' ? <ImagesBottomSheet inspectionId={Props.route.params.inspectionData.inspectionId}  /> : bottomSheetType == 'images' ? <DeleteDataBottomSheet /> : <View></View>}
        {bottomSheetStatus ? <EditDataBottomSheet /> : <View></View>}
      </View>




    )




  }

  const PreHarvestDataComponent = () => {

    return (


      <View style={{ marginTop: 10, flex: 1, backgroundColor: 'rgb(247,247,249)', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 10, }} >

        <DonartChartComponent inspectionId={Props.route.params.inspectionData.inspectionId} dbParamName={'off_typecobs_at_shelling'} numberValue={Props.route.params.inspectionData.offTypeCobs} title={'Off type cobs at shelling '} dataType={'int'} good={false} />
        <DonartChartComponent inspectionId={Props.route.params.inspectionData.inspectionId} dbParamName={'defective_cobs_at_shelling'} numberValue={Props.route.params.inspectionData.defectiveCobs} title={'Defective cobs at shelling '} dataType={'int'} good={false} />
        <TextDataComponent title='Inspection remarks' content={Props.route.params.inspectionData.remarks} />
        <View style={{ height: 50 }}></View>
        {bottomSheetType == 'map' ? <MapBottomSheet /> : bottomSheetType == 'images' ? <ImagesBottomSheet  inspectionId={Props.route.params.inspectionData.inspectionId}/> : bottomSheetType == 'images' ? <DeleteDataBottomSheet /> : <View></View>}
        {bottomSheetStatus ? <EditDataBottomSheet /> : <View></View>}
      </View>





    )




  }

  return (
    <View style={styles.body}>
      <View style={styles.headerContainer}>

        <TouchableHighlight
          activeOpacity={2}
          underlayColor="green"
          style={styles.backButton} onPress={() => {
            Props.navigation.navigate('viewInspection')


          }}>

          <Mate
            name='chevron-left'
            size={20}
            color={'white'}
          />

        </TouchableHighlight >




        <Text style={styles.headingText}>

          {inspectionData.inspectionType === 'vergitative' ? 'Vergitative' : inspectionData.inspectionType === 'flowering' ? 'Flowering' : 'Pre harvest'} details

        </Text>

        <TouchableHighlight activeOpacity={2}
          underlayColor="green" style={{ padding: 5, borderRadius: 10 }} onPress={() => {
            handleOpen(),
              handleClose()
            setBottomSheetType(null)
          }}>

          <Font
            name='list'
            size={14}
            color={'white'}

          />


        </TouchableHighlight>


      </View>

      {inspectionData.inspectionType === 'vergitative' ? <VergitativeDataComponant /> : inspectionData.inspectionType === 'flowering' ? <FloweringDataComponant /> : <PreHarvestDataComponent />}



      <OptionsComponant />
  






    </View>

  )
}

const styles = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: '#2DA15F',





  },

  container: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30


  },

  headerContainer: {

    backgroundColor: '#2DA15F',
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'




  },

  headingText: {

    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    padding: 5,
    textAlign: 'center',
    color: 'white'

  },
  backButton: {
    padding: 5,
    borderRadius: 5


  },
  optionsPopUp: {

    position: 'absolute',
    top: 50,
    right: 50,
    backgroundColor: 'white',
    elevation: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'

  }

})
export default ViewDetailsData