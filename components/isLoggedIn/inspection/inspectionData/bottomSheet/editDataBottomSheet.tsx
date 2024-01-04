import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import { styles as st } from '../../inspectionForms/inspectionFromStyle/formStyle';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import BottomSheetContextStatusProvider, { UseBottomSheetProvider } from '../../../../../context/bottomSheetEditor';
import EditDataProvider, { UseEditDataContext } from '../../../../../context/editInspectionDetails';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { number, object, string } from 'yup';
import { Formik } from 'formik';
import Inspection from '../../../../../models/inspection';

const EditDataBottomSheet = () => {
  const { inspectionData, setInspectionData }: any = UseEditDataContext()
  const { bottomSheetStatus, setBottomSheetStatus }: any = UseBottomSheetProvider()
  const inspection = new Inspection("", "", "", 0, 0, "", 0, "", 0, 0, 0, 0, 0, 0, 0, 0, "",)

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('dq', inspectionData)
      handlePresentModalPress()
    }, 0);
    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '80%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    if (index < 0) {
      setBottomSheetStatus(false)
      console.log(inspectionData)
    }

  }, []);


  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  const updateInspectionData = (data:any) => {
    inspection.editInspectionData(inspectionData[0],inspectionData[3],data)
  }


  const validationSchema = object().shape({
    // Define your form fields and their validation rules here
    // For example:
    inspection_data: string().required(' required'),

    // Add more fields and their validations as needed


  });



  // renders
  return (

    <BottomSheetModalProvider>
      <View style={styles.container}>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          onChange={handleSheetChanges}
          backgroundStyle={{ borderRadius: 50 }}
        >
          <View style={styles.contentContainer}>
            <View style={{width: '100%',alignContent:'center',alignItems:'center' }}>
              


              <View >

                <Text style={[styles.title,{textAlign:'center'}]}>Edit Data</Text>
                <Text style= {{fontFamily:'Poppins-Medium',fontSize:10,alignSelf:'center',textAlign:'center',}}>Edit inspection data </Text>


              </View>


              <Text> </Text>




            </View>
            


            <View style={styles.headerWrapper}>
              <Text style={styles.text}>{inspectionData[1]} </Text>
            </View>

            <View style={styles.textWrapper}>

              <Formik

                initialValues={{ inspection_data: '' }}
                validationSchema={validationSchema}
                onSubmit={(values): any => { updateInspectionData(values.inspection_data)}}

              >

                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                  <View >
                    <View style={{ marginBottom: 60 }}>
                      <TextInput style={[styles.userInput]}
                        placeholder={(inspectionData[2]).toString()}
                        placeholderTextColor={"grey"}
                        keyboardType='default'

                        onChangeText={handleChange('inspection_data')}
                        value={values.inspection_data}

                      />
                      {errors.inspection_data && <Text style={[styles.validateText]}>{errors.inspection_data}</Text>}

                    </View>
                    <Pressable onPress={() => handleSubmit()} style={[st.saveButton, { width: '100%', alignSelf: 'center', marginTop: 40 }]}>
                      <Text style={st.saveText} > Update</Text>
                    </Pressable>


                  </View>


                )}


              </Formik>







            </View>

            <Pressable style={{position:'absolute',left:13}} onPress={() => bottomSheetModalRef.current?.close()}>
                <MaterialIcons
                  name='close'
                  size={20}
                  color={'grey'}
                  style={{ color: "black" }}
                />

              </Pressable>



          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>



  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignContent: 'center'

  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',

  },
  title: {
    alignContent: 'center', alignItems: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize:12,
    color: 'black'

  }
  ,
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
    color: 'black'


  },
  textWrapper: {
    width: '100%',
    marginBottom: 70,
    justifyContent: "center",
    alignContent: "center",


  },
  headerWrapper: {
    width: '100%',

  },

  userInput: {

    backgroundColor: 'rgb(234,234,234)',
    borderRadius: 5,
    borderColor: "grey",
    fontFamily: 'Poppins-SemiBold',
    fontSize:11




  },
  validateText: {

    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    color: 'red'
  }

});

export default EditDataBottomSheet;