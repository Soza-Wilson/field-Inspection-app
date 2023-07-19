import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
const Loader=()=> {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 2000);
  }, []);

  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={styles.lottie}
      speed={0.5}
      source={require("../assets/animations/default loader.json")}>
    
      <Text style={styles.text}>fetching data...</Text>
    </AnimatedLoader>
  );
}
const styles = StyleSheet.create({
  lottie: {
    
    width: 200,
    height: 200,
  },

  text:{
    fontFamily: 'Poppins-SemiBold',
    
  }
});

export default Loader;