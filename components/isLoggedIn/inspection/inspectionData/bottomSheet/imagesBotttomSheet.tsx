import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableHighlight, Image } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { object, string } from 'yup';
import RNFetchBlob from 'rn-fetch-blob';
import UploadedImages from '../../../../../models/images';
import { NavigationScreenProp } from 'react-navigation';

export interface ViewDetailsScreenProps {
  navigation: NavigationScreenProp<any, any>
  route: any

};


const ImagesBottomSheet = (inspectionId : string | any,{navigation}:ViewDetailsScreenProps) => {

  // state

  const [inspectionImages, setInspectionImages] :any = useState([])
  
  useEffect(() => {
    const timer = setTimeout(() => {
      handlePresentModalPress()
      getImages()
    }, 0);
    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%','80%'], []);
  const cacheDir = RNFetchBlob.fs.dirs.CacheDir;

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
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

  const getImages = async () =>{
    const tempImages: string[] = []
    const images = new UploadedImages("","")
    let result :any = await images.getImages(inspectionId.inspectionId)
    result.forEach((element :string )=> {
      tempImages.push('file://'+cacheDir+'/'+ element)
    });
   
     setInspectionImages(tempImages)



  }
 

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
          backgroundStyle={{borderRadius:50}}
        >
          <View style={styles.contentContainer}>
            <View style ={styles.headerWrapper}>
            <Text style={styles.headerText}>Images</Text>

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>




                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignContent: 'center', alignItems: 'center' }}>

                        {inspectionImages.map((data: any, index: number) => (
                            // Step 3: Render components based on the array elements
                            <TouchableHighlight activeOpacity={0.9}
                                underlayColor="" key={index} onPress={() =>navigation.navigate('imageGalleryView', { images: inspectionImages, selectImageIndex: index })}>

                                <Image
                                    style={{ height: 110, width: 60 * 2, margin: 4, borderRadius: 5 }}
                                    source={{ uri: data }}


                                />

                            </TouchableHighlight>
                        ))}


                    </View>



                </ScrollView>
           
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
   
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerText:{
    fontFamily:'Poppins-Bold',
    fontSize:12,
    color:'black'
  },headerWrapper:{

    marginBottom:5,

  }
});

export default ImagesBottomSheet;