interface FarmDetailsModalProps {

  visible: boolean,
  onClose:any,
  children:any


}

import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { Image } from 'react-native-elements';
const FarmDetailsModal = ({visible,onClose,children} :FarmDetailsModalProps) => {

  return (
    
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        >
        <View style={styles.centeredView}>
           
        
          <View style={styles.modalView}>
            <View style={styles.childrenWrapper}>

            {children}


            </View>
            <View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onClose}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable> 
            


            </View>
            
          

            
            
          </View>

         
        </View>
      </Modal>
     
   
  );
};

const styles = StyleSheet.create({
  centeredView: {
   
   
    flex: 1,
    justifyContent: 'center',
    
   
  },
  modalView: {
    margin: 50,
    backgroundColor: 'white',
    borderRadius: 10,

    padding:50,
   
   
    flexDirection:'column',
    justifyContent:"space-between",

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 15,
    
  },

  buttonClose: {
    backgroundColor: '#2DA15F',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  profile_image: {
    width: 55,
    height: 55,
    

    alignItems: 'center',
    borderRadius: 60,
    
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
  profileText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    marginTop: 17,
    marginLeft: 5,
    color: 'black',
  },
  headerSeparator: {
    width: 350,
    backgroundColor: 'red',
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginLeft: 20,
    
  },
  childrenWrapper:{

    marginBottom:60
  }

});

export default FarmDetailsModal;