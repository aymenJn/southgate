import { createContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./corecomponent/header";
import Menu from "./corecomponent/Mexnu";
import   { MMKV, useMMKV } from "react-native-mmkv"
export  const Menucontext = createContext(null)
export default function Menulist(){
const [OpenHistorique,setOpenHistorique] = useState(false) 
const [OpenSetting , setOpenSetting] = useState(false)

const storage =  useMMKV()
const userTable = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]

// Serialize and store
storage.set('users_table', JSON.stringify(userTable))

// Retrieve and deserialize
const jsonUserTable = storage.getString('users_table')
 const jsObject = JSON.parse(jsonUserTable);
jsObject.push({id  : 3,name : "aymen"})
storage.set('users_table', JSON.stringify(jsObject))
const jsonUserTable1 = storage.getString('users_table')
console.log(jsonUserTable1)
return(
   <Menucontext value={{OpenHistorique,setOpenHistorique,OpenSetting,setOpenSetting} }>


   <View style = {styles.Maincontaniner}>
   
    <Header />
    <Menu />
   </View>
   </Menucontext>
)
    
}
const styles = StyleSheet.create({
    Maincontaniner :{
    color : "#E5E4E2",
    flex : 1 , 
    height : "100%" ,
    backgroundColor : "#343434",
    display : "flex" ,
    justifyContent : "flex-start" , 
    alignItems : "center",

 } ,
 
})