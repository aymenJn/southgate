import { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menucontext } from "..";
import { useMMKV } from "react-native-mmkv";
import Day from "./historique/financial";
import Week from "./historique/Stock";
import Month from "./historique/Operation";


export default function Historuqe (){
 const  [MenuSelected , setMenuSelected] = useState("financial")
    return(
        <View style = {styles.Maincontainer}>
                 <View style  = {styles.SettingMenu} >
                   <TouchableOpacity style = {styles.ButtonOption} onPress={()=> setMenuSelected("financial")}   > 
                             <Text style={{color : "white",fontSize :20}} > financial</Text>
                          </TouchableOpacity>
                           <TouchableOpacity style = {styles.ButtonOption}  onPress={()=> setMenuSelected("operation")}    > 
                                     <Text style={{color : "white",fontSize :20}} > operation</Text>
                                  </TouchableOpacity>
                                   <TouchableOpacity style = {styles.ButtonOption}  onPress={()=> setMenuSelected("stock")}    > 
                                             <Text style={{color : "white",fontSize :20}} > stock </Text>
                                          </TouchableOpacity>
                 </View>
                 {
                 MenuSelected == "financial" ? <Day /> : MenuSelected =="operation" ? <Week /> : <Month />
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