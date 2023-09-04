import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Mate from 'react-native-vector-icons/Entypo'
import Ios from 'react-native-vector-icons/Ionicons'
import { TouchableHighlight } from 'react-native';
import { useInspectionType } from '../../../../context/inspectionType';

type noDataProps = {

    navigation :any


}
export const NoDataCardComponent = (Props:noDataProps) => {

    const {setInspectionType}= useInspectionType()
    
    
    return (

        <View style={styles.noDataCard}>
            <Text style={[styles.noDataText, { paddingBottom: 5, fontSize: 12 }]}>
                Vergitative Inspection

            </Text>

            <Mate
                name='archive'
                size={30}
                color={'black'}
            />

            <Text style={styles.noDataText}>

                No data found


            </Text>
            
                

                <TouchableHighlight style={styles.addNewInspection} onPress={()=>{[setInspectionType(2),Props.navigation.navigate('addInspection')]}}>

                    <Mate
                        name='plus'
                        size={25}
                        color={'white'}
                    />
                     </TouchableHighlight>
                


        



        </View>


    )



}

const InspectionCardComponent = () => {




    return (
        <View style={styles.inspectionCard}>


            <View style={styles.inspectionImage}>

            </View>



            <View >

                <View style={styles.detailsContainer}>

                    <Ios
                        name='settings'
                        size={20}
                        color={'black'}
                    />


                    <Text style={styles.noDataText}>Inspection type</Text>

                </View>

                <View style={styles.detailsContainer}>

                    <Mate
                        name='calendar'
                        size={20}
                        color={'black'}
                    />

                    <Text style={styles.noDataText}>Date</Text>
                </View>

                <View style={styles.detailsContainer}>

                    <Mate
                        name='clock'
                        size={20}
                        color={'black'}
                    />
                    <Text style={styles.noDataText}>Time</Text>

                </View>



            </View>

            <View style={styles.viewInspectionButton}>
                <Mate
                    name='chevron-right'
                    size={25}
                    color={'white'}
                />

            </View>


        </View>
    )
}



const styles = StyleSheet.create({

    inspectionCard: {


        padding: 35,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 3,
        margin: 10,
        backgroundColor: '#fff'



    },

    noDataCard: {

        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        borderRadius: 20,
        elevation: 3,
        margin: 10,
        marginTop: 15,
        backgroundColor: '#fff'




    },

    inspectionImage: {

        backgroundColor: 'green',
        padding: 70,
        position: 'absolute',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        left: 0,
        bottom: 0


    },
    detailsContainer: {

        flexDirection: 'row',
        paddingLeft: 100,


    },
    addNewInspection: {

        position: 'absolute',
        backgroundColor: '#2DA15F',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        right: 0,
        width: 130,
        height: 40,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20




    },

    viewInspectionButton: {

        position: 'absolute',
        backgroundColor: '#2DA15F',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        right: 0,
        width: 130,
        height: 40,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20



    },


    noDataText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        margin: 5
    }


})

export default InspectionCardComponent