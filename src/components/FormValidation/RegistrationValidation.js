import * as Yup from 'yup';

function getValidationSchema(values) {
  return Yup.object().shape({
    email: Yup
      .string()
      .label('Email')
      .email()
      .required(),
    password: Yup
      .string()
      .label('Password')
      .required()
      .min(8, 'Your password must be 8 characters long')
      .max(24, 'Your password should be less than 25 characters')
      .matches(
        '^(?=.*[a-z])',
        'Your password must contain at least 1 lowercase alphabetical character',
      )
      .matches(
        '^(?=.*[A-Z])',
        'Your password must contain at least 1 Uppercase alphabetical character',
      )
      .matches(
        '^(?=.*[0-9])',
        'Your password must contain at least 1 Numeric character',
      )
      .matches(
        '^(?=.*[@$!%*#?&])',
        'Your password must contain at least 1 Special character',
      ),
    // '^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$'
    PhoneNumber: Yup
      .string()
      .min(11, 'invalid phone number')
      .max(11, 'invalid phone number')
      .matches('^[0-9]*$', 'this entry only contain numbers'),
      
    // .matches('(^.*[^<>].*$)','tata'),
    Cnic: Yup
    .string()
    .min(13,'invalid CNIC')
    .max(13,'invalid CNIC')
    .matches('^[0-9]*$', 'this entry only contain numbers'),
    
   
  });
}

function getErrorsFromValidationError(validationError) {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR]
    };
  }, {});
}

export const validate=(values)=> {
  const validationSchema = getValidationSchema(values);
  try {
    validationSchema.validateSync(values, { abortEarly: false });
    return {};
  } catch (error) {
    return getErrorsFromValidationError(error);
  }
}

