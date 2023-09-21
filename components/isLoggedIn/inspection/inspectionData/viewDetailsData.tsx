import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import DonartChartComponent from './donartChartComponent'
import Mate from 'react-native-vector-icons/Entypo'
import Font from 'react-native-vector-icons/FontAwesome5'
import TextDataComponent from './textDataComponent'

import { NavigationScreenProp } from 'react-navigation';

export interface ViewDetailsScreenProps {
  navigation: NavigationScreenProp<any, any>
  route: any

};

const ViewDetailsData = (Props: ViewDetailsScreenProps) => {

  const [viewOptions, setViewOptions] = useState(false)
  const [inspectionData, setInspectionData]: any = useState({})
  useEffect(() => {
    setInspectionData(Props.route.params.inspectionData)
    console.log(Props.route.params.inspectionData)
  })


  const OptionsComponant = () => {

    if (viewOptions) {
      return (

        <View style={styles.optionsPopUp}>

          <View style={{ flexDirection: 'row', borderBottomWidth: 0.2, borderBottomColor: 'black' }}>


            <Font


              name='image'
              size={12}
              color={'black'}
              style={{ margin: 7 }}

            />
            <Text style={[styles.headingText, { color: 'grey', fontSize: 12,  }]}>
              View images
            </Text>

          </View>
          <View style={{ flexDirection: 'row', borderBottomWidth: 0.2, borderBottomColor: 'black' }}>


            <Font


              name='map'
              size={12}
              color={'black'}
              style={{ margin: 7 }}

            />
            <Text style={[styles.headingText, { color: 'grey', fontSize: 12,  }]}>
              Location
            </Text>

          </View>

          <View style={{ flexDirection: 'row' }}>

            <Font

              name='pen'
              size={12}
              color={'black'}
              style={{ margin: 7 }}

            />
            <Text style={[styles.headingText, { color: 'grey', fontSize: 12 }]}>
              Edit data
            </Text>

          </View>
          <View style={{ flexDirection: 'row' }}>

            <Font

              name='trash'
              size={12}
              color={'black'}
              style={{ margin: 7 }}

            />
            <Text style={[styles.headingText, { color: 'grey', fontSize: 12,  }]}>
              Delete data
            </Text>

          </View>
        </View>






      )
    }


  }


  const VergitativeDataComponant = () => {

    return (


      <ScrollView style={{ marginTop: 10, flex: 1, backgroundColor: 'rgb(247,247,249)', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 30,paddingBottom: 30, }} showsVerticalScrollIndicator={false}>


        <TextDataComponent title='Isolation Distance' content={Props.route.params.inspectionData.isolationDistance} />
        <TextDataComponent title='Planting Pattern' content={Props.route.params.inspectionData.plantingPattern} />
        <DonartChartComponent numberValue={Props.route.params.inspectionData.offTypePercentage} title={'Off type percentage '} good={false} />
        <DonartChartComponent numberValue={Props.route.params.inspectionData.pestDeseaseIncidence} title={'Pest disease incidence '} good={false} />
        <DonartChartComponent numberValue={Props.route.params.inspectionData.defectivePlants} title={'Defective Plants '} good={false} />
        <TextDataComponent title='Inspection remarks' content={Props.route.params.inspectionData.remarks} />
        <View style={{height:50}}></View>

      </ScrollView>


    )

  }

  const FloweringDataComponant = () =>{

    return(
      <ScrollView style={{ marginTop: 10, flex: 1, backgroundColor: 'rgb(247,247,249)', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 30,paddingBottom: 30, }} showsVerticalScrollIndicator={false}>


        
        <DonartChartComponent numberValue={Props.route.params.inspectionData.pollinatingFemales} title={'Pollinating females '} good/>
        <DonartChartComponent numberValue={Props.route.params.inspectionData.femaleReceptiveSkills} title={'Female receptive skills '} good />
        <DonartChartComponent numberValue={Props.route.params.inspectionData.maleEleminations} title={'Male elemination '} good/>
        <DonartChartComponent numberValue={Props.route.params.inspectionData.pestDeseaseIncidence} title={'Pest disease incidence'} good ={false}/>
        <TextDataComponent title='Inspection remarks' content={Props.route.params.inspectionData.remarks} />
        <View style={{height:50}}></View>

      </ScrollView>
    )

    


  }

  const PreHarvestDataComponent = () =>{

    return(
      <ScrollView style={{ marginTop: 10, flex: 1, backgroundColor: 'rgb(247,247,249)', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 30,paddingBottom: 30, }} showsVerticalScrollIndicator={false}>


        
        
        <DonartChartComponent numberValue={Props.route.params.inspectionData.defectivePlants} title={'Defective Plants '} good/>
        <DonartChartComponent numberValue={Props.route.params.inspectionData.defectivePlants} title={'Defective Plants '} good ={false}/>
        <TextDataComponent title='Inspection remarks' content={Props.route.params.inspectionData.remarks} />
        <View style={{height:50}}></View>

      </ScrollView>
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

          {inspectionData.inspectionType} details

        </Text>

        <TouchableHighlight activeOpacity={2}
          underlayColor="green" style={{ padding: 5, borderRadius: 10 }} onPress={() => { viewOptions ? setViewOptions(false) : setViewOptions(true) }}>

          <Font
            name='list'
            size={14}
            color={'white'}

          />


        </TouchableHighlight>


      </View>
  
      {inspectionData.inspectionType==='vergitative' ? <VergitativeDataComponant /> : inspectionData.inspectionType==='flowering' ? <FloweringDataComponant/>: <PreHarvestDataComponent/> }
          
      

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
    padding:5,
    textAlign: 'center',
    color: 'white'

  },
  backButton: {
    padding: 5,
    borderRadius:5


  },
  optionsPopUp: {

    position: 'absolute',
    top: 50,
    right: 50,
    padding: 20
    , backgroundColor: 'white',
    elevation: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'

  }

})
export default ViewDetailsData