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
import {Formik, Field, Form} from 'formik';
import MyButton from '../../components/myButton/Index'
import Input from '../../components/Input';
import {validate} from '../../components/FormValidation/RegistrationValidation';


export default class loginform extends Component{
  renderFields = () => {
    const {fields} = this.props;
    return(
    fields &&
    fields.map((field, indx) => {
      console.log(field)
    if(field.inputType === 'text'){
      return(
        <Input
        name={fields.name}
        returnKeyType="next"
        placeholder={fields.placeholder}
      //  onChangeText={handleChange('email')}
      //   onChange={handleBlur('email')}
      //   onBlur={handleBlur('email')}
      //  value={field.email}
      //  onChange={setFieldValue}
      //  onTouch={setFieldTouched}
      //  error={touched.email && errors.email}
        inputStyle={styles.emailText}
      //   onSubmitEditing={() => this.secondInput.focus()}
        />
      )
    }
  })
  );
};

  render(){
    const {formTitle = "Form", subTitle = "" ,formButton ="Login",fields=[]} = this.props;
    return(
      <ScrollView
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      >
        <KeyboardAvoidingView>
          <SafeAreaView style={{paddingTop:70}}>
            <Formik
              initialValues={{
                email: '',
                password: '',
                PhoneNumber: '',
                Cnic: '',
              }}
              // onSubmit={(values, actions) => {
              //   console.log(values);
              //   alert(JSON.stringify(values));
              //   setTimeout(() => {
              //     actions.setSubmitting(false);
              //   }, 1000);
              // }}
              validate={validate}>
              {({
                handleChange,
                handleBlur,
                values,
                handleSubmit,
                setFieldValue,
                errors,
                touched,
                setFieldTouched,
               
              }) => this.renderFields()}
            </Formik>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    
      flexGrow:1,
      alignItems:'center',
      justifyContent:'center',  
  },
  loginTxt:{
    fontSize:30,
    fontWeight: 'bold',
    color:'#37474f',
   // marginBottom:moderateScale(10),
    marginBottom:10
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
    borderRadius: 20,
  },
  phoneText: {},
  containerKeyboard: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#607d8b',
  },
  sloganTxt:{
    fontSize:20,
    fontWeight: 'bold',
    color:'#37474f',
  },
});