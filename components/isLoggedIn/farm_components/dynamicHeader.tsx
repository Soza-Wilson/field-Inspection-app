
import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome';
import Ion from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';



const Header_Max_Height = 150;
const Header_Min_Height = 85;



const DynamicHeader = ({ animHeaderValue }: any) => {

    const animateHeaderBackgroundColor = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: ['white', 'white'],
        extrapolate: 'clamp'
    })
    const backButtonBackgroundColor = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: ['white','white'],
        extrapolate: 'clamp'
    })
    

    const animateHeaderHeight = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp'
    })


    return (
        <Animated.View
            style={[
                styles.header,
                {
                    height: animateHeaderHeight,
                    backgroundColor: animateHeaderBackgroundColor,


                    // borderBottomLeftRadius: 20,
                    // borderBottomRightRadius: 20,

                    borderBottomWidth: 2,
                    borderColor: 'rgb(212,212,212)',
                       elevation:10



                }

            ]}
        >

            <View style={styles.backItemsContainer}>
                <Animated.View style={[
                styles.header,
                {
                  
                    backgroundColor: backButtonBackgroundColor,


                    padding: 15,
                    alignItems: "center",
                    elevation:5,
                    borderRadius: 15



                }

            ]}>
                    <Font
                        name="arrow-left"
                        size={10}
                        color="black"
                        
                    />
                </Animated.View>
                <View>
                    <Text style={styles.customHeader}> Farm list</Text>
                </View>
            </View>
            <View style={styles.searchContainer}>

                       <Ion
                        name="ios-search"
                        size={20}
                        color="black"
                        style={{

                            padding:10
                        }}
                    />
                <TextInput
                    style={styles.searchText}
                    placeholderTextColor="grey"
                    underlineColorAndroid="transparent"

                    placeholder="Enter grower name...">



                </TextInput>

            </View>
        </Animated.View>
    );




}
const styles = StyleSheet.create({
    header: {
        
    },
    headerText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    headerContainer: {


        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

        borderBottomWidth: 1,
        borderColor: 'rgb(212,212,212)',

    },
    container: {
        flex: 1,

    },
    backItemsContainer: {

        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 20



    },

    searchContainer: {
        flexDirection:"row",
        backgroundColor:'white',
        marginHorizontal:10,
        elevation:1,
        margin:20,
        borderRadius:20, 
        alignItems:"center",
        height:45


    },
    searchText: {
        flex:1,
        fontFamily: "Poppins-Medium",
        fontSize: 11,
        backgroundColor:"white",
        
      
       
       
       
       

    },

    customHeader: {
        fontFamily: "Poppins-Bold",

        color: "black",
        marginLeft: 15

    },
    backButton: {
        padding: 15,
        alignItems: "center",
        backgroundColor: 'rgb(247,247,249)',
        borderRadius: 10


    },
    scrollView: {
        backgroundColor: 'rgb(247,247,249)',

    },
    text: {
        fontSize: 42,
    },
});
export default DynamicHeader