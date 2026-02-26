
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppProvider  from '@/context/appcontext';
export default function HomeScreen() {
const [usernameV,setusernameV] = useState("") 
const [passwordV,setpasswordV] = useState("") 

const router  = useRouter() ;

  return (
<View style = {styles.Maincontainer}>
<TouchableOpacity>
  <TextInput style = {styles.input} placeholder='user name ' />
</TouchableOpacity>
  <TouchableOpacity>
  <TextInput style = {styles.input} placeholder='password' />
</TouchableOpacity>
<TouchableOpacity style = {styles.button} onPress={()=>{
              router.push("/Menulist")

}}>
  <Text style= {styles.buttonText} >
    Log In
  </Text>
</TouchableOpacity>
</View>   
  );
}
export const  styles = StyleSheet.create({
  Maincontainer : {
    color : "#E5E4E2",
    flex : 1 , 
    height : "100%" ,
    backgroundColor : "#343434",
    display : "flex" ,
    justifyContent : "center" , 
    alignItems : "center"
  }
  ,  
  input  : {
    color : "#E5E4E2" , 
    fontSize : 25 , 
    borderColor: '#708090', // Sets the color of the border
    borderWidth: 2,     // Sets the width of the border
    padding: 20,        // Adds some padding inside the border
    marginBottom: 20,
    borderRadius : 20 ,
    minWidth : "40%" ,
    textAlign  : "center"
  } 
  ,
  button: {
        marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,

    borderColor: '#8A9A5B', 
    minWidth   : "30%" , 
    minHeight  : 75
  },
  buttonText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '400',
    color: '#fff',
    fontFamily : "Inter_700Bold" ,
    letterSpacing : 2,
 
  }
})

