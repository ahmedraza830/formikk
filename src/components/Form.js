import React, { Component } from "react";
import { View,
        
         TextInput,
         StyleSheet,
         TouchableOpacity,
         Text,
         
         Image } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";

export default class Form extends Component {
 
    constructor(props) {
      super(props); 
    
      
    }
    render()
    {
      return(
          <View style={styles.container}>
           
           <TextInput style={styles.inputBox} placeholder="Email" placeholderTextColor = "#ffffff" />
           <TextInput style={styles.inputBox} placeholder="Password" placeholderTextColor = "#ffffff"/>
           <TouchableOpacity style={styles.touchableOpacityBtn} >
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>
        </View>
      );
    }
    
  
  }
  
  const styles=StyleSheet.create({
    container:{
      flexGrow:1,
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
    inputBox:{
     width:300,
     borderWidth:1,
     borderRadius:15,
     color:'#ffffff',
     backgroundColor:'rgba(255,255,255,0.1)',
     marginVertical:10,
     paddingHorizontal:15
     
    },
    buttonText:{
      fontSize:19,
      fontWeight:"bold",
      color:'#ffffff',
      textAlign:'center',
    },
    touchableOpacityBtn:{
      width:300,
      marginTop:10,
      borderWidth:1,
      borderRadius:20,
      backgroundColor:'#37474f',
      paddingVertical:14,
      
      
      
      
    }
  });