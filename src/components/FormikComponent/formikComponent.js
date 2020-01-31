import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {validate} from '../../components/FormValidation/RegistrationValidation';
import {Button, TextInput, View, StyleSheet} from 'react-native';

export class FormikComponent extends Component{
render(){
return(
  <View style={{width: '90%'}}>
  <Formik
    initialValues={{email: '', password: '', phoneNumber: ''}}
    // initialValues={{[props.name]: props.initalValue}}
    onSubmit={data => {
    }}
    validate={validate}>
      
    {({
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      errors,
    }) => {
      console.log("value",values)
      // return (
       
      // );
      {this.props.children}
    }}
  </Formik>
</View>
);
}


 
 
  //     onSubmit  = (values) => {

  //       alert(JSON.stringify(values));
      
  //     }

  // function handleChangeMethod(value) {
   
  //  return this.handleChange(value)
  // }


     handleChange = event => {
      // handleChange('email')
      // this.setState(prevValues => ({
        console.log("mmmmm",this.props)

      //   [event.target.name]: event.target.value
      // }));
    }

  //   handleBlur = event => {
  //     handleBlur('email')
  //     console.log("mmmmm",this.props)
  //     // this.setState(prevValues => ({

  //     //   [event.target.name]: event.target.value
  //     // }));
  //   }
  //   touched =event =>{
  //     touched('email')
  //   }

  //   errors =event =>{
  //   errors('email')
  //   }
  

    
  
   

  // render() {
  //   console.log("mmmmm",this.props)
  //   return (
  //     <Formik
  //     //  initialValues={{ email: "", password: "", confirmPassword: "" }}
  //     initialValues={this.props.initialValues}
  //     onSubmit={this.onSubmit}
  //     handleChange={this.handleChange}
  //     validate={validate}
  //     touched={this.touched}
  //     errors={this.errors}>

  //       {this.props.children}
        
  //      </Formik>
      
  //   );
  // }
  



}

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
  },
  emailText: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 3,
    borderRadius: 20,
  },
});





// const FormikComponent = props => {
//   return (
//     <Formik
//     initialValues={props.initialValues}
//     onSubmit={props.onSubmit}
//     handleChange={props.handleChange}
//     handleBlur={props.handleBlur}
//     >
    

//     </Formik>

  
//   );
// };

// FormikComponent.propTypes = {
 
//   initialValues: PropTypes.string.initialValues,
//   onSubmit: PropTypes.func,
//   handleChange: PropTypes.func,
//   handleBlur: PropTypes.func,
//   // value: PropTypes.string,
// };

export default FormikComponent 