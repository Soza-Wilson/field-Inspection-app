import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Mate from 'react-native-vector-icons/Entypo'
import Font from 'react-native-vector-icons/FontAwesome';
import Ion from 'react-native-vector-icons/Ionicons';
import Font5 from 'react-native-vector-icons/FontAwesome5'
import InspectionCardComponent from './inspectionCardComponent';
import { NoDataCardComponent } from './inspectionCardComponent';


const ViewInspectionDetails = () => {


  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>

        <View style={styles.headerWrapper}><View style={styles.backButton}>
          <Mate
            name='chevron-left'
            size={15}
            color={'black'}
          />
        </View><Text style={styles.idText}>ID: 216212668941268</Text></View>

        <View style={styles.farmDetailsContainer}>

          <View style={styles.farmDetails}>

            <Font
              name="user"
              size={11}
              color="black"
              style={{
                margin: 6,
                color: "grey"


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
                marginRight: 6,
                color: "grey"


              }}
            />
            <View style={styles.farmDetails}>

              <Text style={styles.cropDetailsText}>Maize ,</Text>
              <Text style={styles.cropDetailsText}>
                Tiwf
              </Text>

            </View>

          </View>

        </View>


      </View>

      <ScrollView style={styles.inspectionCardContainer}
      showsVerticalScrollIndicator={false}>
        <NoDataCardComponent />
        <InspectionCardComponent />
        <InspectionCardComponent />

      </ScrollView>





    </View>
  )
}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFF'

  },

  headerContainer: {


    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',



  },
  idText: {
    fontFamily: "Poppins-Medium",
    color: "black",
    fontSize: 13,


  },

  farmDetailsContainer: {

    margin: 10
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

    backgroundColor: "white",
    elevation: 2,
    borderColor: "grey"

  },
  titleWrapper: {


    flexDirection: "column",
    padding: 20,

  },

});

export default ViewInspectionDetails