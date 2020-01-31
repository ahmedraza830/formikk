// import React, { Component } from "react";
// import { View, Text, FlatList, Button,TouchableOpacity,TextInput,StyleSheet,StatusBar } from "react-native";
// import { ListItem, SearchBar } from "react-native-elements";
// // import Login from './src/pages/Login';
// import registerScreen from './src/components/Screens/registerScreen';

// export default class FlatListDemo extends Component {

//   constructor(props) {
//     super(props);

//   }
//   render()
//   {
//     return(
//         <View style={styles.container}>
//           <StatusBar backgroundColor="#37474f" barStyle="light-content" />
//          <registerScreen/>
//         </View>
//     );
//   }

// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     // backgroundColor:'#607d8b',
//     backgroundColor:'green',
//   },
//   loginTxt:{
//     alignContent:'center',
//     alignItems:'center',
//     color:'#ffffff',
//     fontWeight:'bold',
//     fontSize : 35
//   },
// });

import React, {Component} from 'react';
import {
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {HelperText} from 'react-native-paper';
// import {Formik, Field, Form} from 'formik';
// import * as yup from 'yup';
// import MyButton from './src/components/myButton/Index';
// import Input from './src/components/Input';

// import InputText from './src/components/Input/input';
import {validate} from './src/components/FormValidation/RegistrationValidation';
import FormikComponent from './src/components/FormikComponent/formikComponent';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import RegisterScreen from './src/components/Screens/RegisterScreen';
// import {
//   handleTextInput,
//   withNextInputAutoFocusInput,
// } from 'react-native-formik';
import LoginForm from './src/components/Screens/LoginForm';
const customData = {
 customFields: [
   {
      label: 'email',
      name: 'email',   
      inputType: 'text',
      placeholder: 'email',
   }
 ]

};

export default class FlatListDemo extends Component {
  render() {
    return (
      
      <View style={styles.container} >
        {/* fields={customFields} */}
        {/* <LoginForm formTitle="LOG IN"  formButton="Register" subTitle="this is login" fields={customData.customFields}/> */}
        <RegisterScreen/>
       
       </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor:'#d3d3d3',
  },
  emailView: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  emailText: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 3,
    borderRadius: 20,
  },
  passView: {},
  passText: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 3,
    
  },
  phoneText: {},
  containerKeyboard: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#607d8b',
  },
  TextView: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
});








