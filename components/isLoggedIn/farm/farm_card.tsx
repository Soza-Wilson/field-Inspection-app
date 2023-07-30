import { View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import React from 'react'
import { TEXT } from 'sequelize';
import Font from 'react-native-vector-icons/FontAwesome';
import Ion from 'react-native-vector-icons/Ionicons';
import Font5 from 'react-native-vector-icons/FontAwesome5'

interface Farm {
    farm_id: string;
    fullname: string;
    area_name: string;
    crop: string;
    variety: string;
    name: string;
    hectors: string;
    district: string;
}

interface FarmCardProps {
    farmDetails: Farm;
}

const FarmCard: React.FC<FarmCardProps> = ({ farmDetails }) => {

    return (

        <View style={styles.container} >

            <View style={
                {

                    flexDirection:"column",
                    justifyContent:"space-between"
                }
            }>
                <View>


                    <View style={styles.userWrapper}><Font
                        name="user"
                        size={11}
                        color="black"
                        style={{
                            margin: 6,
                            color: "grey"


                        }}
                    />

                        <Text style={styles.userText}>{farmDetails.fullname}</Text></View>
                    <View style={styles.locationWrapper}><Ion
                        name="ios-location"
                        size={11}
                        color="black"
                        style={{
                            margin: 3,
                            marginRight:6,
                            color: "grey"


                        }}
                    /><Text style={styles.locationText}>{farmDetails.district} , {farmDetails.area_name}</Text></View>


                    <View style={styles.cropWrapper}><Font5
                        name="seedling"
                        size={11}
                        color="black"
                        style={{
                            margin: 3,
                            marginRight:6,
                            color: "grey"


                        }}
                    /><Text style={styles.cropText}>{farmDetails.crop} , {farmDetails.variety}</Text></View>

                </View>

                <View style= {{flexDirection:"row"}} >

                    <View style= {styles.idWrapper} ><Text style={styles.idText}>ID : {farmDetails.farm_id}</Text></View>
                    <View style={styles.hectorsWrapper}><Text style={styles.hectorsText}>{farmDetails.hectors} Hectors </Text></View>

                </View>

            </View>

            <View style={styles.dotsWrapper} >
                <View style={styles.rightWrapper}  >
                    <View style={{
                        backgroundColor: "brown",
                        padding: 7,
                        margin: 3,
                        borderRadius: 50

                    }}></View><View style={{
                        backgroundColor: "#2DA15F",
                        padding: 7,
                        margin: 3,
                        borderRadius: 50

                    }}></View><View style={{
                        backgroundColor: "green",
                        padding: 7,
                        margin: 3,
                        borderRadius: 50

                    }}></View>
                </View>

                <View></View>

            </View>




        </View>


    )
}
const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 5,
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 140,
        elevation: 5,
        borderRadius: 7




    },

    dotsWrapper: {

        flexDirection: "column",
        justifyContent: "space-between",
        margin:12
        

    },

    rightWrapper: {

        flexDirection: "row"

    },

    userWrapper: {

        flexDirection: "row",
        marginTop: 10,
        marginLeft: 10,
        alignContent: "center"




    },

    userText: {
    fontFamily:"Poppins-SemiBold",
    fontSize:13,


        textAlign: "center",
        marginLeft: 5,
        color: "black"

    },

    locationWrapper: {

        flexDirection: "row",

        marginLeft: 10,
        alignContent: "center"




    },

    locationText: {
        fontFamily: "Poppins-SemiBold",

        fontSize: 10,
       
        textAlign: "center",
        marginTop:3,
        marginLeft: 5,
        color: "black"

    },

    cropWrapper: {

        flexDirection: "row",

        marginLeft: 10,
        alignContent: "center"




    },

    cropText: {
        fontFamily: "Poppins-SemiBold",

        fontSize: 8,
        textAlign: "center",
        marginLeft: 5,
        marginTop:3,
        color: "grey"

    },
  idWrapper:{

     backgroundColor:"#2DA15F",padding:10,borderTopRightRadius:20,borderBottomLeftRadius:7

  },

  hectorsWrapper:{

padding:10

 },
   idText:{
    fontFamily: "Poppins-SemiBold",
    color:"white",

    fontSize: 10,
    textAlign: "center",
    marginLeft: 13,
   
    

   },

   hectorsText:{
    fontFamily: "Poppins-SemiBold",

    fontSize: 10,
    textAlign: "center",
    paddingLeft:10,
    color: "black"

   }






});

export default FarmCard