import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Mate from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HistoryCardData = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column', backgroundColor: '#2DA15F',borderBottomRightRadius:20, padding: 5, paddingRight: 80 }}>
                <View style={styles.dateContainer} >

                    <Mate
                        name='calendar'
                        size={9}
                        color={'white'}
                        style={{ padding: 5 }}
                    />


                    <Text style={[styles.textReguler, { marginTop: 3 }]}>

                        12-12-2012
                    </Text>



                </View>

                <View style={styles.dateContainer}>

                    <Mate
                        name='clock'
                        size={9}
                        color={'white'}
                        style={{ padding: 5 }}
                    />

                    <Text style={[styles.textReguler, { marginTop: 3 }]}>

                        10:39:00
                    </Text>


                </View>


            </View>

            <View>
                <Text style={[styles.textReguler, { color: 'black' }]}>
                    10 Entries
                </Text>


            </View>

            <View>
                <Mate
                    name='chevron-right'
                    size={15}
                    color={'green'}
                    style={{ margin: 7 }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.4,
        borderColor: '#2DA15F',
        flexDirection: 'row',
        borderRadius: 20,
        margin: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',

    
    }
    , textReguler: {
        color: 'white', fontFamily: 'Poppins-Bold', fontSize: 8
    }
    , dateContainer: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    }
})

export default HistoryCardData