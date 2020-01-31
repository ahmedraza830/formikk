import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const MyButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onClick}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

MyButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    marginTop: 10,
    borderWidth: 1,
    alignItems:"center",
    alignSelf:"center",
    borderRadius: 20,
    backgroundColor: '#37474f',
    paddingVertical: 13,
    
  },
  buttonText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default MyButton;