import { StyleSheet, TextInput, TouchableOpacity, View,Text } from "react-native";
import { styles } from "./AddItem";
import { useContext, useState } from "react";
import { useMMKV } from "react-native-mmkv";
import { Menucontext } from "../..";
import { GetTime } from "../../bodycomponent/Menubody";
export default function AddCharge() {
    const [ChargeCause,setChargeCause] = useState('')
    const [ChargeMount,setChargeMount] = useState('')
      const ContextValue = useContext(Menucontext)
    const time = GetTime()
    const storage = useMMKV()
    const ChargeConfirme = () =>{
        if(ChargeCause.length > 3 && ChargeMount.length > 2) {

     const jsonCharge= storage.getString("Charge")
     const newId = Math.random().toString();
     if(jsonCharge == undefined){
         const jsObject = []
        jsObject.push({id  : newId,cause : ChargeCause , price : ChargeMount,time : time})
        storage.set("Charge", JSON.stringify(jsObject))
        ContextValue.setOpenSetting(false)
        }
        else {
            const jsObject = JSON.parse(jsonCharge);
        jsObject.push({id  : newId,cause : ChargeCause , price : ChargeMount,time : time})
            storage.set("Charge", JSON.stringify(jsObject))
             ContextValue.setOpenSetting(false)
                    }
        }
        else alert("no data ")
    }
    return(
     <View style = {styles.card}>
        <View style = {style.MainConatianer}>

        
        <View style = {styles.inputSection} >
            <TextInput style ={styles.input} placeholder="raison de charge" onChangeText={(e)=>{setChargeCause(e)}} />
            <TextInput style ={styles.input} placeholder="montant de charge" onChangeText={(e)=>{setChargeMount(e)}} />
                 <TouchableOpacity style = {style.ItemStyle} onPress={()=> {ChargeConfirme()}} >
                      <Text style  = {{fontSize  : 20 , color :"white" , textAlign : "center"}} > Save Data </Text>
                    </TouchableOpacity>
         </View>
         </View>
     </View>    )   
}
const style = StyleSheet.create({
    MainConatianer : {
        height : "100%" , 
        width : "100%" , 
        display : "flex" , 
        justifyContent  : "center"  , 
        alignItems : "center" , 
        marginTop : "10%" , 
    },
    ItemStyle : {
fontSize : 20 , 
marginTop : 15 ,
marginLeft : 10 ,
marginRight : 20, 
marginBottom : 20,
display : "flex" ,
gap : 10,
boxShadow: '5px 5px 5px 5px rgba(28, 26, 26, 0.5)',
padding: 10,
},
})
