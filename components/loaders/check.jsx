import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';
 




const CheckLoader =()=> {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 0);
  }, []);

  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,2)"
      animationStyle={styles.lottie}
      speed={1}
      source={require("../../assets/animations/default check.json")}>
    
      <Text style={styles.text}>{"Done !"}</Text>
    </AnimatedLoader>
  );
}
const styles = StyleSheet.create({
  lottie: {
    
    width: 300,
    height: 300,
  },

  text:{
    fontFamily: 'Poppins-SemiBold',
    color: '#000000'
    
  }
});

export default CheckLoader;