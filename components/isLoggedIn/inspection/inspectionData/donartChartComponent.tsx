import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'


interface dornatChartProps {
  title:string,
  numberValue:number
  good: boolean
}


const DonartChartComponent = (Props:dornatChartProps) => {
  return (

<View style={styles.container}>

<Text style={styles.headingText}>

{Props.title}
</Text>

<View></View>


<View style={styles.progress}>
<AnimatedCircularProgress
  size={50}
  width={8}
  fill={Props.numberValue}
  delay={700}
  rotation={0}
  tintColor={Props.good?"#2DA15F":'tomato'}
  backgroundColor='lightgrey'
  >
  {
    (fill) => (
      <Text style={[{fontFamily:'Poppins-SemiBold',fontSize:10}]}>
        {Props.numberValue} %
      </Text>
    )
  }
</AnimatedCircularProgress>

</View>


</View>

   
    
  
  )
}

const styles = StyleSheet.create({

  container: {

   
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 25,
    margin:10,
    borderRadius:5,
    elevation:10
  },

  headerContainer: {
    backgroundColor: '#2DA15F',
  },

  headingText:{

    fontFamily:'Poppins-SemiBold',
    fontSize:12,
    textAlign:'center',
    margin:30
    



  },

  progress:{

    elevation:5,
    padding:15,
    backgroundColor:'white',
    borderRadius:10
  }

})


export default DonartChartComponent





