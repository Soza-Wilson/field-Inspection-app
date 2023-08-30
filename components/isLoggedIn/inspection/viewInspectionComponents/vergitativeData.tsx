import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const VergitativeData = () => {
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
                  No Data Found !!
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

export default VergitativeData