import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Font from 'react-native-vector-icons/FontAwesome5'
import { TEXT } from 'sequelize'

interface textCompmonentProps {
    title: string
    content: string

}

const TextDataComponent = (Props: textCompmonentProps) => {
    return (
        <View style={styles.inspectionCard}>
            <View style={styles.headerContainer}>

                <Text style={styles.headerText}>

                    {Props.title}
                </Text>
                <Font
                    name="eye"
                    size={11}
                    color="black"
                    style={{
                      
                        
                      
                       
                    }}

                />

            </View>

            <Text style={styles.contentText}>

                {Props.content}
            </Text>




        </View>
    )
}


const styles = StyleSheet.create({

    inspectionCard: {


        padding:10,
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        elevation: 10,
        margin: 10,
        backgroundColor: '#fff'




    },

    headerText:{
        fontFamily:'Poppins-SemiBold',
        fontSize:12,
        color:'#2DA15F'
    },
    contentText:{

        fontFamily:'Poppins-SemiBold',
        fontSize:9,
        textAlign:'left',
        height:80,
        padding:5,
        borderColor:'black',
        backgroundColor:'lightgrey',
        borderRadius:5



    },

 
  
    headerContainer:{

        flexDirection:'row',
        justifyContent:'space-between',
        
    }

})
export default TextDataComponent