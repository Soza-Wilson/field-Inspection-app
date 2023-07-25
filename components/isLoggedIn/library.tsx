import { View, Text } from 'react-native'
import React from 'react'
import Font from 'react-native-vector-icons/FontAwesome';
import FarmCard from './farm_components/farm_card';


import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { TEXT } from 'sequelize';

const FarmLibrary = () => {
  return (


    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        
        <View style={styles.backItemsContainer}>
          <View style={styles.backButton}>
            <Font
              name="arrow-left"
              size={10}
              color="black"
            />
          </View>
          <View>
            <Text  style={styles.customHeader}> Farm list</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
          style={styles.searchText}
          placeholderTextColor="rgb(100,101,118)"

          placeholder="           Enter grower name .....">

    

          </TextInput>

        </View>

      </View>
      <ScrollView style={styles.scrollView}>
        <FarmCard/>
        <FarmCard/>
        <FarmCard/>
        <FarmCard/>
        <FarmCard/>
        <FarmCard/> 
        <FarmCard/>
         <FarmCard/>
          <FarmCard/> 
          <FarmCard/> 
          <FarmCard/> 
          <FarmCard/>
           <FarmCard/>
            <FarmCard/>
             <FarmCard/> 
             <FarmCard/> 
             <FarmCard/>
              <FarmCard/>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  backItemsContainer:{
    
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginTop:20,
    marginLeft:20
    
  
    
  },

  searchContainer:{

    margin:30,


  },
  searchText:{
    fontFamily:"Poppins-Medium",
    fontSize:13,
    borderRadius:50,
    borderWidth:2,
    borderColor:'rgb(212,212,212)',
    height:45,

  },

  customHeader:{
    fontFamily:"Poppins-Bold",
    
    color:"black",
    marginLeft:15
   
  },
  backButton:{
    padding:15,
    alignItems:"center",
    backgroundColor:'rgb(247,247,249)',
    borderRadius:10
    

  },
  scrollView: {
    backgroundColor: 'rgb(247,247,249)',

  },
  text: {
    fontSize: 42,
  },
});
export default FarmLibrary