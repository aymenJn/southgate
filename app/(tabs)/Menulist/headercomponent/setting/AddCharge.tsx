import { StyleSheet, TextInput, View } from "react-native";
import { styles } from "./AddItem";
import { useState } from "react";
export default function AddCharge() {
    const [ChargeCause,setChargeCause] = useState('')
    const [ChargeMount,setChargeMount] = useState('')
    return(
     <View style = {styles.card}>
        
        <View style = {styles.inputSection} >
            <TextInput style ={styles.input} placeholder="product name" onChangeText={(e)=>{setChargeCause(e)}} />
            <TextInput style ={styles.input} placeholder="product price" onChangeText={(e)=>{setChargeMount(e)}} />
         </View>
     </View>       
    )
}

