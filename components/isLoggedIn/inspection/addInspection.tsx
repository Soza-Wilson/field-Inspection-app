import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Mate from 'react-native-vector-icons/Entypo'
import { TextInput } from 'react-native'

const AddInspection = () => {
    return (
        <View style={styles.mainContainer}>
            <View>
                <View style={styles.headerWrapper}><View style={styles.backButton}>
                    <Mate
                        name='chevron-left'
                        size={15}
                        color={'black'}
                    />
                </View><View></View></View>
                <View style={styles.titleWrapper}><Text style={styles.heading}>Inspection</Text><Text style={styles.title}>Land verification</Text></View>


                <View>

<View style={styles.textWrapper}>

    <Text style= {styles.labelText}> Land requirements *</Text>
    <TextInput style={styles.userInput}
        placeholder='Land requirements'
        placeholderTextColor={"grey"}>

    </TextInput>




</View>


<View style={styles.textWrapper}>

    <Text  style= {styles.labelText}> Isolation Distance  *</Text>
    <TextInput style={styles.userInput}
        placeholder='Distance'
        placeholderTextColor={"grey"}>

    </TextInput>



</View>

<View style={styles.textWrapper}>

    <Text style= {styles.labelText}> Planting pattern *</Text>
    <TextInput  style={styles.userInput}
        placeholder='Distance'
        placeholderTextColor={"grey"}>

    </TextInput>


</View>


<View style={styles.textWrapper}>

    <Text style= {styles.labelText}> Remarks *</Text>
    <TextInput style={styles.remarks}
    multiline={true}
    numberOfLines={4}
        placeholder='Inspection Remarks'
        placeholderTextColor={"grey"}
       >

    </TextInput>

    


</View>



</View>


            </View>

           


            <View style={styles.saveButton}>

                <Text style={styles.saveText} > Next</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white"

    },

    saveButton: {

        padding: 20,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#2DA15F",

    },
    saveText: {


        textAlign: "center",
        color: "white",
        fontFamily: "Poppins-Medium"




    },

    headerWrapper: {
        padding: 20,

        flexDirection: "row",
        justifyContent: "space-between"

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
    textWrapper:{
     flexDirection:"column",
     justifyContent:"center",
     alignContent:"center",
     padding:10,
    

    },
    labelText:{

        fontFamily:"Poppins-Medium",
        fontSize:11,
        textAlign:"left",
        color:"black"
    },

    userInput:{

        backgroundColor:'rgb(247,247,249)',
        borderRadius:5,
        borderColor:"grey",
        
        

    },
    remarks:{

        height:100, textAlignVertical: 'top',
        backgroundColor:'rgb(247,247,249)',
        borderRadius:5,
        borderColor:"grey",
        



    }
    
    






})


export default AddInspection