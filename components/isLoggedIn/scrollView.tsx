import { View, } from 'react-native'
import React from 'react'
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
  } from 'react-native';
  
  const SView = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor 
  
          </Text>
          <View>
            <Text style={styles.text}>exwiqhdwqdh</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'pink',
     
    },
    text: {
      fontSize: 42,
    },
  });
export default SView