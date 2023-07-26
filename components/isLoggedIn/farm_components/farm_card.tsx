import { View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import React from 'react'
interface Farm {
    farm_id: string;
    fullname:string;
    area_name:string;
    crop:string;
    variety:string;
    name: string;
    hectors: string;
    district: string;
  }
  
  interface FarmCardProps {
    farmDetails: Farm;
  }
  
  const FarmCard: React.FC<FarmCardProps> =({farmDetails})=> {

    return (
    
        <View style={styles.container}>
            
            <View style={styles.firstRowContainer}>
                <View style={styles.firstColumnContainer}>
                    <Text style={styles.growerNameText} >
                       {farmDetails.fullname}

                    </Text>

                    <View style={styles.locationContainer}>
                        <Text style={styles.locationText}>{farmDetails.district}  ,</Text>
                        <Text style={styles.locationText}>{farmDetails.area_name}</Text>

                    </View>

                    <View style={styles.locationContainer}>
                        <Text style={styles.CropText}>{farmDetails.crop} , </Text>
                        <Text style={styles.CropText}>{farmDetails.variety}</Text>
                        

                    </View>




                </View>

                <View style={styles.farmContainer}>

                    <Text style={styles.IdText}>ID{farmDetails.farm_id}</Text>
                    <Text style={styles.IdText}> | </Text>
                    <Text style={styles.FarmText}> {farmDetails.hectors} Hectors</Text>



                </View>





            </View>

            <View style={styles.rightContainer} >

                <View style={styles.inspectionContainer}>
                    <View style={styles.inspectionIndicator_1}>
                    </View>
                    <View style={styles.inspectionIndicator_2}>
                    </View>
                    <View style={styles.inspectionIndicator_3}>


                    </View>

                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation:3,
       
        
        height: 110,
      
        flexDirection: "row",




    },
    scrollView: {
        backgroundColor: 'pink',

    },
    text: {
        fontSize: 30,
    },
    growerNameText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: "black",




    },

    locationText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: "black",

    },
    FarmText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: "black",

    },

    IdText: {
        fontFamily: 'Poppins-Light',
        fontSize: 10,
        

    },

    CropText: {
        fontFamily: 'Poppins-Light',
        fontSize: 10,
        color: "black",

    },
    firstRowContainer: {
        flexDirection: "column",
        alignContent: "space-between",
        marginTop: 5, marginLeft: 5



    },
    firstColumnContainer: {
        flexDirection: "column",
        alignContent: "space-between",
        marginBottom:26

    },
    inspectionIndicator_1: {
        margin: 5,
        backgroundColor: 'rgb(194,224,193)',
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    inspectionIndicator_2: {
        margin: 5,
        backgroundColor: 'rgb(134,192,130)',
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    inspectionIndicator_3: {
        margin: 5,
        backgroundColor: 'rgb(53,150,47)',
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inspectionContainer: {
        flexDirection: "row",
        alignContent: "space-between",
        marginLeft:95,
        marginTop:5
        

    },
    locationContainer: {
        flexDirection: "row",


    },
    farmContainer: {

        flexDirection: "row",
    },

    rightContainer:{

        flexDirection: "column",
        
    }



});

export default FarmCard