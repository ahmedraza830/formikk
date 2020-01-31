import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import {ListItem, SearchBar} from 'react-native-elements';
import Logo from '../components/Logo';
import Form from '../components/Form';
export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} >
        <View style={styles.container}>
          {/* <StatusBar backgroundColor="#37474f" barStyle="light-content" /> */}
          <Logo />
          <Form />
          <View style={styles.signupTxtView}>
            <Text style={styles.signupTxt}>Don't have an account yet?</Text>
            <Text style={styles.signupTxt}>Signup</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#607d8b',
    backgroundColor: 'purple',
  },
  loginTxt: {
    alignContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  signupTxtView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  signupTxt: {
    fontSize: 13,
    marginVertical: 5,
    color: 'rgba(255, 255, 255,0.8)',
  },
});
