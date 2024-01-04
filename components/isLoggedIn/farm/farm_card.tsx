import { View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import React, { useRef, useState } from 'react'
import { TEXT } from 'sequelize';
import Font from 'react-native-vector-icons/FontAwesome';
import Ion from 'react-native-vector-icons/Ionicons';
import Font5 from 'react-native-vector-icons/FontAwesome5'
import Util from '../../../models/Util';
import Farm from '../../../models/farm';
import Evil from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface FarmInterface {
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
    farmDetails: FarmInterface;
    growerName: any


}



const FarmCard: React.FC<FarmCardProps> = ({ farmDetails }) => {
    const util = new Util()
    const farm = new Farm("", "", "", "", "", "", "", "", "", "", "")
    const [vergitativeDot, setVergitativeDot] : any= useState('grey')
    const [foloweringDot, setFoloweringDot] : any= useState('grey')
    const [preHarvestDot, setPreHarvestDot] : any= useState('grey')



    const getInspected = async () => {
        const results = await farm.getInspected(farmDetails.farm_id);
        console.log(results)

    }
    getInspected()




    return (

        <View style={styles.container} >

            <View style={
                {

                    flexDirection: "column",
                    justifyContent: "space-between"
                }
            }>
                <View>


                    <View style={styles.userWrapper}><Evil
                        name="user"
                        size={20}
                        color="black"
                        style={{
                           

                            color: "grey"


                        }}
                    />

                        <Text style={styles.userText}>{util.setCapitalLatter(farmDetails.fullname)}</Text></View>
                    <View style={styles.locationWrapper}><Ion
                        name="ios-location-outline"
                        size={13}
                        color="black"
                        style={{
                            margin: 3,
                            marginRight: 4,
                            color: "grey"


                        }}
                    /><Text style={styles.locationText}>{farmDetails.district} , {farmDetails.area_name}</Text></View>


                    <View style={styles.cropWrapper}><MaterialIcons
                        name="tree-outline"
                        size={15}
                        color="black"
                        style={{
                            margin: 3,
                            marginRight: 2,
                            color: "grey"


                        }}
                    /><Text style={styles.cropText}>{farmDetails.crop} , {farmDetails.variety}</Text></View>

                </View>

                <View style={{ flexDirection: "row" }} >

                    <View style={styles.idWrapper} ><Text style={styles.idText}>ID : {farmDetails.farm_id}</Text></View>
                    <View style={styles.hectorsWrapper}><Text style={styles.hectorsText}>{farmDetails.hectors} Hectors </Text></View>

                </View>

            </View>

            <View style={styles.dotsWrapper} >
                <View style={styles.rightWrapper}  >
                    <View style={{
                        backgroundColor:"grey",
                        padding: 7,
                        margin: 3,
                        borderRadius: 50

                    }}></View><View style={{
                        backgroundColor: "grey",
                        padding: 7,
                        margin: 3,
                        borderRadius: 50

                    }}></View><View style={{
                        backgroundColor: "grey",
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
        // borderWidth:0.5,
        // borderColor:'#2DA15F',
        flexDirection: "row",
        justifyContent: "space-between",
        height: 140,
       
        
        borderRadius: 30




    },

    dotsWrapper: {

        flexDirection: "column",
        justifyContent: "space-between",
        margin: 12


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
        fontFamily: "Poppins-Bold",
        fontSize: 13,


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
        marginTop: 3,
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
        marginTop: 3,
        color: "grey"

    },
    idWrapper: {

        backgroundColor: "#2DA15F", padding: 10, borderTopRightRadius: 20, borderBottomLeftRadius: 30

    },

    hectorsWrapper: {

        padding: 10

    },
    idText: {
        fontFamily: "Poppins-SemiBold",
        color: "white",

        fontSize: 10,
        textAlign: "center",
        marginLeft: 13,



    },

    hectorsText: {
        fontFamily: "Poppins-SemiBold",

        fontSize: 10,
        textAlign: "center",
        paddingLeft: 10,
        color: "black"

    }






});

export default FarmCard