import { Text, View, StyleSheet, Image, Button, TextInput, TouchableHighlight, Alert } from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Custom_colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Formik } from 'formik';
import { object,string } from 'yup';

const validationSchema = object().shape({
  // Define your form fields and their validation rules here
  // For example:

  email: string().email('Invalid email').required('Email is required'),
  password: string().required('Password is required'),
  // Add more fields and their validations as needed
});

function SignIn({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.info_container}>
        <Text style={styles.header}>Sign In</Text>
      </View>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values,errors }) => (
          <View>
            <TextInput
              placeholderTextColor="rgb(100,101,118)"
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}

            />
             {errors.email && <Text style={styles.validationText}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              placeholderTextColor="rgb(100,101,118)"
              placeholder="Password"
              keyboardType="ascii-capable"
              secureTextEntry={true}
              passwordRules={null}
              autoCorrect={false}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
             {errors.password && <Text style={styles.validationText}>{errors.password}</Text>}

            <TouchableHighlight activeOpacity={0.9}
              underlayColor=""
              onPress={handleSubmit}>

              <View style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Continue </Text>

                <AntDesign

                  name="login"
                  size={20}
                  color="#FFFFFF"
                />
              </View>


            </TouchableHighlight>
          </View>

        )}
      </Formik>

     


      <TouchableHighlight activeOpacity={0.9}
        underlayColor=""
        onPress={() => navigation.navigate("setup")}>
        <View style={styles.configureButton}>
          <Text style={styles.signInButtonText}>Setup</Text>
          <MaterialIcons

            name="phonelink-setup"
            size={20}
            color="#FFFFFF"
          />
        </View>
      </TouchableHighlight>


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
    justifyContent: "space-around",
    paddingTop: 240,
    paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#2DA15F',
    alignItems: 'center',
    alignContent: 'center',
  },



  header: {
    marginTop: 10,

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
    borderColor: '#2DA15F',
    marginTop: 20,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,

    marginLeft: 20,
    marginRight: 20,
  },
  validationText:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: 10,
    color: '#FF0000',
    marginLeft: 20

  },
  signInButton: {
    marginTop: 50,
    backgroundColor: '#2DA15F',
    borderRadius: 20,
    alignItems: 'center',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  configureButton: {
    marginTop: 50,
    backgroundColor: '#2DA15F',
    borderRadius: 20,
    alignItems: 'center',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  signInButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },

  splitButtons: {

    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: 'Black',


  }
});

export default SignIn;
