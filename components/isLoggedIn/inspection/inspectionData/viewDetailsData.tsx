import { View, Text } from 'react-native'
import React from 'react'
import DonartChartComponent from './donartChartComponent'



const ViewDetailsData = () => {


  return (
    <View style={{

        flexDirection: 'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        alignItems:'center'
    }}>
      <DonartChartComponent/>
    </View>
  )
}

export default ViewDetailsData