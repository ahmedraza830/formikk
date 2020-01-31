import React from 'react';
import PropTypes from 'prop-types';
import {Button, TextInput, Text, View, StyleSheet} from 'react-native';

const Input = props => {
  const _handleChange = value => {
    console.log(value);
    props.onChange(props.name, value);
  };
  const _handleTouch = () => {
    // props.onTouch(props.name);
  };

  const {error} = props;
  console.log(error);
  return (
    <View style={styles.inputContainer}>
      <Text>{props.name}</Text>
      <TextInput
        name={props.name}
        returnKeyType={props.returnKeyType}
        // style={styles.emailText}
        autoCapitalize="none"
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onBlur={_handleTouch}
        style={props.inputStyle}

        // value={props.value}
      />
      <Text style={{color: 'red'}}>{error}</Text>
    </View>
  );
};

Input.propTypes = {
  // inputStyle: PropTypes.,
  inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  returnKeyType: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    alignContent: 'center',
  },
  emailText: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 3,
    borderRadius: 20,
  },
});

export default Input;
