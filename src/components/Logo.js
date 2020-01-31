import React, { Component } from "react";
import { View,
         Text, 
         FlatList, 
         Button,
         TouchableOpacity,
         TextInput,
         StyleSheet,
         StatusBar,
         Image } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";

export default class Logo extends Component {
 
    constructor(props) {
      super(props); 
    
      
    }
    render()
    {
      return(
          <View style={styles.container}>
            <StatusBar backgroundColor="#37474f" barStyle="light-content" />
            <Image style={styles.logoImage}
            source={require('../images/logo.png')}/>
            <Text style={styles.loginTxt}>LOGIN</Text>
            
          </View>
      );
    }
    
  
  }
  
  const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    loginTxt:{
      
      color:'rgba(255, 255, 255,0.7)',
      
      fontSize : 22,
    },
    logoImage:{
      width:70,
      height:70,
    },
  });