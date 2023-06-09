import {Text, View, StyleSheet, Image, Button, TextInput} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Custom_colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <Text style={styles.header}>Sign In</Text>

        <Icon
          style={styles.sign_in_icon}
          name="sign-in"
          size={20}
          color="#FFFFFF"
        />
      </View>

      <View>
        <TextInput
          placeholderTextColor="rgb(100,101,118)"
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholderTextColor="rgb(100,101,118)"
          placeholder="Password"
          keyboardType="ascii-capable"
          secureTextEntry={true}
          passwordRules={true}
          autoCorrect={false}
        />
      </View>

      <View style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Continue</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'rgb(247,247,249)',
  },
  info_container: {
    flexDirection: 'row',
    paddingTop: 240,
    paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: 'rgb(108,178,103)',
    alignItems: 'center',
    alignContent: 'center',
  },

  sign_in_icon: {
    marginLeft: 7,
    marginRight: 22,
    marginTop: 9,
  },

  header: {
    marginTop: 10,
    marginLeft: 140,
    alignItems: 'center',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    textAlign: 'center',
    alignContent: 'center',
  },

  input: {
    color: 'black',
    borderBottomWidth: 3,
    borderColor: 'rgb(108,178,103)',
    marginTop: 30,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,

    marginLeft: 20,
    marginRight: 20,
  },
  signInButton: {
    marginTop: 70,
    backgroundColor: 'rgb(108,178,103)',
    borderRadius: 20,
    alignItems: 'center',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
  },

  signInButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default SignIn;
