import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

type getDataProps ={

  inspectionType : number 
  farmId :string


}



const GetData = () => {
       


  return (
    <View>


                <Image source={require("../../../../assets/images/no_data.png")}
                  style={styles.noDataImage}


                ></Image>

                <Text style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 11,
                  color: "grey"
                }}>
                 
                </Text>
                </View>
  )
}

const styles = StyleSheet.create({
  

  noDataImage: {

    width: 300, height: 300,
    justifyContent: "center",

    alignItems: "center"

  },


})

export default GetData