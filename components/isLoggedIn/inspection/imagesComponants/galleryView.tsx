import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet, FlatList, Dimensions } from 'react-native';
import { Image } from 'react-native-elements';
import { StatusBar } from 'react-native';
import { TouchableHighlight } from 'react-native';




interface galleryViewProps {

  images: string[];
  selectedIndex: number


}

const GalleryView = ({ images, selectedIndex }: galleryViewProps) => {


  const {width,height}:any = Dimensions.get('window');
  const topRef: any = React.useRef()
  const bottomRef: any = React.useRef()
  const [scrollToActiveIndex, setScrollToActiveIndex]: any = useState(0)


  const setActiveIndex = (index: number) => {

  

    setScrollToActiveIndex(index)
    topRef?.current?.scrollToOffset({
      offset: index * width,   
      animated: true
    })


  }



  return (
    <View style={styles.container}>


      <FlatList
        ref={topRef}
        data={images}
        keyExtractor={(item) => item}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={event => {
          setActiveIndex(Math.floor(event.nativeEvent.contentOffset.x / width ))

        }}
        scrollEventThrottle={16}
        renderItem={({ item }) => <View>

          <Image

            source={{ uri: item }}
            style={{

              width,
              height
            }}

          />

        </View>}
      />

      <FlatList

        style={{ position: 'absolute', bottom: 15, }}
        ref={bottomRef}
        data={images}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}

        contentContainerStyle={{ paddingHorizontal: 10 }}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => <View>

          <TouchableHighlight onPress={() => { setActiveIndex(index) }

          }>

            <Image

              source={{ uri: item }}
              style={{

                width:width / 5,
                height: height/ 10,
                marginRight: 10, borderRadius: 10,
                borderWidth: 2,
                borderColor: scrollToActiveIndex === index ? '#fff' : 'transparent'

              }}

            />

          </TouchableHighlight>



        </View>}
      />




    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black'



  },

})

export default GalleryView