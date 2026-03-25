import React, { useContext, useState } from "react";
import { View ,Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { useMMKV } from "react-native-mmkv";
import { Menucontext } from "..";
import AddItem from "./setting/AddItem"
import AddCharge from "./setting/AddCharge";


export default function Setting (){
  const  [MenuSelected , setMenuSelected] = useState("AddItem")
    return(
        <View style = {styles.Maincontainer}>
                 <View style  = {styles.SettingMenu} >
                   <TouchableOpacity style = {styles.ButtonOption} onPress={()=> setMenuSelected("AddItem")}   > 
                             <Text style={{color : "white",fontSize :20}} > add product</Text>
                          </TouchableOpacity>
                           <TouchableOpacity style = {styles.ButtonOption}  onPress={()=> setMenuSelected("AddCharge")}    > 
                                     <Text style={{color : "white",fontSize :20}} > add charge</Text>
                                  </TouchableOpacity>
                                   <TouchableOpacity style = {styles.ButtonOption}  onPress={()=> setMenuSelected("ModifyStock")}    > 
                                             <Text style={{color : "white",fontSize :20}} > modify stock </Text>
                                          </TouchableOpacity>
                 </View>
                 {
                  MenuSelected == "AddItem" ? <AddItem /> : MenuSelected == "AddCharge" ? <AddCharge />  : <Text> asba</Text>
                 }
          
                 </View> 
    )
}
const styles = StyleSheet.create({
  Maincontainer : {
    width  :"100%" ,
     paddingBottom : 100 , 
     display : 'flex',
 
  } ,
  SettingMenu : {
    width : "100%" , 
    minHeight  : "10%" , 
    marginTop : 20 , 
    display : "flex" , 
    justifyContent : "space-around" , 
     alignItems : "center",
     flexDirection : "row"
  },
    MenuOptions : {
    width : "100%" ,
    height : "12%" ,
      display : "flex" ,
    justifyContent : "space-around" , 
    flexDirection : "row" ,
  },
   ButtonOption :  {

    padding :"2%", 
    borderRadius : 20 ,
        boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.5)',

  },
 
})