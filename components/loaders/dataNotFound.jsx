import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader';

const DataNotFound = () => {
  return (

    <View>
         <AnimatedLoader
      visible={true}
      overlayColor="rgba(255,255,255)"
      animationStyle={styles.lottie}
      speed={1}
      source={require("../../assets/animations/dataNotFound.json")}>
    
      <Text style={styles.text}>Data not found</Text>
    </AnimatedLoader>

    </View>
  )


   
   
}

const styles = StyleSheet.create({
    lottie: {
      
      width: 200,
      height: 200,
    },
  
    text:{
      fontFamily: 'Poppins-SemiBold',
      color: '#000000'
      
    }
  });
    

export default DataNotFound