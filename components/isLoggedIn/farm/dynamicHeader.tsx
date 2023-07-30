
import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome';
import Ion from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
import { Image } from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';



const Header_Max_Height = 150;
const Header_Min_Height = 94;



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

            
      <View style={styles.headerWrapper}>
        <View style={styles.profileWrapper}>
          <Image
            source={require('../../../assets/images/modalBackGround.png')}
            style={styles.profile_image}></Image>
          <Text style={styles.profileText}>John doe</Text>
        </View>

        <View>
          <Entypo
           
            name="list"
            size={20}
            color="black"
          />
        </View>
      </View>

           
            <View style={styles.searchContainer}>

                       <Ion
                        name="ios-search"
                        size={15}
                        color="grey"
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

    profile_image: {
        width: 55,
        height: 55,
    
        alignItems: 'center',
        borderRadius: 60,
      },
    
    backItemsContainer: {

        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 20



    },

    profileWrapper: {
        flexDirection: 'row',
      },
      headerWrapper: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
      },

    searchContainer: {
        flexDirection:"row",
        backgroundColor:'white',
        marginHorizontal:10,
      
        margin:20,
        
        alignItems:"center",
        height:45


    },
    searchText: {
        flex:1,
        fontFamily: "Poppins-Medium",
        fontSize: 11,
        backgroundColor:"white",
        borderBottomWidth:2,
        borderBottomColor:"black",
        marginRight:20
        
      
       
       
       
       

    },

    profileText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        marginTop: 17,
        marginLeft: 5,
        color: 'black',
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