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
import {Formik} from 'formik';
import * as yup from 'yup';
import MyButton from '../myButton/Index';
import Input from '../Input/index';
import {validate} from '../../components/FormValidation/RegistrationValidation';

// const validationSchema = yup.object().shape({
//   email: yup
//     .string()
//     .label('Email')
//     .email()
//     .required(),
//   password: yup
//     .string()
//     .label('Password')
//     .required()
//     .min(8, 'Your password must be 8 characters long')
//     .max(24, 'Your password should be less than 25 characters')
//     .matches(
//       '^(?=.*[a-z])',
//       'Your password must contain at least 1 lowercase alphabetical character',
//     )
//     .matches(
//       '^(?=.*[A-Z])',
//       'Your password must contain at least 1 Uppercase alphabetical character',
//     )
//     .matches(
//       '^(?=.*[0-9])',
//       'Your password must contain at least 1 Numeric character',
//     )
//     .matches(
//       '^(?=.*[@$!%*#?&])',
//       'Your password must contain at least 1 Special character',
//     ),
//   // '^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$'
//   PhoneNumber: yup
//     .string()
//     .matches('^[0-9]*$', 'this entry only contain numbers')
//     .min(11, 'invalid phone number')
//     .max(11, 'invalid phone number'),
//   // .matches('(^.*[^<>].*$)','tata'),
// });
export default class FlatListDemo extends Component {
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView>
          <SafeAreaView style={{marginTop: 90}}>
            <Formik
              initialValues={{email: '', password: '', PhoneNumber: ''}}
              onSubmit={(values, actions) => {
                alert(JSON.stringify(values));
                setTimeout(() => {
                  actions.setSubmitting(false);
                }, 1000);
              }}
             // validationSchema={validationSchema}
              validate={validate}
              >
              {formikProps => (
                // <React.Fragment>

                <View>
                  <View style={{marginHorizontal: 20, marginVertical: 5}}>
                    <Text style={{marginBottom: 3}}>Email</Text>

                    <Input
                      returnKeyType="next"
                      placeholder="email"
                      onChangeText={formikProps.handleChange('email')}
                      onChange={formikProps.handleBlur('email')}
                      onBlur={formikProps.handleBlur('email')}
                      autoFocus
                      inputStyle={styles.emailText}
                      onSubmitEditing={() => this.secondInput.focus()}
                    />
                    <Text style={{color: 'red'}}>
                      {formikProps.touched.email && formikProps.errors.email}
                    </Text>
                  </View>

                  <View style={{marginHorizontal: 20, marginVertical: 5}}>
                    <Text style={{marginBottom: 3}}>Password</Text>
                    <Input
                      ref={ref => {
                        this.secondInput = ref;
                      }}
                      returnKeyType="next"
                      placeholder="email"
                      onChangeText={formikProps.handleChange('password')}
                      onChange={formikProps.handleBlur('password')}
                      onBlur={formikProps.handleBlur('password')}
                      inputStyle={styles.emailText}
                    />
                    <Text style={{color: 'red'}}>
                      {formikProps.touched.password &&
                        formikProps.errors.password}
                    </Text>
                  </View>

                  <View style={{marginHorizontal: 20, marginVertical: 5}}>
                    <Text style={{marginBottom: 3}}>Phone Number</Text>
                    <Input
                      placeholder="email"
                      onChangeText={formikProps.handleChange('PhoneNumber')}
                      onChange={formikProps.handleBlur('PhoneNumber')}
                      onBlur={formikProps.handleBlur('PhoneNumber')}
                      inputStyle={styles.emailText}
                    />
                    <Text style={{color: 'red'}}>
                      {formikProps.touched.PhoneNumber &&
                        formikProps.errors.PhoneNumber}
                    </Text>
                  </View>

                  {formikProps.isSubmitting ? (
                    <ActivityIndicator />
                  ) : (
                    <MyButton
                      text="Register"
                      onClick={formikProps.handleSubmit}
                    />
                    // <Button title="Submit" onPress={formikProps.handleSubmit} />
                  )}
                  {/* </React.Fragment> */}
                </View>
              )}
            </Formik>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
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
});